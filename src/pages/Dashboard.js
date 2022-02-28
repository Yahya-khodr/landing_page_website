import React from "react";

import {
  Typography,
  TextField,
  Box,
  Button,
} from "@mui/material";
import AvatarUpload from "../components/ImageUpload/AvatarUpload";
import Navbar from "../components/Appbar";

const Dashboard = () => {
  return (
    <><Navbar /><Box
      component="form"
      sx={{
        margin: "2% auto",
        p: 3,
        boxShadow: 3,
        borderRadius: "20px",
        width: "50%",
      }}
      id="profile-form"
    >
      <AvatarUpload />
      <Typography
        sx={{ fontSize: "2.5rem", color: "green", fontWeight: "700" }}
      >
        User Name
      </Typography>

      <TextField
        label="Name"
        id="name"
        name="name"
        type="name"
        required
        variant="outlined"
        fullWidth
        margin="normal" />
      <TextField
        label="New Email Address"
        id="email"
        name="email"
        type="email"
        required
        variant="outlined"
        fullWidth
        margin="normal" />
      <TextField
        label="New Password"
        type="password"
        id="password"
        name="password"
        required
        variant="outlined"
        fullWidth
        margin="normal" />
      <Box textAlign={"center"}>
        <Button
          variant="contained"
          type="button"
          color="success"
          // onClick={handleLogin}
          sx={{
            mt: 3,
            mb: 2,
            px: 5,
            color: "white",
            backgroundColor: "red",
          }}
        >
          Update
        </Button>
      </Box>
    </Box></>
  );
};

export default Dashboard;
