import React from "react";
import { Container, Grid, Typography, Box } from "@mui/material";
// import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
// import BookIcon from '@mui/icons-material/Book';
// import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';
import BackgroundImage from "./backgroundImage";
import Image from "next/image";
import boost from "../../../../public/assest/homeRenovation/Boost.svg";
import book from "../../../../public/assest/homeRenovation/book.svg";
import rupee from "../../../../public/assest/homeRenovation/rupee.svg";



const HomeImprovement = () => {
  const features = [
    {
      icon: boost,
      title: "Boost that value",
      description:
        "Amp up your property’s value, making it a win-win—living the dream while securing that future resale.",
    },
    {
      icon: book,
      title: "Create epic memories",
      description:
        "It’s about the memories you build within them. Set the stage for epic moments and stories to unfold.",
    },
    {
      icon: rupee,
      title: "Invest in your loved ones",
      description:
        "By transforming your home you’re investing not just in your well-being but in a space crafted uniquely for your loved ones.",
    },
  ];

  return (
    <BackgroundImage>
      <Container
        maxWidth="lg"
        sx={{ position: "relative", zIndex: 9, pt: { xs: 12, sm: 16, md: 20 } }}
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
              color: "#fff",
              fontWeight: 600,
              fontSize: { xs: "1.2rem", sm: "2.4rem", md: "3rem" },
            }}
            gutterBottom
          >
            Why Home Improvement matters
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "rgba(255, 255, 255, 0.9)",
              fontSize: { xs: ".8rem", sm: "1rem", md: "1rem" },
              paddingTop: "10px",
              // padding:"0px 150px"
            }}
          >
            Upgrade your space, upgrade your vibes. Home Improvement isn’t just
            aesthetics.
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
                  width: "55px",
                  height: "55px",
                  borderRadius: "50px",
                  backgroundColor: "rgba(255, 255, 255, 0.12)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  src={feature.icon}
                  alt={`${feature.title} Icon`}
                  style={{ width: "80%", height: "auto" }}
                />
              </Box>
              <Typography
                variant="h5"
                gutterBottom
                sx={{
                  color: "#fff",
                  fontWeight: 500,
                  paddingTop: "15px",
                  fontSize: { xs: "1rem", sm: "1.2rem", md: "1.5rem" },
                }}
              >
                {feature.title}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "rgba(255, 255, 255, 0.7)",
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
      
    </BackgroundImage>
  );
};

export default HomeImprovement;
