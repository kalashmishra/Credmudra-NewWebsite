import React from "react";
import { Box, Typography, Grid, Container } from "@mui/material";

const features = [
  { text: "Multiple loan options", size: { xs: "12vh", sm: "18vh" } },
  { text: "No need of security or collaterals", size: { xs: "15vh", sm: "20vh" }  },
  { text: "Absolutely ZERO hassle", size: { xs: "13vh", sm: "15vh" } },
  { text: "At the comfort of your home", size: { xs: "13vh", sm: "22vh" }  },
  { text: "Instant approval", size: { xs: "10vh", sm: "12vh" } },
  { text: "Trust and security ensured", size: { xs: "15vh", sm: "18vh" } },
  { text: "100% Paperless", size: { xs: "10vh", sm: "18vh" }, mTop: 1 },
  { text: "Save money, compare and apply", size: { xs: "15vh", sm: "18vh" } },
];

const KeyFeatures = () => {
  return (
    <Container
      maxWidth="xl"
      disableGutters
      sx={{
        p: 0,
        position: "relative",
        zIndex: 9,
        overflow:'hidden',
        mt:5,
      }}
    >
      <Box
        sx={{
          textAlign: "center",
          mt: { xs: 5, sm: 3, md: 9 },
          maxWidth: { xs: "250px", sm: "470px", md: "500px" },
          mx: "auto",
        }}
      >
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
          Our key features and benefits
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
          Discover funds in a whole new way. Upgrade your space, upgrade your
          vibes.
        </Typography>
      </Box>
      <Grid container maxWidth='550px' marginX='auto'  spacing={1} justifyContent="center" mt={3}>
        {features.map((feature, index) => (
          <Grid item key={index} alignItems="center" >
            <Box
              sx={{
                backgroundColor: "#3f51b5",
                color: "white",
                borderRadius: "50%",
                padding: 2,
                width: feature.size,
                height: feature.size,
                mt: feature.mTop,
                mb: feature.mBottom,

                display: "flex",
                alignItems: "center",
                justifyContent: "center",
    
                textAlign: "center",
              }}
            >
              <Box sx={{ }}>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: { xs: ".7rem", sm: ".8rem", md: ".9rem" },
                    lineHeight: "1.4",
                  }}
                >
                  {feature.text}
                </Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default KeyFeatures;
