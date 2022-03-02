import React, { useState } from "react";
import {
  TextField,
  Box,
  Button,
  Alert,
  Typography,
  InputAdornment,
  IconButton,
} from "@mui/material";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import swal from "sweetalert";

const regApi = "http://127.0.0.1:8000/api/auth/register";
const Register = () => {
  const [regName, setRegName] = useState("");
  const [regEmail, setRegEmail] = useState("");
  const [regPass, setRegPass] = useState("");
  const [regConfirm, setRegConfirm] = useState("");

  const [showPass, setShowPass] = useState(false);
  const [showPassConf, setShowPassConf] = useState(false);

  const togglePassword = () => {
    setShowPass(!showPass);
  };
  const togglePasswordConf = () => {
    setShowPassConf(!showPassConf);
  };

  const navigate = useNavigate();
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
        if (res.data.status) {
          swal({
            title: "Success!",
            text: "Successfully registered go to Login",
            icon: "success",
            button: "Done!",
          }).then(() => {
            navigate("/");
          });
        }
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
        <TextField
          label="Password Confirmation"
          type={showPassConf ? "text" : "password"}
          id="password"
          name="password"
          required
          variant="outlined"
          fullWidth
          margin="normal"
          onChange={handlePassConf}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={togglePasswordConf}
                  edge="end"
                >
                  {showPassConf ? <VisibilityOff /> : <Visibility />}
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
            Already Have an account? <Link to="/">Login</Link>
          </Typography>
        </Box>

        <Alert>All fields are required</Alert>
      </Box>
    </>
  );
};

export default Register;
