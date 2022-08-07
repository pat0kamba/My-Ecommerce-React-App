import React from 'react';
import MainRouter from "./MainRouter.js";
import Navbar from "./core/Navbar.js";
import Footer from "./core/Footer.js";
import {useSelector} from 'react-redux';
import PopupBag from "./pages/Selling/PopupBag.js";
import {BrowserRouter as Router} from "react-router-dom";
export default function App()
{
  const showCart = useSelector((state)=>state.cart.showCart);
  return(
    <> 
      <Router> 
      <Navbar />
      {showCart  && <PopupBag />}
      <MainRouter />
      <Footer />
      </Router>  
    </>
  )
}