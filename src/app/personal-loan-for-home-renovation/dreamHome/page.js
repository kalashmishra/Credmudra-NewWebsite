import React from "react";
import {
  Container,
  Typography,
  Grid,
  Paper,
  Button,
  Box,
  Card,
  CardContent,
  IconButton,
} from "@mui/material";
import img1 from "../../../../public/assest/homeRenovation/img1.png";
import img2 from "../../../../public/assest/homeRenovation/img2.png";
import img3 from "../../../../public/assest/homeRenovation/img3.png";
import img4 from "../../../../public/assest/homeRenovation/img4.png";
import housePaint from "../../../../public/assest/homeRenovation/HousePaint.png";
import roofRepair from "../../../../public/assest/homeRenovation/RoofRepair.png";
import Image from "next/image";
import { mdiClose } from "@mdi/js";
import Icon from "@mdi/react";
import { mdiCheck } from "@mdi/js";
import CommonButton from "@/app/components/CommonButton";

const DreamHome = () => {
  return (
    <Container maxWidth="lg" sx={{ textAlign: "center" }}>
      <Box
        sx={{
          textAlign: "center",
          mt: { xs: 5, sm: 3, md: 9 },
          maxWidth: { xs: "250px", sm: "580px", md: "690px" },
          mx: "auto",
        }}
      >
        <Typography
          variant="h3"
          component="h1"
          gutterBottom
          sx={{
            fontSize: { xs: "1.2rem", sm: "2.4rem", md: "3rem" },
            color: "rgba(52, 52, 53, 1)",
            fontWeight: 700,
          }}
        >
          Unlock your dream home with Loan for Home Improvement
        </Typography>
        <Typography
          variant="body1"
          color="textSecondary"
          sx={{
            fontSize: { xs: ".7rem", sm: "1rem", md: "1.1rem" },
            mt: { xs: 2, sm: 3 },
          }}
        >
          More Than <span style={{ color: "#3653a9" }}>15% Saving</span>
        </Typography>
      </Box>
      <Grid container spacing={4} justifyContent="center" sx={{ mt: 3 }}>
        {[
          {
            img: img1,
            text: "Creating a cozy retreat in your living spaces for ultimate relaxation",
            amount: "Upto ₹ 10 lakh",
          },
          {
            img: img2,
            text: "Are you ready to turn that outdated kitchen into a modern culinary haven",
            amount: "Upto ₹ 10 lakh",
          },
          {
            img: housePaint,
            text: "Boosting your home’s appeal with a fresh coat of paint and landscaping",
            amount: "Upto ₹ 10 lakh",
          },
          {
            img: roofRepair,
            text: "Dealing with unexpected repairs like a leaky roof or faulty wiring",
            amount: "Upto ₹ 10 lakh",
          },
        ].map((item, index) => (
          <Grid item xs={12} sm={6} md={3.7} key={index}>
            <Paper
              sx={{
                padding: 3,
                borderRadius: 2,
                textAlign: "center",
                border: "none",
                boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.05)",
              }}
              elevation={3}
            >
              <Typography
                variant="body2"
                sx={{
                  color: "rgba(52, 52, 53, 1)",
                  paddingBottom: "12px",
                  fontSize: { xs: ".8rem", sm: ".8rem", md: ".9rem" },
                }}
              >
                {item.text}
              </Typography>
              <Box>
                {" "}
                <Image
                  src={item.img}
                  alt="images"
                  style={{
                    width: "100px",
                    height: "100px",
                    objectFit: "cover",
                  }}
                />{" "}
              </Box>
              {/* <Button
                variant="contained"
                sx={{
                  mt: 2,
                  backgroundColor: "#3653a9",
                  borderRadius: "8px",
                  textTransform: "none",
                  marginBottom: "5px",
                }}
              >
                Unlock Funds
              </Button> */}
              <Box sx={{mt:2}}>
              <CommonButton text={"Unlock Funds"} />
              </Box>
              <Typography
                variant="caption"
                display="block"
                sx={{ mt: 1, color: "rgba(52, 52, 53, 0.5) " }}
              >
                {item.amount}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>

      {/* <Button
        variant="contained"
        sx={{
          mt: 8,
          backgroundColor: "#3653a9",
          borderRadius: "8px",
          textTransform: "none",
        }}
      >
        Secure Future & Apply Now
      </Button> */}
      <Box sx={{mt:8}}>
              <CommonButton text={" Secure Future & Apply Now"} />
              </Box>
              
      <Box
        sx={{
          maxWidth: { xs: "250px", sm: "580px", md: "700px" },
          mx: "auto",

          textAlign: "center",
          py: 5,
        }}
      >
        <Typography
          variant="h3"
          component="h2"
          gutterBottom
          sx={{
            fontWeight: 700,
            color: "rgba(52, 52, 53, 1)",
            fontSize: { xs: "1.2rem", sm: "2.4rem", md: "3rem" },
          }}
        >
          Home improvement loan vs Loan for home improvement
        </Typography>
        <Typography
          variant="body1"
          gutterBottom
          sx={{
            color: "rgba(52, 52, 53, 0.7)",
            fontSize: { xs: ".8rem", sm: "1rem", md: "1rem" },
          }}
        >
          The do's and don'ts of home improvement loans.
        </Typography>

       
       
      </Box>
      <Grid container spacing={3} justifyContent="center" sx={{ mt: 3 }}>
          <Grid item xs={12} sm={6} md={3.5}>
            <Box>
              {" "}
              <Image
                src={img3}
                alt="images"
                style={{
                  width: "120px",
                  height: "120px",
                  objectFit: "cover",
                  marginBottom: "10%",
                }}
              />{" "}
            </Box>
            <Box
              sx={{
                padding: "20px",
                position: "relative",
                borderRadius: 2,
                textAlign: "center",
                border: "1px solid rgba(225, 225, 225, 1)",
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  top: "0%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  backgroundColor: "rgba(44, 146, 73, 1)",
                  color: "#ffffff",
                  width: "45px",
                  height: "45px",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Icon path={mdiCheck} size={1} />
              </Box>
              <Typography
                variant="body2"
                sx={{
                  margin: "15px 0px",
                  color: "rgba(52, 52, 53, 1)",
                  fontSize: { xs: '.8rem', sm: '.8rem', md: '.9rem' }
                }}
              >
                For purchase of new furniture or fixing up anything that can be
                easily moved around
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3.5}>
            <Box>
              {" "}
              <Image
                src={img4}
                alt="images"
                style={{
                  width: "120px",
                  height: "120px",
                  objectFit: "cover",
                  marginBottom: "10%",
                }}
              />{" "}
            </Box>
            <Box
              sx={{
                padding: "20px",
                position: "relative",
                borderRadius: 2,
                textAlign: "center",
                border: "1px solid rgba(225, 225, 225, 1)",
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  top: "0%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  backgroundColor: "rgba(214, 55, 55, 1)",
                  color: "#ffffff",
                  width: "45px",
                  height: "45px",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Icon path={mdiClose} size={1} />
              </Box>
              <Typography
                variant="body2"
                sx={{
                  margin: "15px 0px",
                  color: "rgba(52, 52, 53, 1)",
                  fontSize: { xs: '.7rem', sm: '.8rem', md: '.9rem' }
                }}
              >
                For purchase of new furniture or fixing up anything that can be
                easily moved around
              </Typography>
            </Box>
          </Grid>
          <Grid
          item xs={9} sm={8} md={6} alignItems='center'
            sx={{
              bgcolor: "rgba(235, 239, 248, 1)",
              padding: "16px",
              borderRadius:'5px',
              // maxWidth: {xs:'70%',sm:'70%',md:'80%'},
            width:'50%',
              mt: 5,
            }}
          >
            <Typography
              variant="body1"
              sx={{ color: "#3653a9", fontWeight: 500, fontSize: { xs: '.8rem', sm: '.8rem', md: '1rem' } }}
            >
              Credmudra provides you with{" "}
              <strong
                style={{
                  backgroundColor: "#3653a9",
                  color: "#fff",
                  padding: "2px",
                }}
              >
                Loan for home improvement
              </strong>{" "}
              <br />
              that you can use for furnishing, similar to a personal loan
            </Typography>
          </Grid>
        </Grid>
        {/* <Button
          variant="contained"
          sx={{
            mt: 4,
            backgroundColor: "#3653a9",
            borderRadius: "8px",
            textTransform: "none",
          }}
        >
          Ready To Transform
        </Button> */}
        <Box sx={{mt:4}}>
          <CommonButton text={" Ready To Transform"} />
        </Box>
    </Container>
  );
};

export default DreamHome;
