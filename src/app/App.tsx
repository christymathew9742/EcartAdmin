import React, { Suspense, useEffect, useState } from 'react';
import Home from './views/Web/Home/home';
import About from './views/Web/About/about';
import { constantsText } from './constants/constant';
import Header from './components/Header/header';
import Footer from './components/Footer/footer';
import Product from './views/Admin/Product/product';
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

const App = () => {
  const {
    ROUTES: {
      HOME,
      ABOUT,
      PRODUCT,
      SIGN_IN
    }
  } = constantsText
  const cookies = new Cookies();
  const userLoggedIn: boolean = cookies.get('accessToken') ? true : false; 
  const navigate = useNavigate();

  useEffect(() => {
    [SIGN_IN].includes(window.location.pathname) && userLoggedIn && (
      navigate(ABOUT)
    )
  },[window.location.pathname])

  return (
      <>
      {/* <Header/> */}
      <div className="App">
      <Suspense fallback={<Spinner />} />
        <Routes>
            <Route element={<PrivateRoutes/>}>
              <Route path={HOME} element={<Home/>} />
              <Route path={ABOUT}  element={<About/>} />
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
