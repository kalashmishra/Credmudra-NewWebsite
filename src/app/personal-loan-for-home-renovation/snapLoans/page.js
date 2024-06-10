import React from "react";
import { Container, Grid, Box, Typography } from "@mui/material";
import paint from "../../../../public/assest/homeRenovation/Paint_Splash.png";
import BackgroundImage from "./BackgroundImage";
import Image from "next/image";
import phone1 from "../../../../public/assest/homeRenovation/phone1.png";
import phone2 from "../../../../public/assest/homeRenovation/phone2.png";
import dashline1 from "../../../../public/assest/homeRenovation/dashline1.png";
import dashline2 from "../../../../public/assest/homeRenovation/dashline2.png";
const SnapLoans = () => {
  return (
    <Box
      sx={{
        position: "relative",
      }}
    >
      <BackgroundImage>
        <Container
          sx={{
            position: "relative",
            zIndex: 9,
            pt: { xs: 12, sm: 11, md: 12 },
          }}
          maxWidth="lg"
        >
          <Box
            sx={{
              color: "white",
              maxWidth: { xs: "250px", sm: "580px", md: "350px" },
              mx: "auto",
              textAlign: "center",
              paddingBottom: { xs: "10%", sm: "12%", md: "7%" },
            }}
          >
            <Typography
              variant="h3"
              align="center"
              sx={{
                fontWeight: 600,
                fontSize: { xs: "1.2rem", sm: "2.4rem", md: "3rem" },
              }}
            >
              Snap loans for dreamers
            </Typography>
            <Typography
              variant="body1"
              gutterBottom
              align="center"
              sx={{
                color: "rgba(255, 255, 255, 0.7)",
                fontSize: { xs: ".8rem", sm: ".9rem", md: ".9rem" },
                mt: { xs: 2, md: 3 },
              }}
            >
              Instant loans, powered by cutting-edge AI. Our money moves faster
              than your favourite playlist.
            </Typography>
          </Box>
          <Grid
            container
            spacing={4}
            justifyContent="center"
            alignItems="center"
          >
            <Grid item xs={6} md={6}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                    gap: "10px",
                    width: { xs: "200px", sm: "140px", md: "180px" },
                    textAlign: "center",
                    mb: { xs: 25, sm: 0 },
                  }}
                >
                  <Typography
                    variant="body1"
                    sx={{
                      color: "rgba(255, 255, 255, 0.8)",
                      fontSize: { xs: ".7rem", sm: "1rem", md: "1.1rem" },
                    }}
                  >
                    Unearth your perfect funds in just{" "}
                    <strong>3 minutes</strong>
                  </Typography>
                  <Box sx={{ width: "70%", height: "70%" }}>
                    <Image
                      src={dashline1}
                      alt="Dash Line Right"
                      style={{ width: "100%", height: "100%" }}
                    />
                  </Box>
                </Box>
                <Image
                  src={phone1}
                  alt="Phone Mockup 1"
                  style={{
                    width: "48%",
                    height: "auto",

                    margin: "0 auto",
                  }}
                />
              </Box>
            </Grid>
            <Grid item xs={6} md={6}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Image
                  src={phone2}
                  alt="Phone Mockup 1"
                  style={{
                    width: "48%",
                    height: "auto",

                    margin: "0 auto",
                  }}
                />
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                    gap: "10px",

                    width: { xs: "200px", sm: "140px", md: "180px" },
                    textAlign: "center",
                    mb: { xs: 25, sm: 0 },
                  }}
                >
                  <Typography
                    variant="body1"
                    sx={{
                      color: "rgba(255, 255, 255, 0.8)",
                      fontSize: { xs: ".7rem", sm: "1rem", md: "1.1rem" },
                    }}
                  >
                    Within <strong>24 hours</strong>, time to flex that
                    financial hustle
                  </Typography>
                  <Box sx={{ width: "70%", height: "70%" }}>
                    <Image
                      src={dashline2}
                      alt="Dash Line Right"
                      style={{ width: "100%", height: "100%" }}
                    />
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </BackgroundImage>
        {/* <Box 
        sx={{
          width: "15%",
          height: { xs: "10%", sm: "20%", md: "20%" },
          
          overflow: "hidden",
          position: "absolute",
          bottom: "-10%",
          left: "50%",
          transform: " translate(-50% , 0%)",
          bgcolor:'#fff',
          borderRadius:'50%',
          border:"15px solid #EBEFF8"
        }}>      */}
         <Box
          sx={{
            width: "20%",
            height: { xs: "10vh", sm: "20vh", md: "25vh" },
            overflow: "hidden",
            position: "absolute",
            bottom: "-12%",
            left: "50%",
            transform: " translate(-50% , 0%)",
            zIndex: 9,
          }}
        >
          <Image
            src={paint}
            alt="wave Image"
            style={{
              width: "100%",
              height: "100%",
              
            }}
          />
        </Box>
        {/* </Box> */}

    </Box>
  );
};

export default SnapLoans;
