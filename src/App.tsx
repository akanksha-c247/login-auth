import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignIn from './components/signIn/SignIn';
import SignUp from './components/signup/Register';
import Dashboard from './components/dashboard/Dashboard';
import ForgotPassword from './components/Password/forgetPassword';

function App() {
  const handlePasswordResetRequest = (email: string) => {
    console.log(`Password reset requested for email: ${email}`);
  };

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='/' element={<SignIn/>}/>
          <Route
            path='/forget-password'
            element={<ForgotPassword onPasswordResetRequest={handlePasswordResetRequest} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
