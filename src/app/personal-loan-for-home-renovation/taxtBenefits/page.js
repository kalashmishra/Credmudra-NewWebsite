import React from 'react';
import { Box, Typography, Paper, Container, Grid } from '@mui/material';
import Image from 'next/image';
// import SpeakerPhoneIcon from '@mui/icons-material/SpeakerPhone';
import speaker from "../../../../public/assest/homeRenovation/speaker.png"
import cloud from "../../../../public/assest/homeRenovation/cloud.png"
const TaxBenefits = () => {
  return (
    <Box
    sx={{
      maxWidth: "100%",
      backgroundColor: '#E6EDFB',
      // mt: 6,
    }}
  >
    <Container  maxWidth="xl"
   
      sx={{
        textAlign: 'center',
        height:{xs:'70vh',lg:'70vh'},
        pt: { xs: 6, sm: 11, md: 12 },
       
      }}
    >
      <Grid container sx={{display:'flex',flexDirection:'column',alignItems:'center'}}>
        <Grid item xs={10} sm={7} md={6} lg={5} >
      <Typography variant="h3" component="h1" gutterBottom  sx={{color: "#343435",  fontWeight: 600, fontSize: { xs: "1.2rem", sm: "2.4rem", md: "3rem" }, }}>
        Tax benefits-home improvement edition
      </Typography>
      </Grid>
      <Grid item xs={10} sm={7}  md={6} lg={5}>   
        <Typography variant="subtitle1"  color="textSecondary"  gutterBottom  sx={{
            
            fontSize: { xs: ".8rem", sm: ".9rem", md: ".9rem" },
            mt: { xs: 2, md: 3 },

          }}
        >
        Dive into the tax game and grab some major benefits for your home improvement.
      </Typography>
      </Grid>
 
      </Grid>
      <Box
        sx={{
          mt:3,
          position: 'relative',
          marginX:"auto",
          padding: '2rem 1rem',
          maxWidth: {xs:'230px', sm:'300px', md:'300px'},
          backgroundColor: '#fff',
          textAlign: 'center',
          zIndex: 1,
          '::before': {
            content: '""',
            position: 'absolute',
            bottom: '-10px',
            left: '10px',
            width: 'calc(100% - 10px)',
            height: '10px',
            backgroundColor: '#3657DB',
          },
          '::after': {
            content: '""',
            position: 'absolute',
            top: '10px',
            right: '-10px',
            width: '10px',
            height: '100%',
            backgroundColor: '#3657DB',
          },
        }}
      >
        <Box sx={{pb:2, width:{xs:'30px ',sm:'30px', md:'45px'},marginX:'auto'}}>
        <Image src={speaker} alt='speaker' style={{width:'100%',height:'100%'}} />
        </Box>
        <Typography variant="body1" sx={{ color: 'rgba(52, 52, 53, 0.5)',lineHeight:2,  fontSize: { xs: ".8rem", sm: "1rem", md: "1rem" },
 }}>
          In accordance with Section 24 of the Indian Income Tax Act, 1961, the interest paid on a
          home improvement loan is eligible for tax deduction, limited to Rs 30,000 per annum.
        </Typography>
        <Box
          sx={{
            position: 'absolute',
            top: '10px',
            left: '10px',
            width: '10px',
            height: '10px',
            backgroundColor: '#3657DB',
            borderRadius: '50%',
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            top: '10px',
            right: '10px',
            width: '10px',
            height: '10px',
            backgroundColor: '#3657DB',
            borderRadius: '50%',
          }}
        />
      </Box>

    </Container>
    <Box
        sx={{
          width: "100%",
          height: {xs:'10vh',sm:'20vh', md:'30vh'},
          overflow: "hidden",
          position: "relative",
         
        }}
      >
        <Image
          src={cloud}
          alt="wave Image"
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            bottom: "-60%",
            left: 0,
          }}
        />
      </Box>
    </Box>
  );
};

export default TaxBenefits;
