import React from "react";
import { Box, Container, Grid } from "@mui/material";
import Image from "next/image";
import snapLoanbg from "../../../../public/assest/homeRenovation/snapLoanbg.png";

const BackgroundImage = ({ children }) => {
  return (
    <Grid container>
      <Box
        sx={{ position: "relative", width: "100%",height: { xs: '80vh',sm:'100vh', md: '130vh' }, overflow: "hidden", mt: 8 }}
      >
        <Image
          src={snapLoanbg}
          alt="Background Image"
          style={{
            zIndex: -1,
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            
          }}
        />
        <Box sx={{ position: "relative", zIndex: 1, width: "100%", }}>
          {children}
        </Box>
      </Box>
    </Grid>
  );
};

export default BackgroundImage;
