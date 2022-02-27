import { Typography, TextField, Box, Button, Alert } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";

const loginApi = "http://127.0.0.1:8000/api/auth/login";

const Login = () => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const handleLogin = () => {
    axios
      .post(loginApi, {
        email: loginEmail,
        password: loginPassword,
      })
      .then((res) => {
        if (res.status == 200) {
          localStorage.setItem("token", res.data.access_token);
          window.location.pathname = "/home";
        }
        console.log(res.data);
      });
  };
  const handleEmail = (e) => {
    setLoginEmail(e.target.value);
  };

  const handlePass = (e) => {
    setLoginPassword(e.target.value);
  };

  return (
    <>
      <Box
        component="form"
        sx={{
          margin: "2% auto",
          p: 3,
          boxShadow: 3,
          borderRadius: "20px",
          width: "50%",
        }}
        id="login-form"
      >
        <Typography
          sx={{ fontSize: "2.5rem", color: "green", fontWeight: "700" }}
        >
          Login
        </Typography>
        <TextField
          label="Email Address"
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
          label="Password"
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
            onClick={handleLogin}
            sx={{
              mt: 3,
              mb: 2,
              px: 5,
              color: "white",
              backgroundColor: "red",
            }}
          >
            Login
          </Button>
        </Box>

        <Alert>All fields are required</Alert>
      </Box>
    </>
  );
};

export default Login;