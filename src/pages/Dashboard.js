import React, { useEffect, useState } from "react";

import { Typography, TextField, Box, Button,InputAdornment, IconButton } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import AvatarUpload from "../components/ImageUpload/AvatarUpload";
import Navbar from "../components/Appbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";

const Dashboard = () => {
  const api = "http://127.0.0.1:8000/api/auth/update-profile";
  const getApi = "http://127.0.0.1:8000/api/auth/user-profile";
  const [newName, setNewName] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newPass, setNewPass] = useState("");
  const [newPassConfi, setNewPassConfi] = useState("");
  const [userData, setUserData] = useState("");

  const [showPass, setShowPass] = useState(false);
  const [showPassConf, setShowPassConf] = useState(false);

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
  const getUser = () => {
    axios
      .get(getApi, {
        headers: { Authorization: "Bearer " + localStorage.getItem("token") },
      })
      .then((res) => {
        const User = res.data;
        setUserData(User);
        console.log(User);
      });
  };

  useEffect(() => {
    getUser();
  }, []);

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
        
        if(res.data.status){
          swal({
            title: "Success!",
            text: "Successfully updated user info",
            icon: "success",
            button: "Done!",
          }).then(() => {
            navigate("/home");
          });
        }
      });
      
  };

  const togglePassword = () => {
    setShowPass(!showPass);
  };
  const togglePasswordConf = () => {
    setShowPassConf(!showPassConf);
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
          {userData.name}
        </Typography>

        <TextField
          label="Name"
          id="name"
          type="name"
          required
          variant="outlined"
          fullWidth
          margin="normal"
          defaultValue={userData.name}
          onChange={handleNewName}
          InputLabelProps={{ shrink: true }}
        />
        <TextField
          label="Email Address"
          id="email"
          type="email"
          required
          variant="outlined"
          fullWidth
          margin="normal"
          defaultValue={userData.email}
          onChange={handleNewEmail}
          InputLabelProps={{ shrink: true }}
        />
        <TextField
          label="New Password"
          type={showPass ? "text" : "password"}
          id="password"
          name="password"
          required
          variant="outlined"
          fullWidth
          margin="normal"
          onChange={handleNewPass}
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
          label="Confirm New Password"
          type={showPassConf ? "text" : "password"}
          id="confirm_password"
          name="confirm_password"
          required
          variant="outlined"
          fullWidth
          margin="normal"
          onChange={handleNewPassConf}
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
