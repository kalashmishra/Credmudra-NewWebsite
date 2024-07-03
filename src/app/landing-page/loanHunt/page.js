// components/LoanHunt.js
import React from "react";
import { Container, Grid, Typography, Box } from "@mui/material";

const features = [
  {
    id: 1,
    title: "Multiple Offers In 3 Mins",
    description:
      "Experience the ease of choice with diverse loan offers in just 3 minutes",
  },
  {
    id: 2,
    title: "Faster Funding",
    description:
      "Quick approvals and lighting-speed funding no waiting around!",
  },
  {
    id: 3,
    title: "100% Online",
    description: "Unlock financial convenience with our 100% online experience",
  },
  {
    id: 4,
    title: "No Hidden Fee",
    description:
      "Transparent terms, no sneaky fees- what you see is what you get",
  },
];

const LoanHunt = () => {
  return (
    <Container
      disableGutters
      sx={{
        p: 0,
        mb:20
      }}
    >
      <Box textAlign="center" sx={{ mt: { xs: 15, sm: 20, md: 25 },   maxWidth: { xs: "250px", sm: "470px", md: "500px" },
        mx: "auto",
      }}>
        <Typography
          variant="h3"
          component="h1"
          gutterBottom
          sx={{
            fontSize: { xs: "1.2rem", sm: "2.4rem", md: "3rem" },
            color: "rgba(52, 52, 53, 1)",
            fontWeight: 700,
          }}
        >
          Loan Hunt Simplified With Credmudra
        </Typography>
        <Typography
          variant="body1"
          color="textSecondary"
          gutterBottom
          sx={{
            fontSize: { xs: ".8rem", sm: ".9rem", md: "1rem" },
            mt: { xs: 2, sm: 3 },
          }}
        >
          Uncover the perfect financing solution for your goals and simplify
          your loan search.
        </Typography>
      </Box>
      <Grid container spacing={4} justifyContent="center" mt={8}>
        {features.map((feature) => (
          <Grid item xs={10} sm={5} md={2.8} key={feature.id}>
            <Box textAlign="left">
              <Typography variant="h4" component="h2" sx={{color:'#3B5BBA', fontWeight:600}}>
                {`0${feature.id}`}
              </Typography>
              <Typography variant="h6" component="h3" gutterBottom sx={{fontWeight:600}}>
                {feature.title}
              </Typography>
              <Typography variant="body1" color="textSecondary">
                {feature.description}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default LoanHunt;
