import React from "react";
import { Box, Typography, Grid, IconButton } from "@mui/material";
//import EmailIcon from '@mui/icons-material/Email';
// import PhoneIcon from '@mui/icons-material/Phone';
import Icon from "@mdi/react";
import { mdiEmailOutline } from "@mdi/js";
import { mdiPhoneOutline } from "@mdi/js";
import { mdiCircleSmall } from "@mdi/js";

import Image from "next/image";
import wall from "../../../../public/assest/homeRenovation/wall.png";
import { Container } from "@mui/system";
const ContactInfo = () => {
  return (
    <Box
      sx={{
        maxWidth: "100%",
        background: "linear-gradient(to top, #ffffff, #f0f4ff)",
      }}
    >
      <Container maxWidth="xl" sx={{
        textAlign: 'center',
        
       
        minHeight: '100vh',
        pt: { xs: 6, sm: 7, md: 8 },
        
      }}
    >
      
        <Grid
          container
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Grid item xs={10} sm={7} md={6} lg={5}>
            <Typography
              variant="h3"
              align="center"
              sx={{
                fontWeight: 600,
                fontSize: { xs: "1.2rem", sm: "2.4rem", md: "3rem" },
              }}
              gutterBottom
            >
              Have questions?
            </Typography>
          </Grid>
          <Grid item xs={10} sm={7} md={6} lg={5}>
            <Typography
              variant="body1"
              color="textSecondary"
              sx={{
                fontSize: { xs: ".8rem", sm: "1rem", md: "1rem" },
                mt: { xs: 2, md: 3 },
                // padding:"0px 150px"
              }}
            >
              Still vibing with questions, hit us up at
            </Typography>
          </Grid>
          <Grid
            item
            xs={10}
            md={6}
            sx={{
              display: { xs: "column", sm: "flex" },
              justifyContent: "center",
              alignItems: "center",
              margin: "3rem 0",
              border: "1px dashed rgba(198, 198, 198, 1)",
              textAlign: "center",
              marginX: "auto",
              padding: "10px 0px",
              borderRadius: "5px",
            }}
          >
            <IconButton href="mailto:support@credmudra.com">
              <Icon path={mdiEmailOutline} size={1} color="#343435" />
              <Typography variant="body1" sx={{ marginLeft: "0.5rem" }}>
                support@credmudra.com
              </Typography>
            </IconButton>
            <IconButton href="tel:8665406005">
              <Icon path={mdiPhoneOutline} size={1} color="#343435" />

              <Typography variant="body1" sx={{ marginLeft: "0.5rem" }}>
                866-540-6005
              </Typography>
            </IconButton>
          </Grid>
        </Grid>
        <Grid container spacing={2} justifyContent="center">
          <Grid
            item
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Icon path={mdiCircleSmall} size={2} />

            <Typography variant="body1" sx={{ fontWeight: 700 }}>
              Sat{" "}
              <span style={{ color: "#343435B2", fontWeight: 500 }}>
                {" "}
                10am - 6pm IST
              </span>
            </Typography>
          </Grid>
          <Grid
            item
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Icon path={mdiCircleSmall} size={2} />
            <Typography variant="body1" sx={{ fontWeight: 700 }}>
              Mon - Fri{" "}
              <span style={{ color: "#343435B2", fontWeight: 500 }}>
                {" "}
                9am - 7pm IST
              </span>
            </Typography>
          </Grid>
          <Grid
            item
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Icon path={mdiCircleSmall} size={2} />
            <Typography variant="body1" sx={{ fontWeight: 700 }}>
              Sun{" "}
              <span style={{ color: "#343435B2", fontWeight: 500 }}>
                Closed{" "}
              </span>{" "}
            </Typography>
          </Grid>
        </Grid>
        <Box
          sx={{
            width: {xs:'100%',sm:'70%',md:'50%'},
            // height: "100%",
            marginX: "auto",
            mt: 4,
          }}
        >
          <Image
            src={wall}
            alt="wall"
            style={{ width: "100%", height: "100%" }}
          />
        </Box>
      </Container>
    </Box>
  );
};

export default ContactInfo;
