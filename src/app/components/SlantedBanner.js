import { Box, Hidden, Typography } from "@mui/material";
import Image from "next/image";
import Burst_star from "../../../public/assest/homeRenovation/Burst-star.svg";
const SlantedBanner = () => {
  return (
    <Box
      sx={{
        overflow: "hidden",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        mt: 2,

        padding: "50px 0",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "#3653a9",
          color: "#fff",
          padding: { xs: "10px 0px", sm: "14px 0px", md: "15px 0px" },
          transform: "rotate(2.7deg)",
          width: "100%",
          flexWrap: "nowrap",
        }}
      >
        <Hidden smDown>
          <Typography
            variant="body1"
            sx={{
              fontWeight: "bold",
              fontSize: { md: "1.2rem" },
            }}
          >
            mudra
          </Typography>
          <Image src={Burst_star} alt="" width={"25px"} height={"25px"} />
        </Hidden>{" "}
        <Typography
          sx={{
            fontSize: { xs: ".7rem", sm: "1rem", md: "1.2rem" },
          }}
        >
          ✨
        </Typography>
        <Typography
          sx={{
            fontWeight: "bold",
            fontSize: { xs: ".7rem", sm: "1rem", md: "1.2rem" },
          }}
        >
          2 lakh+ loans approved
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: ".7rem", sm: "1rem", md: "1.2rem" },
          }}
        >
          ✨
        </Typography>
        <Typography
          sx={{
            fontWeight: "bold",
            fontSize: { xs: ".7rem", sm: "1rem", md: "1.2rem" },
          }}
        >
          5k+ loans disbursed
        </Typography>
        <Image src={Burst_star} alt="" width={"25px"} height={"25px"} />
        <Hidden smDown>
          <Image src={Burst_star} alt="" width={"25px"} height={"25px"} />
          <Typography
            variant="body1"
            sx={{
              fontWeight: "bold",
              fontSize: { sm: "1rem", md: "1.2rem" },
            }}
          >
            Credmu
          </Typography>
        </Hidden>{" "}
      </Box>
    </Box>
  );
};

export default SlantedBanner;
