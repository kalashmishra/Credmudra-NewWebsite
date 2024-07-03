import React from "react";
import { Box,Grid } from "@mui/material";
import Image from "next/image";
import bgImage from "../../../../public/assest/homeRenovation/Rectangle.png";
import bucket from "../../../../public/assest/homeRenovation/bucket.png";

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
            height: { xs: "75vh", sm: "130vh", md: "150vh",lg:'110vh' },
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

        <Box
          sx={{
            position: "absolute",
            top: { xs: "-4%", sm: "-6%", md: "-6%" }, 
            left: { xs: "5%", sm: "5%", md: "5%" }, 
            width: { xs: "100px", sm: "120px", md: "150px" }, 
            height: "auto",
          }}
        >
          <Image
            src={bucket}
            alt="Bucket Image"
            layout="responsive"
            width={"100%"}
            height={"100%"}
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
