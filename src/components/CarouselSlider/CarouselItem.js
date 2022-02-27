import {Box, Card, CardMedia } from "@mui/material";
import { useState } from "react";

const CarouselItem = (props) => {
  

  return (
    
      <Box sx={{p:1}}>
        <CardMedia
          component="img"
          height="60%"
          image={props.image}
          sx={{ cursor: "pointer" }}
        />
      </Box>
    
  );
};

export default CarouselItem;
