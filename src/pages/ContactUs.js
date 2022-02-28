import { Box, Grid, Paper, Typography } from "@mui/material";
import ContactForm from "../components/ContactForm";

const ContactUs = () => {
  return (
    <Box sx={{
        margin: "2% auto",
        p: 3,
        boxShadow: 3,
        borderRadius: "20px",
        width: "50%",
      }}>
     
        <Grid item xs={12} md={12}>
            <Typography color={"green"} fontSize={"2rem"} align="center" variant="h3" fontWeight="bold" py={2}>
              Contact Us
            </Typography>
            <ContactForm />
        </Grid>
      
    </Box>
  );
};

export default ContactUs;
