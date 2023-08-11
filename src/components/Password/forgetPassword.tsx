import React, { useState } from 'react';
import {
  Button,
  Container,
  CssBaseline,
  TextField,
  Typography,
  Box,
} from '@mui/material';

interface ForgotPasswordProps {
    onPasswordResetRequest: (email: string) => void;
  }
  
  export default function ForgotPassword({ onPasswordResetRequest }: ForgotPasswordProps) {
    const [email, setEmail] = useState('');
    const [isEmailSent, setIsEmailSent] = useState(false);
  
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      onPasswordResetRequest(email);
      setIsEmailSent(true);
    };
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h5">
          Forgot Password
        </Typography>
        {isEmailSent ? (
          <Typography variant="body1">
            Check your email for password reset instructions.
          </Typography>
        ) : (
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
              onChange={(e) => setEmail(e.target.value)}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Request Password Reset
            </Button>
          </form>
        )}
      </Box>
    </Container>
  );
};
