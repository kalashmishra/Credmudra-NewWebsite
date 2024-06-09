import React from "react";
import { Container, Grid, Typography, Box } from "@mui/material";
// import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
// import BookIcon from '@mui/icons-material/Book';
// import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';

import Image from "next/image";
import bangluru from "../../../../public/assest/homeRenovation/bangluru.png";
import mumbai from "../../../../public/assest/homeRenovation/mumbai.png";
import delhi from "../../../../public/assest/homeRenovation/delhi.png";
const Cities = () => {
  const features = [
    {
      icon: bangluru,
      title: "Bangluru",
      description:
        "Give your space a tech-savvy glow-up",
    },
    {
      icon: mumbai,
      title: "Mumbai",
      description:
        "Lights, camera, home renovation action",
    },
    {
      icon: delhi,
      title: "Delhi",
      description:
        "Spice up your space with heritage vibes!",
    },
  ];

  return (

      <Container
        maxWidth="lg"
        sx={{ position: "relative", zIndex: 9, pt: { xs: 6, sm: 7, md:8  } }}
      >
        <Box
          sx={{
            maxWidth: { xs: "240px", sm: "580px", md: "600px" },
            mx: "auto",

            textAlign: "center",
          }}
        >
          <Typography
            variant="h3"
            align="center"
            sx={{
        
              fontWeight: 600,
              fontSize: { xs: "1.2rem", sm: "2.4rem", md: "3rem" },
            }}
            gutterBottom
          >
            Why Home Improvement matters
          </Typography>
          </Box>
        <Grid
          container
          spacing={4}
          justifyContent="center"
          sx={{ paddingTop: "10%" }}
        >
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={4} align="center" key={index}>
              <Box
                sx={{
                  width: {xs:'100px',sm:'150px'},
                  height:  {xs:'100px',sm:'150px'},
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  src={feature.icon}
                  alt={`${feature.title} Icon`}
                  style={{ width: "100%", height: "auto" }}
                />
              </Box>
              <Typography
                variant="h5"
                gutterBottom
                sx={{
        
                  fontWeight: 600,
                  paddingTop: "15px",
                  fontSize: { xs: "1rem", sm: "1.2rem", md: "1.2rem" },
                }}
              >
                {feature.title}
              </Typography>
              <Typography
                variant="body1"
                color="textSecondary"
                sx={{
                  
                  fontSize: { xs: ".8rem", sm: ".8rem", md: ".9rem" },
                  padding: { xs: "0px 10px", sm: "0px 0px", md: "0px 20px" },
                }}
              >
                {feature.description}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Container>

  );
};

export default Cities;
