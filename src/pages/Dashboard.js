import React, { useState } from "react";

import { Typography, TextField, Box, Button } from "@mui/material";
import AvatarUpload from "../components/ImageUpload/AvatarUpload";
import Navbar from "../components/Appbar";
import axios from "axios";

const api = "http://127.0.0.1:8000/api/auth/update-profile";
let token = localStorage.getItem("token");
const Dashboard = () => {
  const [newName, setNewName] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newPass, setNewPass] = useState("");

  const handleUpdate = () => {
    axios
      .post(
        api,
        {
          name: newName,
          email: newEmail,
          password: newPass,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      )
      .then((res) => {
        console.log(res.data);
      });
  };
  const handleName = (e, setNew) => {
    setNewName(e.target.value);
  };
  const handleEmail = (e, setNew) => {
    setNewEmail(e.target.value);
  };
  const handlePass = (e, setNew) => {
    setNewPass(e.target.value);
  };

  return (
    <>
      <Navbar />
      <Box
        component="form"
        sx={{
          margin: "2% auto",
          p: 2,
          boxShadow: 3,
          borderRadius: "20px",
          width: "50%",
        }}
        id="profile-form"
      >
        <AvatarUpload />
        <Typography
          sx={{ fontSize: "2rem", color: "green", fontWeight: "700" }}
        >
          Company
        </Typography>

        <TextField
          label="Name"
          id="name"
          name="name"
          type="name"
          required
          variant="outlined"
          fullWidth
          margin="normal"
          onChange={handleName}
        />
        <TextField
          label="New Email Address"
          id="email"
          name="email"
          type="email"
          required
          variant="outlined"
          fullWidth
          margin="normal"
          onChange={handleEmail}
        />
        <TextField
          label="New Password"
          type="password"
          id="password"
          name="password"
          required
          variant="outlined"
          fullWidth
          margin="normal"
          onChange={handlePass}
        />
        <Box textAlign={"center"}>
          <Button
            variant="contained"
            type="button"
            color="success"
            onClick={handleUpdate}
            sx={{
              mt: 3,
              mb: 2,
              px: 5,
              color: "white",
              backgroundColor: "red",
            }}
          >
            Save Changes
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default Dashboard;
