import React, { useState } from "react";
import {
  Button,
  Container,
  CssBaseline,
  TextField,
  Typography,
  Box,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { FormData } from "../Types";

interface ForgotPasswordProps {
  onPasswordResetRequest: (email: string) => void;
}

export default function ForgotPassword({
  onPasswordResetRequest,
}: ForgotPasswordProps) {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const existingUserDataJson = localStorage.getItem("storageData");
    const existingUserData: FormData[] = existingUserDataJson
      ? JSON.parse(existingUserDataJson)
      : [];

    const userExists = existingUserData.some(
      (userData) => userData.email === email
    );

    if (!userExists) {
      setError(true); 
    } else {
      setError(false);
      onPasswordResetRequest(email);
      localStorage.setItem("sessionData", "{}");
      navigate("/password-change",{state:email});
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          Forgot Password
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            error={error}
            onChange={(e) => {
              setEmail(e.target.value);
              setError(false); 
            }}
          />
          {error && (
            <Typography color="error">
              Please enter a valid email address.
            </Typography>
          )}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Request Password Reset
          </Button>
        </form>
      </Box>
    </Container>
  );
}
