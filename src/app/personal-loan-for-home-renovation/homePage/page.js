import { Container, Box, Typography, Button } from "@mui/material";
import Image from "next/image";
import HomeRenovation from "../../../../public/assest/homeRenovation/homeRenovation.svg";
import chill from "../../../../public/assest/homeRenovation/chill.svg";
import star from "../../../../public/assest/homeRenovation/star.svg";
import icons_google from "../../../../public/assest/homeRenovation/icons_google.svg";
import BackgroundImage from "./BackgroundImage";
import CommonButton from "@/app/components/CommonButton";

const HomePage = () => {
  return (
    <Container
      maxWidth="xl"
      disableGutters
      sx={{
        p: 0,
        m:0,
        position: "relative",
        zIndex: 9,
      }}
    >
      <BackgroundImage>
        <Box
          sx={{
            textAlign: "center",
            mt: { xs: 5, sm: 3, md: 9 },
            maxWidth: { xs: "250px", sm: "580px", md: "670px" },
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
            Upgrade your space with Loan for Home Improvement!
          </Typography>
          <Typography
            variant="body1"
          
            color="textSecondary"
            gutterBottom
            sx={{
              
              fontSize: { xs: ".8rem", sm: "1rem", md: "1.25rem" },
              mt: { xs: 2, sm: 3 },
            }}
          >
            We've got it covered on all things renovation.
          </Typography>
          <Box sx={{ mt: { xs: 2, sm: 4 } }}>
            <CommonButton  text={"Tansform Now"}/>
          </Box>
          <Typography
            sx={{
              color: "rgba(52, 52, 53, 0.7)",
              fontSize: { xs: ".5rem", sm: ".8rem" },
              mt: "10px",
            }}
          >
            Asian Paints Offer !!
          </Typography>
        </Box>
      </BackgroundImage>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          // mt: { xs: -19,sm:0  }, 
          gap: 2, 
        }}
      >
        <Image alt="Rating" src={star} width={"216px"} height={"32px"} />
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <Image
            alt="icons_google"
            src={icons_google}
            width={"24px"}
            height={"24px"}
          />
          <Typography
            variant="body1"
            sx={{ color: "rgba(52, 52, 53, 0.5)", fontWeight: "500" }}
          >
            4.3 Rating & 32 Reviews
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          mt: { xs: 3, sm: 2 },
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "10px",
          textAlign: "center",
        }}
      >
        <Image alt="Trusted by thousands" src={chill} />
        <Typography variant="body1" sx={{ color: "rgba(52, 52, 53, 1)" }}>
          Trusted by thousands
        </Typography>
      </Box>
    </Container>
  );
};

export default HomePage;
