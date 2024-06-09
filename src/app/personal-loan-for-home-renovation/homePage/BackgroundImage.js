import React from "react";
import { Box, Grid } from "@mui/material";

import Animation from "./animation/page";

const BackgroundImage = ({ children }) => {
  return (
    <Grid container>
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: { xs: "76vh", md: "160vh" },
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
            mt: { xs: 25, sm: 10, md: 4 },
          }}
        >
          <Animation />
        </Box>
        <Box sx={{ position: "relative", zIndex: 1, width: "100%" }}>
          {children}
        </Box>
      </Box>
    </Grid>
  );
};

export default BackgroundImage;
