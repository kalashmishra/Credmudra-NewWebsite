"use client";
import React, { useState } from "react";
import { Box, Slider, Typography, Button, Grid } from "@mui/material";
import ReactECharts from "echarts-for-react";

const EMICalculator = () => {
  const [amount, setAmount] = useState(50000);
  const [interestRate, setInterestRate] = useState(9.9);
  const [tenure, setTenure] = useState(12);
  const [emi, setEmi] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  const calculateEMI = () => {
    const monthlyInterestRate = interestRate / 12 / 100;
    const emiAmount =
      (amount *
        monthlyInterestRate *
        Math.pow(1 + monthlyInterestRate, tenure)) /
      (Math.pow(1 + monthlyInterestRate, tenure) - 1);
    const totalPayment = emiAmount * tenure;
    const interestPayment = totalPayment - amount;

    setEmi(emiAmount.toFixed(2));
    setTotalInterest(interestPayment.toFixed(2));
    setTotalAmount(totalPayment.toFixed(2));
  };

  const pieChartOption = {
    title: {
      left: "center",
    },
    tooltip: {
      trigger: "item",
    },
    series: [
      {
        name: "EMI Breakdown",
        type: "pie",
        radius: "50%",
        data: [
          { value: totalInterest, name: "Interest Amount" },
          {
            value: amount,
            name: "Principal Amount",
            itemStyle: { color: "#C2CCEA" }, // Change color here
          },
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)",
          },
        },
      },
    ],
  };

  return (
    <Box sx={{ p: 4, boxShadow: 3, borderRadius: 2, backgroundColor: "#fff" }}>
      <Typography variant="h4" align="center" gutterBottom>
        Plan Ahead With Our Free EMI Calculator
      </Typography>
      <Typography align="center" gutterBottom>
        Worried about your monthly payments? Use our easy-to-use loan
        calculator to estimate your repayments and plan your finances
        accordingly.
      </Typography>
      <Grid container justifyContent="center">
        <Grid item md={4}>
          <Box my={4}>
            <Typography gutterBottom>Amount</Typography>
            <Slider
              value={amount}
              onChange={(e, val) => setAmount(val)}
              min={1000}
              max={1000000}
              valueLabelDisplay="auto"
              valueLabelFormat={(val) => `₹${val}`}
              sx={{
                color: "#C2CCEA", // Change slider color here
                "& .MuiSlider-thumb": {
                  color: "#3f51b5", // Change thumb color here
                },
                "& .MuiSlider-track": {
                  color: "#3f51b5", // Change track color here
                },
                "& .MuiSlider-rail": {
                  color: "#C2CCEA", // Change rail color here
                },
              }}
            />
          </Box>
          <Box my={4}>
            <Typography gutterBottom>Interest Rate In % P.A.</Typography>
            <Slider
              value={interestRate}
              onChange={(e, val) => setInterestRate(val)}
              min={0}
              max={20}
              step={0.1}
              valueLabelDisplay="auto"
              valueLabelFormat={(val) => `${val}%`}
              sx={{
                color: "#C2CCEA", // Change slider color here
                "& .MuiSlider-thumb": {
                  color: "#3f51b5", // Change thumb color here
                },
                "& .MuiSlider-track": {
                  color: "#3f51b5", // Change track color here
                },
                "& .MuiSlider-rail": {
                  color: "#C2CCEA", // Change rail color here
                },
              }}
            />
          </Box>
          <Box my={4}>
            <Typography gutterBottom>Loan Tenure (Months)</Typography>
            <Slider
              value={tenure}
              onChange={(e, val) => setTenure(val)}
              min={1}
              max={360}
              valueLabelDisplay="auto"
              valueLabelFormat={(val) => `${val} Months`}
              sx={{
                color: "#C2CCEA", // Change slider color here
                "& .MuiSlider-thumb": {
                  color: "#3f51b5", // Change thumb color here
                },
                "& .MuiSlider-track": {
                  color: "#3f51b5", // Change track color here
                },
                "& .MuiSlider-rail": {
                  color: "#C2CCEA", // Change rail color here
                },
              }}
            />
          </Box>
          <Box my={4} textAlign="center">
            <Button variant="contained" sx={{color:"#fff",backgroundColor:'#3f51b5'}} onClick={calculateEMI}>
              Calculate EMI
            </Button>
          </Box>
        </Grid>
        <Grid item md={4}>
          <Box>
            <ReactECharts option={pieChartOption} style={{ height: 400 }} />
            <Typography variant="h6" align="center">
              Monthly EMI: ₹{emi}
            </Typography>
            <Typography variant="h6" align="center">
              Total Interest: ₹{totalInterest}
            </Typography>
            <Typography variant="h6" align="center">
              Total Amount: ₹{totalAmount}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default EMICalculator;
