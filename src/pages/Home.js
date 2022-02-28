import React from "react";

import { Box, Typography } from "@mui/material";

import business from "../assets/images/business.jpg";
import design from "../assets/images/design.jpg";
import marketing from "../assets/images/marketing.jpg";
import development from "../assets/images/development.jpg";
import music from "../assets/images/music.jpg";
import CarouselItem from "../components/CarouselSlider/CarouselItem";
import CarouselCard from "../components/CarouselSlider";
import Navbar from "../components/Appbar";
const data = [
  { title: "Business", image: business },
  { title: "Design", image: design },
  { title: "Development", image: development },
  { title: "Marketing", image: marketing },
  { title: "Music", image: music },
];

const Home = () => {
  return (
    <>
      <Navbar />
      <Box sx={{ height: "100vh" }}>
        <Box sx={{ px: 4 }}>
          <Typography
            align="center"
            fontSize="2em"
            color="black"
            fontWeight="bold"
            py={2}
          >
            Some Images
          </Typography>
          <CarouselCard>
            {data.map((item, index) => (
              <CarouselItem key={index} image={item.image} />
            ))}
          </CarouselCard>
        </Box>
      </Box>
    </>
  );
};

export default Home;
