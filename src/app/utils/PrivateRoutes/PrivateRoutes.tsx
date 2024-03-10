import { useEffect } from 'react';
import { Navigate, useNavigate ,Outlet} from 'react-router-dom';
import Cookies from 'universal-cookie';

const cookies = new Cookies();
type PrivateRoutesProps = {
  isAuthenticated: boolean;
};

const PrivateRoutes = () => {
  const userLoggedIn: boolean = cookies.get('accessToken') ? true : false; 
  return !userLoggedIn ? <Navigate to="/" replace /> : <Outlet />;
};

export default PrivateRoutes