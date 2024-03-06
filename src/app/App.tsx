import React from 'react';
import Home from './views/Web/Home/home';
import About from './views/Web/About/about';
import { constantsText } from './constants/constant';
import Header from './components/Header/header';
import Footer from './components/Footer/footer';
import Product from './views/Admin/Product/product';
import {
  BrowserRouter as Router,
  Routes,
  Route,
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

  return (
       <>
      {/* <Header/> */}
      <div className="App">
        <Routes>
          <Route path={HOME} element={<Home/>} />
          <Route path={ABOUT}  element={<About/>} />
          <Route path={SIGN_IN}   element={<Login/>} />
        </Routes>
      </div>
      {/* <Footer/> */}
      </>
    
  );
}

export default App;
