import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import kreditbee from "../../../../public/assest/homeRenovation/kreditbee.svg";
import paysense from "../../../../public/assest/homeRenovation/paysense.svg";
import moneyview from "../../../../public/assest/homeRenovation/moneyview.svg";
import fibe from "../../../../public/assest/homeRenovation/fibe.svg";
import mpokket from "../../../../public/assest/homeRenovation/mpokket.svg";
import zype from "../../../../public/assest/homeRenovation/zype.svg";
import Image from "next/image";
const partners = [
  { name: "KreditBee", src: kreditbee },
  { name: "PaySense", src: paysense },
  { name: "moneyview", src: moneyview },
  { name: "Fibe", src: fibe },
  { name: "mPokket", src: mpokket },
  { name: "Zype", src: zype },
];

const OurPartners = ({heading, subheading}) => {
  return (
    <Container maxWidth="lg" >
      <Box
        sx={{
          textAlign: "center",
          py: 4,
          mt: 4,
           px:2,
          
        }}
      >
        <Typography
          variant="h4"
          gutterBottom
          sx={{ color: "#343435", fontWeight: "700", fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" },
        }}
        >
          {heading}
        </Typography>
        <Typography
          variant="body1"
          color="textSecondary"
          gutterBottom
          sx={{
            // color: "#050505b3",
            fontSize: { xs: ".9rem", sm: "1rem", md: "1rem" },
            mt: { xs: 2, sm: 3 },
           
          }}
        >
          {subheading}
        </Typography>
     
      <Grid container spacing={2} justifyContent="center" mt={6}>
        {partners.map((partner, index) => (
          <Grid item xs={6} sm={4} md={2} key={index}>
            <Image
              src={partner.src}
              alt={partner.name}
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </Grid>
        ))}
      </Grid>
      <Typography
        variant="h6"
        color="textSecondary"
        sx={{ mt: 3, fontWeight: "700",  fontSize: { xs: ".8rem", sm: "1rem" }, }}
      >
        +10 more
      </Typography>
      </Box>
    </Container>
  );
};

export default OurPartners;
