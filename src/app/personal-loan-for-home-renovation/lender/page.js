
"use client";
import React from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Divider,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import ReactECharts from "echarts-for-react";
import Image from "next/image";
import paysense from "../../../../public/assest/homeRenovation/paysense.svg"
import cashe from "../../../../public/assest/homeRenovation/cashe.svg"
import fibe from "../../../../public/assest/homeRenovation/fibe.svg"
import zype from "../../../../public/assest/homeRenovation/zype.svg"
import CommonButton from "@/app/components/CommonButton";

const LoanCard = ({ lender, interestRate, tenure, creditScoreRange }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const getOption = () => ({
    series: [
      {
        type: "gauge",
        startAngle: 180,
        endAngle: 0,
        min: 600,
        max: 800,
        splitNumber: 4,
        axisLine: {
          lineStyle: {
            width: 10,
            color: [
              [0.25, "#FF4500"], // Red
              [0.5, "#FFD700"], // Yellow
              [0.75, "#ADFF2F"], // Light Green
              [1, "#00FF00"], // Green
            ],
          },
        },
        pointer: {
          length: "60%",
          width: 6,
        },
        axisTick: {
          show: false,
        },
        splitLine: {
          show: false,
        },
        axisLabel: {
          show: false,
        },
        detail: {
          show: false,
        },
        title: {
          show: false,
        },
        data: [
          {
            value: creditScoreRange,
          },
        ],
      },
    ],
  });

  return (
    <Container
      maxWidth="md"
      disableGutters
      sx={{
        p: 0,
      }}
    >
      <Card sx={{ mb: 3, p: 1, border: "none", boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)" }}>
        <CardContent sx={{ padding: "8px !important" }}>
          <Grid container alignItems="center"  >
            <Grid item xs={5.5} sm={2} sx={{paddingBottom:{xs:2}}}>
              <Image src={lender} alt="Lender logo" style={{ width: '70%', height: 'auto' }} />
            </Grid>
        
            <Divider orientation="vertical" flexItem sx={{ display: { xs: 'none', sm: 'block' } }} />
            

            <Grid item xs={5.5} sm={2.5} sx={{paddingBottom:{xs:2}}}>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <ReactECharts option={getOption()} style={{ height: "120px", width: "100%" }} />
              </Box>
              <Typography variant="body2" color="textSecondary" sx={{ textAlign: "center", fontSize: "10px", mt: -4 }}>
                Credit Score 600-800
              </Typography>
            </Grid>
          
            <Divider orientation="vertical" flexItem sx={{ display: { xs: 'none', sm: 'block' } }} />
            <Grid item xs={5.5} sm={2.3}  sx={{paddingBottom:{xs:2}}}>
              <Typography variant="body1" color="textSecondary" sx={{ fontSize: {xs:'12px', sm:'13px'} }}>
                <span style={{ fontWeight: 'bold', color: '#343435' }}>Interest rate</span> <br /> {interestRate}% p.a.
              </Typography>
            </Grid>
            <Divider orientation="vertical" flexItem sx={{ display: { xs: 'block', sm: 'block' } }} />
            <Grid item xs={5.5} sm={2.3} sx={{paddingBottom:{xs:2}}}>
              <Typography variant="body1" color="textSecondary" sx={{ fontSize: {xs:'12px', sm:'13px'} }}>
                <span style={{ fontWeight: 'bold', color: '#343435' }}>Tenure</span> <br /> {tenure}
              </Typography>
            </Grid>
            <Divider orientation="vertical" flexItem sx={{ display: { xs: 'none', sm: 'block' } }} />
            <Grid item xs={12} sm={2.5} >
              {/* <Button
                variant="contained"
                sx={{
                  fontSize: "14px",
                  textTransform: "none",
                  borderRadius: "8px",
                  backgroundColor: "#3653a9",
                  padding: "6px 12px",
          
                }}
              >
                Check Eligibility
              </Button> */}
            
            <CommonButton  text={"Check Eligibility"}/>
        
              <Typography variant="subtitle2" color="textSecondary" sx={{ fontSize: "10px", mt: 1, textAlign: 'center' }}>
                More Info
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Container>
  );
};

const LoanList = () => {
  const loans = [
    {
      lender: fibe,
      interestRate: "6.5% - 12%",
      tenure: "6 Mo - 2 Years",
      creditScoreRange: 700,
    },
    {
      lender: zype,
      interestRate: "6.5% - 12%",
      tenure: "6 Mo - 2 Years",
      creditScoreRange: 710,
    },
    {
      lender: paysense,
      interestRate: "6.5% - 12%",
      tenure: "6 Mo - 2 Years",
      creditScoreRange: 720,
    },
    {
      lender: cashe,
      interestRate: "6.5% - 12%",
      tenure: "6 Mo - 2 Years",
      creditScoreRange: 730,
    },
  ];

  return (
    <Grid container sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
      <Box
        sx={{
          p: 2,
          backgroundColor: "#f5f5f5",
          width: {xs:'90%',lg:'65%'},
          borderRadius: "24px",
        }}
      >
        <Box sx={{ mt: 3, mb: 3 }}>
          <Typography variant="subtitle2" color="textSecondary">
            Filters loan amount ₹50,000 and credit score (700-749)
          </Typography>
        </Box>
        {loans.map((loan, index) => (
          <LoanCard key={index} {...loan} />
        ))}
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Button color="primary" sx={{ mt: 3, mb: 3 }}>View More</Button>
        </Box>
      </Box>
    </Grid>
  );
};

export default LoanList;
