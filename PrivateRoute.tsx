import { Navigate } from 'react-router-dom';
import { IAuth } from "./components/Types";

interface AuthProps {
  children: React.ReactNode;
}
const Auth: React.FC<AuthProps> = ({ children }) => {
  const sessionData = localStorage.getItem('sessionData');
  if(sessionData)
  {
  const authen : IAuth =JSON.parse(sessionData);
  return authen.authenticated === true ? <div>{children}</div> :
  <Navigate to='/' />;
  }
  return <Navigate to='/' />
};

export default Auth;
