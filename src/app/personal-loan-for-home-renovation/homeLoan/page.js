import React from "react";
import { Container, Typography, Grid, Paper, Box } from "@mui/material";
import vector from "../../../../public/assest/homeRenovation/vector.png";
import Ladder from "../../../../public/assest/homeRenovation/Ladder.png";
import Image from "next/image";
const HomeLoan = () => {
  const items = [
    {
      title: "Multiple offers in 3 mins",
      description:
        "Experience the ease of choice with diverse loan offers in just 3 minutes",
    },
    {
      title: "Faster funding",
      description:
        "Quick approvals and lightning-speed funding, no waiting around!",
    },
    {
      title: "100% online",
      description:
        "Unlock financial convenience with our 100% online experience",
    },
    {
      title: "No hidden charges",
      description:
        "Transparent terms, no sneaky fees - what you see is what you get",
    },
  ];
  return (
    <Box
      sx={{
        maxWidth: "100%",
        backgroundColor: "#3653a9",
        position: "relative",
        mt: 10,
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: { xs: "-8%", sm: "-14%", md: "-18%" }, // adjust the top position as needed
          right: { xs: "5%", sm: "5%", md: "8%" }, // adjust the left position as needed
          width: { xs: "120px", sm: "150px", md: "200px" }, // adjust the width as needed
          height: "auto",
        }}
      >
        <Image
          src={Ladder}
          alt="Ladder Image"
          layout="responsive"
          width={"100%"}
          height={"100%"}
        />
      </Box>
      <Container
        maxWidth="xl"
        sx={{
          pt: { xs: 18, sm: 20, md: 25 },
        }}
      >
        <Box
          sx={{
            color: "white",
            maxWidth: { xs: "250px", sm: "580px", md: "700px" },
            mx: "auto",
            textAlign: "center",
            paddingBottom: "0%",
          }}
        >
          <Typography
            variant="h3"
            component="h1"
            gutterBottom
            sx={{
              fontWeight: 700,
              fontSize: { xs: "1.4rem", sm: "2.4rem", md: "3rem" },
            }}
          >
            Loan for Home Improvement simplified with Credmudra
          </Typography>
          <Typography
            variant="body1"
            gutterBottom
            sx={{
              fontSize: { xs: ".8rem", sm: "1rem", md: "1rem" },
              mt: { xs: 2, md: 3 },
            }}
          >
            Your home, your rules. Transforming dreams into walls, windows and
            wow.
          </Typography>
        </Box>
        <Grid container spacing={3} justifyContent="center" sx={{ mt: 3 }}>
          {items.map((feature, index) => (
            <Grid item xs={11} sm={5} md={3} align="center" key={index}>
              <Paper
                sx={{
                  padding: 2,
                  backgroundColor: "#ffffff",
                  borderRadius: 2,
                }}
                elevation={3}
              >
                <Typography
                  variant="body1"
                  sx={{ fontWeight: "700", color: "rgba(52, 52, 53, 1)" }}
                >
                  {feature.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: "rgba(52, 52, 53, 0.7)",
                    fontSize: { xs: ".8rem", sm: ".8rem", md: ".9rem" },
                    padding: "10px 0px",
                  }}
                >
                  {feature.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
      <Box
        sx={{
          width: "100%",
          height: {xs:'10vh',sm:'20vh', md:'30vh'},
          overflow: "hidden",
          position: "relative",
          mt:5
        }}
      >
        <Image
          src={vector}
          alt="wave Image"
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            bottom: 0,
            left: 0,
          }}
        />
      </Box>
    </Box>
  );
};

export default HomeLoan;
