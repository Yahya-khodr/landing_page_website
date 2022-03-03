import { Box, Card, CardMedia , Typography} from "@mui/material";
import { useState } from "react";

const CarouselItem = (props) => {
  return (
    <Box sx={{ p: 1 }}>
      <CardMedia
        component="img"
        height="60%"
        image={props.image}
        sx={{ cursor: "pointer", borderRadius: "20px" }}
      />
    <Typography variant="h5">{props.title}</Typography>
    </Box>
  );
};

export default CarouselItem;
