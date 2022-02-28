import { Box, Link, Typography } from "@mui/material";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://sefactory.io/fsw/">
        SeFactory
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const Footer = () => {
  return (
    <Box sx={{ background: "#5770a1", pt: 8, pb: 6 }} component="footer">
      <Copyright />
    </Box>
  );
};

export default Footer;
