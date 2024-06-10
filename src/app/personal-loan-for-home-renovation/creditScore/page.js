import React from "react";
import { Container, Grid, Typography, Button, Box } from "@mui/material";
import Image from "next/image";
import creditScore from "../../../../public/assest/homeRenovation/creditScore.png";
import CommonButton from "@/app/components/CommonButton";
const CreditScoreCheck = () => {
  const content = [
    {
      number: "01",
      title: "Instant Visibility",
      description:
        "View your credit standing for swift insights into your financial health.",
    },
    {
      number: "02",
      title: "Instant Visibility",
      description:
        "View your credit standing for swift insights into your financial health.",
    },
    {
      number: "03",
      title: "Instant Visibility",
      description:
        "View your credit standing for swift insights into your financial health.",
    },
  ];

  return (
    <Box
    sx={{
      maxWidth: "100%",
      bgcolor: "rgba(245, 245, 245, 1)",
      // mt: 6,
    }}
  >
    <Container
      maxWidth="xl"
      sx={{
        minHeight: "100vh",
        textAlign: "center",
       
        paddingTop: "5%",
        mt: { xs: 2, sm: 2, md: 2 },
      }}
    >
      <Box
        sx={{
          textAlign: "center",
          // mt: { xs: 5, sm: 3, md: 9 },
          maxWidth: { xs: "250px", sm: "580px", md: "470px" },
          mx: "auto",
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontWeight: 700,
            color: "rgba(52, 52, 53, 1)",
            fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" },
          }}
        >
          Curious about your Credit Score?
        </Typography>
        <Typography
          variant="body1"
          color="textSecondary"
          sx={{
            fontSize: { xs: ".8rem", sm: "1rem", md: "1rem" },
            mt: { xs: 2, sm: 3 },
          }}
        >
          Discover your financial standing with our free credit score check.
        </Typography>
      </Box>

      <Grid container justifyContent="center">
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          sx={{ paddingTop: "4%", paddingBottom: "5%" }}
        >
          <Image
            src={creditScore}
            alt="Credit Score"
            style={{ width: "100%", height: "100%" }}
          />
        </Grid>
      </Grid>
      <Box
    sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      paddingBottom: '5%',
    }}
  >
    <Grid container justifyContent='center' maxWidth="lg" sx={{ padding: { xs: '25px 0px', md: '0px 20px' } }}>
      {content.map((item, index) => (
        <Grid item xs={12} sm={6} md={4} key={index} sx={{ paddingBottom: { xs: '20px', md: '0px' } }}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Box
              sx={{
                width: '40px',
                height: '40px',
                borderRadius: '50px',
                backgroundColor: ' #3653a9',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '0px 20px',
              }}
            >
              <Typography variant="h6" sx={{ color: '#fff' }}>
                {item.number}
              </Typography>
            </Box>
            <Box
              sx={{
                textAlign: 'left',
                padding: { xs: '0px 20px', sm: '0px 25px' },
              }}
            >
              <Typography
                variant="body1"
                sx={{ color: 'rgba(52, 52, 53, 1)', fontWeight: 600 }}
              >
                {item.title}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: 'rgba(52, 52, 53, 0.7)',
                  fontSize: { xs: '.8rem', sm: '.8rem', md: '.95rem' },
                }}
              >
                {item.description}
              </Typography>
            </Box>
          </Box>
        </Grid>
      ))}
    </Grid>
  </Box>

      <Box sx={{ paddingBottom: "4%" }}>
        {/* <Button
          variant="contained"
          sx={{
            backgroundColor: " #3653a9",
            borderRadius: "8px",
            padding: "12px 20px",
            textTransform: "none",
          }}
        >
          Check My Credit Score
        </Button> */}
        <CommonButton text={"Check My Credit Score"} />
      </Box>
    </Container>
    </Box>
  );
};

export default CreditScoreCheck;
