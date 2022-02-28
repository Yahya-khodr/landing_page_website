import {
  Typography,
  TextField,
  Box,
  Button,
  Alert,
  InputAdornment,
  IconButton,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const loginApi = "http://127.0.0.1:8000/api/auth/login";

const Login = () => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [showPass, setShowPass] = useState(false);

  const togglePassword = () => {
    setShowPass(!showPass);
  };
  const navigate = useNavigate();

 
  const handleLogin = () => {
    axios
      .post(loginApi, {
        email: loginEmail,
        password: loginPassword,
      })
      .then((res) => {
        if (res.status == 200) {
          setIsLoading(true);
          localStorage.setItem("token", res.data.access_token);
          navigate("/home");
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

  if (isLoading) {
    return (
      <Box
        sx={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

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
          type={showPass ? "text" : "password"}
          id="password"
          name="password"
          required
          variant="outlined"
          fullWidth
          margin="normal"
          onChange={handlePass}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={togglePassword}
                  edge="end"
                >
                  {showPass ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <Box textAlign={"center"}>
          <Button
            variant="contained"
            type="button"
            color="success"
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
        <Box>
          <Typography>
            Don't have an account? <Link to="/register">Register</Link>
          </Typography>
        </Box>

        <Alert>All fields are required</Alert>
      </Box>
    </>
  );
};

export default Login;
