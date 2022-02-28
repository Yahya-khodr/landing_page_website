import React, { useEffect, useState } from "react";

import { Typography, TextField, Box, Button } from "@mui/material";
import AvatarUpload from "../components/ImageUpload/AvatarUpload";
import Navbar from "../components/Appbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const api = "http://127.0.0.1:8000/api/auth/update-profile";
  const [newName, setNewName] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newPass, setNewPass] = useState("");
  const [newPassConfi, setNewPassConfi] = useState("");

  const navigate = useNavigate();

  const handleNewName = (e) => {
    setNewName(e.target.value);
  };
  const handleNewEmail = (e) => {
    setNewEmail(e.target.value);
  };
  const handleNewPass = (e) => {
    setNewPass(e.target.value);
  };
  const handleNewPassConf = (e) => {
    setNewPassConfi(e.target.value);
  };

  const handleUpdate = () => {
    axios
      .post(
        api,
        {
          name: newName,
          email: newEmail,
          password: newPass,
          password_confirmation: newPassConfi,
        },
        {
          headers: { Authorization: "Bearer " + localStorage.getItem("token") },
        }
      )
      .then((res) => {
        console.log(res.data);
        navigate("/home");
      });
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
          onChange={handleNewName}
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
          onChange={handleNewEmail}
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
          onChange={handleNewPass}
        />
        <TextField
          label="Confirm New Password"
          type="password"
          id="confirm_password"
          name="confirm_password"
          required
          variant="outlined"
          fullWidth
          margin="normal"
          onChange={handleNewPassConf}
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
