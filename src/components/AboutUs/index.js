
import { Facebook, GitHub, LinkedIn } from "@mui/icons-material";
import { Avatar, Box, Fab, Grid, Paper, Typography } from "@mui/material";

const AboutCard = () => {
  return (
    <Box
      sx={{
        margin: "2% auto",
        p: 3,
        boxShadow: 3,
        borderRadius: "20px",
        width: "50%",
      }}
    >
      <Grid item xs={12} md={12}>
        <Typography
          color={"green"}
          fontSize={"2rem"}
          align="center"
          variant="h3"
          fontWeight="bold"
          py={2}
        >
          About Us
        </Typography>
        <Typography
          style={{ textIndent: "5em" }}
          variant="body1"
          color="text.secondary"
          mt={2}
        >
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis esse
          consequatur optio nam eum, iusto dolor officiis placeat consectetur,
          voluptatibus corrupti molestiae. Quod accusantium tenetur velit nisi
          nihil autem eveniet! Nesciunt commodi ea voluptates ut porro, enim
          laborum harum laudantium?
        </Typography>
        <Typography
          style={{ textIndent: "5em" }}
          variant="body1"
          color="text.secondary"
          mt={2}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
          quidem debitis quia suscipit deserunt hic architecto doloremque
          commodi quo itaque!
        </Typography>
        <Box sx={{ my: 3, display: "flex", justifyContent: "center" }}>
          <Avatar alt="Nishikant" sx={{ width: 200, height: 200 }} />
        </Box>
        <Typography align="center">
          <Fab size="small" color="black" sx={{ mx: 0.7 }}>
            <GitHub />
          </Fab>
          <Fab size="small" color="primary" sx={{ mx: 0.7 }}>
            <Facebook />
          </Fab>
          <Fab size="small" color="primary" sx={{ mx: 0.7 }}>
            <LinkedIn />
          </Fab>
        </Typography>
      </Grid>
    </Box>
  );
};

export default AboutCard;
