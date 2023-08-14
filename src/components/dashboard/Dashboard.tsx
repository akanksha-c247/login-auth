import React, { useEffect, useState } from 'react';
import { Container, Grid, Paper, Typography, Button } from '@mui/material';
import { Outlet, useNavigate } from 'react-router-dom';
import { IAuth, FormData } from '../Types';

const Dashboard: React.FC = () => {
  const [userD, setUser] = useState<FormData | null>(null);
  const navigate = useNavigate();
  useEffect(()=>{
    const showUserDetail = localStorage.getItem('storageData');
    const userData:FormData[] = showUserDetail ? JSON.parse(showUserDetail) : {};
    const sessionStoageData = localStorage.getItem('sessionData');
    const useata:IAuth = sessionStoageData ? JSON.parse(sessionStoageData) : {};
    const user = userData ? userData.find(user => user.email === useata.email) :null;
    setUser(user || null)

  },[])
  const handleLogout = () => {
    const existingUserDataJson = localStorage.getItem('storageData');
    const existingUserData = existingUserDataJson ? JSON.parse(existingUserDataJson) : {};
    localStorage.setItem('storageData', JSON.stringify(existingUserData));
    localStorage.setItem('sessionData','{}')
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
            <Typography variant="h6">{userD?.firstName || ''}   {userD?.lastName || ''}</Typography>
          </Paper>
        </Grid>
      </Grid>
      <Outlet />
    </Container>
  );
};

export default Dashboard;
