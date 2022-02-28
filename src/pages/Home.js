import React from "react";

import { Box, CssBaseline, Typography } from "@mui/material";

import business from "../assets/images/business.jpg";
import design from "../assets/images/design.jpg";
import marketing from "../assets/images/marketing.jpg";
import development from "../assets/images/development.jpg";
import music from "../assets/images/music.jpg";
import CarouselItem from "../components/CarouselSlider/CarouselItem";
import CarouselCard from "../components/CarouselSlider";
import Navbar from "../components/Appbar";
import AboutCard from "../components/AboutUs";
import ContactForm from "../components/ContactForm";
import Features from "../components/Features";
import Footer from "../components/Footer";
import { createTheme, ThemeProvider } from '@mui/material/styles';
const data = [
  { title: "Business", image: business },
  { title: "Design", image: design },
  { title: "Development", image: development },
  { title: "Marketing", image: marketing },
  { title: "Music", image: music },
];
const theme = createTheme();

const Home = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <Navbar />
        <Box sx={{background: "#5770a1",
            pt: 8,
            pb: 6,}}>
          <Box sx={{ px: 4 }}>
            <Typography
              align="center"
              fontSize="2em"
              color="#121721"
              fontWeight="bold"
              py={2}
            >
              Image Slider
            </Typography>
            <CarouselCard>
              {data.map((item, index) => (
                <CarouselItem key={index} image={item.image} />
              ))}
            </CarouselCard>
          </Box>
        </Box>
        <Features />
        <Footer />
      </ThemeProvider>
    </>
  );
};

export default Home;
