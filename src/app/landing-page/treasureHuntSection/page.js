import React from "react";
import { Container, Typography, Grid, Paper, Box } from "@mui/material";
import Image from "next/image";
import happyCustomers from "../../../../public/assest/landingPage/happyCustomer.png"
import loanApproved from "../../../../public/assest/landingPage/loanApproved.png"
import loanDisbursed from "../../../../public/assest/landingPage/loanDisbursed.png"
const TreasureHuntSection = () => {
    const stats = [
        {
          img: happyCustomers,
          alt: "Happy Customers",
          value: "1 Lakh+",
          label: "Happy Customers",
        },
        {
          img: loanApproved,
          alt: "Loan Approved",
          value: "₹20 Cr",
          label: "Loan approved",
        },
        {
          img: loanDisbursed,
          alt: "Loan Disbursed",
          value: "₹9 Cr",
          label: "Loan disbursed",
        },
      ];
      
  return (
    <Container maxWidth="lg" sx={{ textAlign: "center", mt: 5 }}>
      <Typography
        variant="h4"
        component="h1"
        gutterBottom
        sx={{
          fontSize: { xs: "1.5rem", sm: "2.5rem", md: "3rem" },
          fontWeight: 700,
        }}
      >
        Where Finding Cash Becomes A Treasure Hunt
      </Typography>

      <Grid container spacing={4} justifyContent="center" sx={{ mt: 5 }}>
        {stats.map((stat, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Paper
              sx={{
                padding: { xs: 2, sm: 3 },
                borderRadius: 2,
                textAlign: "center",
                border: "none",
                boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.05)",
                // backgroundColor: "rgba(240, 244, 255, 0.5)"
              }}
              elevation={3}
            >
              <Box
                sx={{
                  width: { xs: "60%", sm: "50%", md: "40%" },
                  marginX: "auto",
                  pb: 2,
                }}
              >
                <Image
                  src={stat.img}
                  alt={stat.alt}
                  layout="responsive"
                  width={100}
                  height={100}
                />
              </Box>
              <Typography
                variant="h6"
                sx={{
                  color: "rgba(52, 52, 53, 1)",
                  fontSize: { xs: "1rem", sm: "1.2rem", md: "1.5rem" },
                  fontWeight: 700,
                }}
              >
                {stat.value}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "rgba(52, 52, 53, 0.7)",
                  fontSize: { xs: "0.8rem", sm: "1rem", md: "1.2rem" },
                }}
              >
                {stat.label}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default TreasureHuntSection;
