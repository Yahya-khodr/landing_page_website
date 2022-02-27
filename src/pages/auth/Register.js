import React, { useState } from "react";
import { TextField, Box, Button, Alert, Typography } from "@mui/material";
import axios from "axios";
import { Link } from "react-router-dom";

const regApi = "http://127.0.0.1:8000/api/auth/register";
const Register = () => {
  const [regName, setRegName] = useState("");
  const [regEmail, setRegEmail] = useState("");
  const [regPass, setRegPass] = useState("");
  const [regConfirm, setRegConfirm] = useState("");

  const handleRegister = () => {
    axios
      .post(regApi, {
        name: regName,
        email: regEmail,
        password: regPass,
        password_confirmation: regConfirm,
      })
      .then((res) => {
        console.log(res.data);
      });
  };

  const handleName = (e) => {
    setRegName(e.target.value);
  };

  const handleEmail = (e) => {
    setRegEmail(e.target.value);
  };
  const handlePass = (e) => {
    setRegPass(e.target.value);
  };

  const handlePassConf = (e) => {
    setRegConfirm(e.target.value);
  };
  return (
    <>
      <Box
        component="form"
        sx={{
          margin: "2% auto",
          p: 2,
          width: "50%",
          borderRadius: "20px",
          boxShadow: 3,
        }}
        id="register-form"
      >
        <Typography
          sx={{ fontSize: "2.5rem", color: "green", fontWeight: "700" }}
        >
          Register
        </Typography>
        <TextField
          label="Username"
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
        <TextField
          label="Password Confirmation"
          type="password"
          id="password"
          name="password"
          required
          variant="outlined"
          fullWidth
          margin="normal"
          onChange={handlePassConf}
        />
        <Box textAlign={"center"}>
          <Button
            variant="contained"
            type="button"
            onClick={handleRegister}
            sx={{
              mt: 3,
              mb: 2,
              px: 5,
              color: "white",
              backgroundColor: "red",
            }}
          >
            Register
          </Button>
        </Box>
        <Box>
          <Typography>
            Having an account? <Link to="/">Login</Link>
          </Typography>
        </Box>

        <Alert>All fields are required</Alert>
      </Box>
    </>
  );
};

export default Register;
