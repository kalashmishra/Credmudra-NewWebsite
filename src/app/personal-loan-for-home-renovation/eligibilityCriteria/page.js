import React from "react";
import { Container, Grid, Typography, Box } from "@mui/material";
import home from "../../../../public/assest/homeRenovation/home.png";
import loan from "../../../../public/assest/homeRenovation/Loan.png";
import Credit from "../../../../public/assest/homeRenovation/Credit.png";
import PaperWork from "../../../../public/assest/homeRenovation/Paper work.png";
import FianancialStability from "../../../../public/assest/homeRenovation/Fianancial Stability.png";
import eligibilityBg from "../../../../public/assest/homeRenovation/eligibilityBg.png";
import checks from "../../../../public/assest/homeRenovation/checks.png";
import Image from "next/image";

const criteria = [
  {
    icon: home,
    title: "Home Eligibility",
    description: "Own a house? You're halfway there!",
  },
  {
    icon: Credit,
    title: "Credit History",
    description: "Keep the credit score shining bright",
  },
  {
    icon: FianancialStability,
    title: "Financial stability",
    description: "Show us regular income",
  },
  {
    icon: loan,
    title: "Loan History",
    description:
      "Past loans? No worries! Your financial past won't hold you back!",
  },
  {
    icon: PaperWork,
    title: "Paperwork",
    description: "Basic doc to prove your identity, everything is digital",
  },
];

const EligibilityCriteria = () => {
  return (
    <Box
      sx={{
        maxWidth: "100%",
        backgroundColor: "#3653a9",
        mt: 6,
      }}
    >
      {" "}
      <Container maxWidth="lg" sx={{ position: "relative",}}>
        <Box
          sx={{
            position: "relative",
            overflow: "hidden",
            maxWidth: { xs: "250px", sm: "450px", md: "500px" },
            pt: { xs: 8, sm: 9, md: 4 },
            mx: "auto",
            textAlign: "center",
          }}
        >
          <Image
            src={eligibilityBg}
            alt="Background"
            style={{ zIndex: -1, width: "100%", height: "100%" }}
          />
          <Box
            textAlign="center"
            sx={{
              color: "white",
              //   maxWidth: { xs: "250px", sm: "580px", md: "700px" },
              pt: { xs: 10, sm: 15, md: 9 },
              mx: "auto",
              textAlign: "center",
              paddingBottom: "0%",
              position: "absolute",
              top: 0,
            }}
          >
            <Typography
              variant="h3"
              component="h1"
              gutterBottom
              sx={{
                fontWeight: 700,
                fontSize: { xs: "1.2rem", sm: "2.4rem", md: "3rem" },
              }}
            >
              Eligibility criteria highlights
            </Typography>
            <Typography
              variant="body1"
              gutterBottom
              sx={{
                fontSize: { xs: ".8rem", sm: "1rem", md: "1rem" },
                mt: { xs: 2, md: 3 },
              }}
            >
              Your guide to transformative loan for home improvement.
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            paddingBottom: "5%",
            mt: 7,
          }}
        >
          <Grid
            container
            maxWidth="lg"
            spacing={4}
            // sx={{ padding: { xs: "25px 0px", md: "0px 20px" } }}
          >
            {criteria.map((item, index) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={6}
                key={index}
                sx={{ paddingBottom: { xs: "20px", md: "30px" } }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "20px",
                  }}
                >
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
                      src={item.icon}
                      alt={`${item.title} Icon`}
                      style={{ width: "60%", height: "auto" }}
                    />
                  </Box>

                  <Box
                    sx={{
                      textAlign: "left",
                    }}
                  >
                    <Typography
                      variant="body1"
                      sx={{
                        color: "#fff",
                        fontWeight: 500,
                        fontSize: { xs: "1rem", sm: "1.2rem", md: "1.5rem" },
                      }}
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        color: "rgba(255, 255, 255, 0.7)",
                        fontSize: { xs: ".8rem", sm: ".8rem", md: ".95rem" },
                        paddingRight: { xs: "0px", sm: "30px" },
                      }}
                    >
                      {item.description}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
          <Box
            sx={{
              width: {xs:'40%',sm:'25%'},
              height: { xs: "20vh", sm: "20vh", md: "30vh" },
              overflow: "hidden",
              position: "absolute",
              bottom: "0%",
              right: "5%",
            }}
          >
            <Image
              src={checks}
              alt="wave Image"
              style={{
                width: "100%",
                height: "100%",
               
              }}
            />
          </Box>
        </Box>
       
      </Container>
    </Box>
  );
};

export default EligibilityCriteria;
