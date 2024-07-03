import React from "react";
import { Box,Grid } from "@mui/material";
import Image from "next/image";
import bgImage from "../../../../public/assest/landingPage/bgFeature.png";


const BackgroundImage = ({ children }) => {
  return (
    <Grid container>
      <Box
        sx={{
          position: "relative",
          mt: 8,
          width: "100%",
          height:'100%'
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: { xs: "85vh", sm: "100vh", md: "110vh",lg:'120vh' },
            zIndex: -1,
            position: "absolute",
            top: 0,
            left: 0,
           
          }}
        >
          <Image
            src={bgImage}
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
      </Box>
    </Grid>
  );
};

export default BackgroundImage;
