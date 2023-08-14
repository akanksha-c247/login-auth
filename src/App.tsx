import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignIn from './components/signIn/SignIn';
import SignUp from './components/signup/Register';
import Dashboard from './components/dashboard/Dashboard';
import ForgotPassword from './components/Password/forgetPassword';
import Auth from './PrivateRoute';
import PasswordChange from './components/Password/ChangePassword';

function App() {
  const handlePasswordResetRequest = (email: string) => {
    console.log(`Password reset requested for email: ${email}`);
  };

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/signup' element={<SignUp />} />
          <Route path='/dashboard' element={<Auth><Dashboard/></Auth>}/>
          <Route path='/' element={<SignIn />} />
          <Route
            path='/forget-password'
            element={<ForgotPassword onPasswordResetRequest={handlePasswordResetRequest} />}
          />
          <Route path="/password-change" element={<PasswordChange/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
