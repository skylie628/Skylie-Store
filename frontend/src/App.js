import logo from './logo.svg';
import './App.css';
import { useRef ,useEffect } from 'react';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer'
import LandingPage from './Pages/Landing Page/LandingPage';
import SigninPage from './Pages/Signin Page/SigninPage';
import MaterialDetailPage from './Pages/MaterialDetailPage/MaterialDetailPage';
import SignupPage from './Pages/SignUp Page/SignupPage';
import ShoppingPage from './Pages/ShoppingPage/ShoppingPage';
import ProductPage from './Pages/ProductPage/ProductPage';
import CartPage from './Pages/CartPage/CartPage';
import SavedItemPage from './Pages/SavedItemPage/SavedItemPage';
import DetailedAlbum from './Pages/AlbumPage/DetailedAlbum';
import ProfilePage from './Pages/ProfiledPage/ProfiledPage';
import OrdersPage from './Pages/OrdersPage/OrdersPage';
import OrderDetailedPage from './Pages/OrderDetailedPage/OrderDetailedPage';
import CheckoutPage from './Pages/CheckoutPage/CheckoutPage';
import ScrollToTop from './Components/Scroll To Top/ScrollToTop';
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
          <ScrollToTop/>
          <Routes>
            <Route path="/" element = {<LandingPage/>} />
            <Route path="/signin" element = {<SigninPage/>} />
            <Route path="/signup" element = {<SignupPage/>} />
            <Route path="/shopping" element  = {<ShoppingPage/>} />
            <Route path="/product/:slug" element  = {<ProductPage/>}/> 
            <Route path="/checkout" element  = {<CheckoutPage/>}/> 
            <Route path="/cart" element  = {<CartPage/>}/> 
            <Route path="/saved" element  = {<SavedItemPage/>}/> 
            <Route path="/saved/:id" element  = {<DetailedAlbum/>}/> 
            <Route path="/profile" element  = {<ProfilePage/>}/> 
            <Route path="/orders" element  = {<OrdersPage/>}/> 
            <Route path="/orders/:order_id" element  = {<OrderDetailedPage/>}/> 
            <Route path="/materials" element  = {<MaterialDetailPage/>}/> 
            <Route path="*" element={<LandingPage/>}/>
          </Routes>
          </body>
      <Footer></Footer>
    </div>
  );
}

export default App;
