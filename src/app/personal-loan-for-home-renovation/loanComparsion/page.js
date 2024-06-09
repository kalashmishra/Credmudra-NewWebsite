import React from "react";
import { Box, Typography, Button, Container } from "@mui/material";
import LoanList from "../lender/page";
import BackgroundImage from "./BackgroundImage";

const LoanComparison = () => {
  return (
    <BackgroundImage>
      <Container
        maxWidth="xl"
        sx={{
          position: "relative",
          zIndex: 9,
          pt: { xs: 12,sm:16, md: 20 },

    
          paddingBottom: "7%",
        }}
      >
        <Box
          sx={{
            maxWidth: { xs: "270px", sm: "580px", md: "670px" },
            mx: "auto",
  
            textAlign: "center",
          }}
        >
          <Typography
            variant="h3"
            component="h1"
   
            gutterBottom
            sx={{ fontWeight: 700, color: "#fff",  fontSize: { xs: "1.2rem", sm: "2.4rem", md: "3rem" }, }}
          >
            Compare Loan for Home Improvement rates like a pro!
          </Typography>
          <Typography
            variant="body1"
            gutterBottom
            sx={{
        
          
              pt: 2,
              pb: 2,
              color: "rgba(255, 255, 255, 1)",
              fontSize: { xs: ".8rem", sm: "1rem", md: "1.25rem" },
            }}
          >
            Check your eligibility from our partners.
          </Typography>
          <Typography
            variant="caption"
            sx={{ bgcolor: "#ffffff1a", p: 1, color: "rgba(255, 255, 255, 1)" ,fontSize: { xs: ".6rem", }, }}
          >
            *Checking eligibility will not affect your credit score
          </Typography>
        </Box>
      </Container>
      <Box
        sx={{
          // position: "absolute",
          // top: "400%",
          // left: "50%",
          // transform: "translate(-50%, -50%)",
        
          textAlign: "center",
          width: "100%",
        }}
      >
        <LoanList />
      </Box>
    </BackgroundImage>
  );
};

export default LoanComparison;
