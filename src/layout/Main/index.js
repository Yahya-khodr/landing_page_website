import Navbar from "../../components/Appbar";

import { Box, Typography } from "@mui/material";

import business from "../../assets/images/business.jpg";
import CarouselItem from "../../components/CarouselSlider/CarouselItem";
import CarouselCard from "../../components/CarouselSlider";
const data = [
    { title: "Business", image: business },
    { title: "Business", image: business },
    { title: "Business", image: business },
];
const Main = () => {
  return (
    <div style={{ height: "100vh" }}>
      <Navbar />
      <Box sx={{ height: "100vh" }}>
        <Box sx={{ px: 4, pt: "8vh" }}>
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
    </div>
  );
};

export default Main;
