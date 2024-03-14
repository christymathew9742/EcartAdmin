import React, { Suspense, useEffect, useState } from 'react';
import Home from './views/Web/Home/home';
import About from './views/Web/About/about';
import { constantsText } from './constants/constant';
import Header from './components/Header/header';
import Footer from './components/Footer/footer';
// import Product from './views/Admin/DashBoard/Products/product';
import PrivateRoutes from './utils/PrivateRoutes/PrivateRoutes';
import Cookies from 'universal-cookie';
import Spinner from './components/Loading/spinner'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import Login from './views/Admin/CellerOnboard/Login/login';
import MainLayout from './components/MainLayout/mainLayout';

const cookies = new Cookies();
const App = () => {
  const {
    ROUTES: {
      HOME,
      ABOUT,
      PRODUCT,
      SIGN_IN,
      DASHBOARD_SLUG,
      DASHBOARD
    }
  } = constantsText
  const cookies = new Cookies();
  const userLoggedIn: boolean = cookies.get('accessToken') ? true : false; 
  const navigate = useNavigate();
  const currentUser = cookies.get('currentUser')
  useEffect(() => {
    [SIGN_IN].includes(window.location.pathname) && userLoggedIn && (
      navigate(DASHBOARD)
    )
  },[window.location.pathname])

  return (
      <>
      {/* <Header/> */}
      <div className="App">
      <Suspense fallback={<Spinner />} />
        <Routes>
            <Route element={<PrivateRoutes/>}>
              {/* <Route path={HOME} element={<Home/>} />
              <Route path={ABOUT}  element={<About/>} /> */}
              <Route path={DASHBOARD_SLUG} element={<MainLayout user={currentUser} />} />
            </Route>
            <Route path={SIGN_IN}   element={<Login/>} /> 
        </Routes>
      <Suspense/>
      </div>
      {/* <Footer/> */}
      </>
  );
}

export default App;
