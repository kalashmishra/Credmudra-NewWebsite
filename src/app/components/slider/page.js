"use client";
import React, { useEffect } from "react";
import Swiper from 'swiper';
import "../../../../node_modules/swiper/css/swiper.css";
import "./slider.css"
import star from "../../../../public/assest/homeRenovation/star.svg";
import { Box, Card, CardContent, Container, Typography } from "@mui/material";
import Image from "next/image";
import profile from "../../../../public/assest/homeRenovation/profile.png";

const testimonials = [
  {
    name: "Samantha Payne",
    age: 31,
    occupation: "Freelancer",
    location: "Lucknow",
    feedback: "Credmudra has been a game-changer for me in the financial landscape.",
    imageUrl: profile,
  },
  {
    name: "Sarika Udde",
    age: 24,
    occupation: "Manager",
    location: "Lucknow",
    feedback: "Credmudra has been a game-changer for me in the financial landscape.",
    imageUrl: profile,
  },
  {
    name: "Vinay Pandy",
    age: 24,
    occupation: "Freelancer",
    location: "Lucknow",
    feedback: "Credmudra has been a game-changer for me in the financial landscape.",
    imageUrl: profile,
  },
  {
    name: "Vinay Pandy",
    age: 24,
    occupation: "Freelancer",
    location: "Lucknow",
    feedback: "Credmudra has been a game-changer for me in the financial landscape.",
    imageUrl: profile,
  },
  {
    name: "Vinay Pandy",
    age: 24,
    occupation: "Freelancer",
    location: "Lucknow",
    feedback: "Credmudra has been a game-changer for me in the financial landscape.",
    imageUrl: profile,
  },
  {
    name: "Vinay Pandy",
    age: 24,
    occupation: "Freelancer",
    location: "Lucknow",
    feedback: "Credmudra has been a game-changer for me in the financial landscape.",
    imageUrl: profile,
  },
];

const SwiperComponent = ({heading}) => {
  useEffect(() => {
    new Swiper(".swiper", {
      direction: "horizontal",
      // modules: [Pagination],
      breakpoints: {
        1440: { slidesPerView: 3.5, spaceBetween: 50 },
        1220: { slidesPerView: 3.5, spaceBetween: 50 },
        1100: { slidesPerView: 3.3, spaceBetween: 50 },
        1024: { slidesPerView: 2.8, spaceBetween: 0 },
        1000: { slidesPerView: 2.8, spaceBetween: 0 },
        900: { slidesPerView: 2.7, spaceBetween: 0 },
        500: { slidesPerView: 2, spaceBetween: 20 },
        0: { slidesPerView: 1, spaceBetween: 20, dragSize: 100 },
      },
      // navigation: {
      //   nextEl: ".swiper-next",
      //   prevEl: ".swiper-prev",
      // },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: (index, className) => {
          return `<span class="${className} custom-pagination-bullet"></span>`;
        },
      },
     
     
    });
  }, []);

  return (
    <Box sx={{ overflow: "hidden" }}>
      <Container sx={{ width: "100%", overflowX: "visible" }}>
        <Box
          sx={{
            maxWidth: { xs: "240px", sm: "580px", md: "600px" },
            mx: "auto",
            textAlign: "center",
            mt: { xs: 5, sm: 3, md: 9 },
          }}
        >
          <Typography
            variant="h3"
            align="center"
            sx={{
              fontWeight: 600,
              fontSize: { xs: "1.2rem", sm: "2.4rem", md: "3rem" },
            }}
            gutterBottom
          >
           {heading}        
             </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              mt: { xs: 2, sm: 3 },
              gap: 2,
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              4.9
            </Typography>
            <Box sx={{ width: "100px" }}>
              <Image alt="Rating" src={star} width={"100%"} height={"100%"} />
            </Box>
          </Box>
          <Typography
            variant="body1"
            color="textSecondary"
            sx={{
              fontSize: { xs: ".8rem", sm: "1rem", md: "1.2rem" },
              mt: { xs: 2, sm: 3 },
            }}
          >
            User Love ❤️
          </Typography>
        </Box>
        <Box className="swiper" mt={8} mb={8}>
          <Box
            className="swiper-wrapper"
            sx={{ display: "flex", flexDirection: "row" }}
          >
            {testimonials.map((data, index) => (
              <Box className="swiper-slide" key={`slide${index}`}>
                <Card sx={{ maxWidth: 350, margin: "0 auto" ,border:'none',boxShadow:"0px 4px 20px rgba(0, 0, 0, 0.05)"}}>
                  <CardContent>
                    <Box sx={{display:'flex',}}>
                    <Image
                      src={data.imageUrl}
                      alt={data.name}
                      style={{ width: 56, height: 56, margin: "0 auto 16px" }}
                    />
                    <Box>
                    <Typography variant="h6" sx={{fontWeight:'700'}}>
                      {data.name}, <span style={{fontSize:'15px',color:'#34343580',}}>{data.age}</span>
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      {data.occupation}, {data.location}
                    </Typography>
                    </Box>
                    </Box>
                    <Typography variant="body1" sx={{ marginTop: 2,color:'#343435B2' }}>
                      "{data.feedback}"
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
            ))}
          </Box>
          <Box
            sx={{
              display: "flex",
              paddingTop: "20px",
              alignItems: "center",
              justifyContent: "center",
              mt:3
            }}
          >
            <Box className="swiper-pagination" sx={{
              display: "flex",
              justifyContent: "center",
              ".swiper-pagination-bullet": {
                width: 20,
                height: 6,
                backgroundColor: "#34343540",
                borderRadius: "20px",
                margin: "0 5px",
                opacity: 1,
              },
              ".swiper-pagination-bullet-active": {
                backgroundColor: "#3B5BBA",
                opacity: 1,
                width: 30,
                height: 6,
                
              },
            }}></Box>
            {/* <Box sx={{ display: "flex" }}>
              <Box className="swiper-prev" sx={{ color: "#f6d549" }}>
                <Icon path={mdiChevronLeft} size={1.5} />
              </Box>
              <Box className="swiper-next" sx={{ color: "#f6d549" }}>
                <Icon path={mdiChevronRight} size={1.5} />
              </Box>
            </Box> */}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default SwiperComponent;
