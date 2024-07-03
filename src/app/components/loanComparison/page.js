import React from "react";
import { Box, Typography, Container } from "@mui/material";
import LoanList from "../lender/page";
import BackgroundImage from "./BackgroundImage";

const LoanComparison = ({ heading, subheading, useBackgroundImage=true, typographyColor = "#fff" ,captionBackgroundColor = "#ffffff1a", captionTextColor = "#FFFFFF"  }) => {
  const Content = (
    <>
      <Container
        maxWidth="xl"
        sx={{
          position: "relative",
          zIndex: 9,
          pt: { xs: 12, sm: 16, md: 20 },
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
            sx={{
              fontWeight: 700,
              color: typographyColor,
              fontSize: { xs: "1.2rem", sm: "2.4rem", md: "3rem" },
            }}
          >
            {heading}
          </Typography>
          <Typography
            variant="body1"
            gutterBottom
            sx={{
              pt: 2,
              pb: 2,
              color: typographyColor,
              fontSize: { xs: ".8rem", sm: "1rem", md: "1.25rem" },
            }}
          >
            {subheading}
          </Typography>
          <Typography
            variant="caption"
            sx={{
              bgcolor: captionBackgroundColor,
              p: 1,
              color: captionTextColor,
              fontSize: { xs: ".6rem" },
            }}
          >
            *Checking eligibility will not affect your credit score
          </Typography>
        </Box>
      </Container>
      <Box
        sx={{
          textAlign: "center",
          width: "100%",
        }}
      >
        <LoanList />
      </Box>
    </>
  );

  return useBackgroundImage ? (
    <BackgroundImage>{Content}</BackgroundImage>
  ) : (
    <Box>{Content}</Box>
  );
};

export default LoanComparison;
