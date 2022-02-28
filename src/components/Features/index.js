import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";

const cards = [1, 2, 3, 4];
const Features = () => {
  return (
    <Container sx={{ py: 3 }} maxWidth="md">
      <Typography
        align="center"
        fontSize="2em"
        color="#121721"
        fontWeight="bold"
        py={2}
      >
        Services
      </Typography>
      <Grid container spacing={4} align="center">
        {cards.map((card) => (
          <Grid item key={card} xs={12} sm={6} md={6}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="50%"
                image="https://source.unsplash.com/random"
                alt="image"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  TITLE
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Tempore, sed quia architecto suscipit saepe recusandae
                  repellat maiores culpa pariatur inventore?
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Features;
