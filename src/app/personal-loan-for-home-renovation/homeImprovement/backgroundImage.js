import React from "react";
import { Box, Container, Grid } from "@mui/material";
import Image from "next/image";
import homeImprovement from "../../../../public/assest/homeRenovation/homeImprovement.png";
import bottomImg from "../../../../public/assest/homeRenovation/bottomImg.png";

const BackgroundImage = ({ children }) => {
  return (
    <Grid container>
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: { xs: "125vh", sm: "120vh", md: "110vh" },
          overflow: "hidden",
          mt: 8,
        }}
      >
        <Box
          sx={{
            zIndex: -1,
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height:'100%'
          }}
        >
          {" "}
          <Image
            src={homeImprovement}
            alt="Background Image"
            style={{
              width: "100%",
              height: "100%",
            }}
          />
        </Box>

        <Box sx={{ position: "relative", zIndex: 1, width: "100%" }}>
          {children}
        </Box>
        <Box
        sx={{
          width: "100%",
          height: {xs:'8vh',sm:'12vh',sm:'15vh'},
          overflow: "hidden",
          position: "absolute",
          bottom: 0,
          left: 0,

          
        }}
      >
        <Image
          src={bottomImg}
          alt="wave Image"
          style={{
            width: "100%",
            height: "100%",
                     }}
        />
      </Box>
     
      </Box>
    </Grid>
  );
};

export default BackgroundImage;
