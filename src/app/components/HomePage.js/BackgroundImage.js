import React from "react";
import { Box, Grid } from "@mui/material";



const BackgroundImage = ({ children, Animation }) => {
  return (
   
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: { xs: "80vh",sm:'100vh', md: "130vh",lg:'175vh' },
          overflow: "hidden",
  
        }}
      >
        <Box
          sx={{
            zIndex: -1,
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            mt: { xs: 25, sm: 10, md: 4 ,lg:2},
          }}
        >
          <Animation />
        </Box>
        <Box sx={{ position: "relative", zIndex: 1, width: "100%" }}>
          {children}
        </Box>
      </Box>
   
  );
};

export default BackgroundImage;
