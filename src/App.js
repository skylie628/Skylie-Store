import logo from './logo.svg';
import './App.css';
import { useRef ,useEffect } from 'react';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer'
import LandingPage from './Pages/Landing Page/LandingPage';
import SigninPage from './Pages/Signin Page/SigninPage'
import SignupPage from './Pages/SignUp Page/SignupPage';
import ShoppingPage from './Pages/ShoppingPage/ShoppingPage';
import ProductPage from './Pages/ProductPage/ProductPage';
import { Route, Routes } from 'react-router-dom';
import Scrollbar from 'smooth-scrollbar';
import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
function App() {
{/*const body = useRef(null);
 useEffect(() => {
  const options = {
    damping : 0.1
   }
  Scrollbar.init(body.current, options);
 },[]) */}
  return (
    <div className="App" >
     <Header>
     </Header>
          <body >
          <Routes>
            <Route path="/" element = {<LandingPage/>} />
            <Route path="/signin" element = {<SigninPage/>} />
            <Route path="/signup" element = {<SignupPage/>} />
            <Route path="/shopping" element  = {<ShoppingPage/>} />
            <Route path="/product/:id" element  = {<ProductPage/>}/> 
            <Route path="*" element={<LandingPage/>}/>
          </Routes>
          </body>
      <Footer></Footer>
    </div>
  );
}

export default App;
