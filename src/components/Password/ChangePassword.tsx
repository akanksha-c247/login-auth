import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Typography,
  TextField,
  Button,
  makeStyles,
  Theme,
} from "@mui/material";
import { FormData } from "../Types";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PasswordChange: React.FC = () => {
  const navigate = useNavigate();
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    const sessionStoageData = localStorage.getItem("sessionData");
    const userData: FormData | null = sessionStoageData? JSON.parse(sessionStoageData): null;
    if (userData && userData.email === email) {
      setEmail(userData.email);
    }
  }, []);
  
  const handleOldPasswordChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setOldPassword(event.target.value);
  };
  const handleNewPasswordChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setNewPassword(event.target.value);
  };
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const existingUserDataJson = localStorage.getItem("storageData");
const existingUserData: FormData[] = existingUserDataJson ? JSON.parse(existingUserDataJson) : [];
const userExists = existingUserData.filter((userData) => userData.password === oldPassword && userData.email === email);
console.log('userExists: ', userExists);

    // if (userExists) {
    //   setError(false);
    //   const storedPassword = localStorage.getItem("password");
    //   console.log('storedPassword: ', storedPassword);
    //   if (storedPassword === oldPassword) {
    //     localStorage.setItem("password", newPassword);
    //     console.log('newPassword: ', newPassword);
    //     localStorage.setItem("sessionData", "{}");
    // navigate("/");
    //   } else {
    //     setError(true);
    //     toast.error("Old password does not match");
    //   }
    // } else {
    //   setError(true);
    // }
  };

  return (
    <Container component="main" maxWidth="xs">
      <ToastContainer />
      <div>
        <Typography component="h1" variant="h5">
          Change Password
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email"
            type="email"
            autoComplete="email"
            disabled
            value={email}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="oldPassword"
            label="Old Password"
            type="password"
            autoComplete="current-password"
            value={oldPassword}
            onChange={handleOldPasswordChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="newPassword"
            label="New Password"
            type="password"
            autoComplete="new-password"
            value={newPassword}
            onChange={handleNewPasswordChange}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
          >
            Change Password
          </Button>
        </form>
      </div>
    </Container>
  );
};

export default PasswordChange;
