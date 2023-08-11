import React from 'react';
import { Container, Grid, Paper, Typography, Button } from '@mui/material';
import { Outlet, useNavigate } from 'react-router-dom';

const Dashboard: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('storageData');
    navigate('/');
  };

  return (
    <Container maxWidth="lg">
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h4" gutterBottom>
            Dashboard
          </Typography>
        </Grid>
        <Grid item xs={12} md={3}>
          <Paper elevation={3} style={{ padding: '20px' }}>
            <Typography variant="h6">Navigation</Typography>
            <Button variant="outlined" color="primary" onClick={handleLogout}>
              Logout
            </Button>
          </Paper>
        </Grid>
        <Grid item xs={12} md={9}>
          <Paper elevation={3} style={{ padding: '20px' }}>
            <Typography variant="h6">Content Area</Typography>
          </Paper>
        </Grid>
      </Grid>
      <Outlet />
    </Container>
  );
};

export default Dashboard;
