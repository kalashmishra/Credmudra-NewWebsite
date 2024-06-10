import React from "react";
import { Box, Container, Grid } from "@mui/material";
import Image from "next/image";
import snapLoanbg from "../../../../public/assest/homeRenovation/snapLoanbg.png";
import ellipse from "../../../../public/assest/homeRenovation/ellipse.png";

const BackgroundImage = ({ children }) => {
  return (
    <Grid container>
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: { xs: "80vh", sm: "100vh", md: "130vh" },
          overflow: "hidden",
          mt: 8,
        }}
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
        <Box sx={{ position: "relative", zIndex: 1, width: "100%" }}>
          {children}
        </Box>
        <Box
          sx={{
            width: {xs:'30%',sm:"15%"},
            height: { xs: "18%", sm: "20%", md: "20%" },

            overflow: "hidden",
            position: "absolute",
            bottom: "-10%",
            left: "50%",
            transform: " translate(-50% , 0%)",
            bgcolor: "#fff",
            borderRadius: "50%",
            border: "15px solid #3653a9cf",
          }}
        ></Box>
      </Box>
    </Grid>
  );
};

export default BackgroundImage;
