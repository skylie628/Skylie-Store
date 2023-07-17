import logo from './logo.svg';
import './App.css';
import { useRef ,useEffect } from 'react';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer'
//import LandingPage from './Pages/Landing Page/LandingPage';
//import LandingPageMobile from './Pages/Mobile/Landing Page/LandingPage';
//import SigninPage from './Pages/Signin Page/SigninPage';
//import MaterialDetailPage from './Pages/MaterialDetailPage/MaterialDetailPage';
/*import MaterialDetailPageMobile from './Pages/Mobile/MaterialDetailPage/MaterialDetailPage';
import SignupPage from './Pages/SignUp Page/SignupPage';
import ShoppingPage from './Pages/ShoppingPage/ShoppingPage';
import ShoppingPageMobile from './Pages/Mobile/Shopping Page/ShoppingPage';
import ProductPage from './Pages/ProductPage/ProductPage';
import ProductPageMobile from './Pages/Mobile/ProductPage/ProductPage';
import CartPage from './Pages/CartPage/CartPage';
import SavedItemPage from './Pages/SavedItemPage/SavedItemPage';
import DetailedAlbum from './Pages/AlbumPage/DetailedAlbum';
import SharedAlbum from './Pages/SharedAlbumPage/SharedAlbum';
import ProfilePage from './Pages/ProfiledPage/ProfiledPage';
import ProfilePageMobile from './Pages/Mobile/ProfiledPage/ProfiledPage';
import OrdersPage from './Pages/OrdersPage/OrdersPage';
import OrderDetailedPage from './Pages/OrderDetailedPage/OrderDetailedPage';
import OrderDetailedPageMobile from './Pages/Mobile/OrderDetailedPage/OrderDetailedPage';
import CheckoutPage from './Pages/CheckoutPage/CheckoutPage';
import CheckoutPageMobile from './Pages/Mobile/CheckoutPage/CheckoutPage';
import NotFoundPage from './Pages/NotFoundPage/NotFoundPage'*/
import Private from './Components/Private/Private';
import FetchInfo from './Components/FetchInfo/FetchInfo';
import ScrollToTop from './Components/Scroll To Top/ScrollToTop';
import { useMediaQuery } from 'react-responsive';
import { Route, Routes } from 'react-router-dom';
import React from "react";
import { Suspense } from 'react';
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
const LandingPage = React.lazy(() => import('./Pages/Landing Page/LandingPage'))
const LandingPageMobile = React.lazy(() => import('./Pages/Mobile/Landing Page/LandingPage'))
const SigninPage = React.lazy(() => import('./Pages/Signin Page/SigninPage'))
const MaterialDetailPage = React.lazy(() => import('./Pages/MaterialDetailPage/MaterialDetailPage'))
const MaterialDetailPageMobile = React.lazy(() => import('./Pages/Mobile/MaterialDetailPage/MaterialDetailPage'))
const SignupPage = React.lazy(() => import('./Pages/SignUp Page/SignupPage'))
const ShoppingPage = React.lazy(() => import('./Pages/ShoppingPage/ShoppingPage'))
const ShoppingPageMobile = React.lazy(() => import('./Pages/Mobile/Shopping Page/ShoppingPage'))
const ProductPage = React.lazy(() => import('./Pages/ProductPage/ProductPage'))
const ProductPageMobile = React.lazy(() => import('./Pages/Mobile/ProductPage/ProductPage'))
const CartPage = React.lazy(() => import('./Pages/CartPage/CartPage'))
const SavedItemPage = React.lazy(() => import('./Pages/SavedItemPage/SavedItemPage'))
const DetailedAlbum = React.lazy(() => import('./Pages/AlbumPage/DetailedAlbum'))
const SharedAlbum = React.lazy(() => import('./Pages/SharedAlbumPage/SharedAlbum'))
const ProfilePage = React.lazy(() => import('./Pages/ProfiledPage/ProfiledPage'))
const ProfilePageMobile = React.lazy(() => import('./Pages/Mobile/ProfiledPage/ProfiledPage'))
const OrdersPage = React.lazy(() => import('./Pages/OrdersPage/OrdersPage'))
const OrderDetailedPage = React.lazy(() => import('./Pages/OrderDetailedPage/OrderDetailedPage'))
const OrderDetailedPageMobile = React.lazy(() => import('./Pages/Mobile/OrderDetailedPage/OrderDetailedPage'))
const CheckoutPage = React.lazy(() => import('./Pages/CheckoutPage/CheckoutPage'))
const CheckoutPageMobile = React.lazy(() => import('./Pages/Mobile/CheckoutPage/CheckoutPage'))
const NotFoundPage = React.lazy(() => import('./Pages/NotFoundPage/NotFoundPage'))



function App() {
{/*const body = useRef(null);
 useEffect(() => {
  const options = {
    damping : 0.1
   }
  Scrollbar.init(body.current, options);
 },[]) */}
 const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 })
  return (
    <div className="App" >
     <Header>
     </Header>
     <Suspense fallback = {<div></div>}>
          <body >
          <ScrollToTop/>
          <Routes>
            <Route path="/" element = {isTabletOrMobile? <LandingPageMobile/>:<LandingPage/>} />
            <Route path="/signin" element = {<SigninPage/>} />
            <Route path="/signup" element = {<SignupPage/>} />
            <Route path="/shopping" element  = {isTabletOrMobile? <ShoppingPageMobile/>:<ShoppingPage/>} />
            <Route path="/product/:slug" element  = {isTabletOrMobile? <ProductPageMobile/>:<ProductPage/>}/> 
            <Route path="/checkout" element  = {<Private><FetchInfo>{isTabletOrMobile?<CheckoutPageMobile/>:<CheckoutPage/>}</FetchInfo></Private>}/> 
            <Route path="/cart" element  = {<Private><FetchInfo><CartPage/></FetchInfo></Private>}/> 
            <Route path="/saved" element  = {<Private><FetchInfo><SavedItemPage/></FetchInfo></Private>}/> 
            <Route path="/saved/:id" element  = {<Private><FetchInfo><DetailedAlbum/></FetchInfo></Private>}/> 
            <Route path="/shared/:access_id" element = {<SharedAlbum/>} />
            <Route path="/profile" element  = {<Private><FetchInfo>{isTabletOrMobile?<ProfilePageMobile/>:<ProfilePage/>}</FetchInfo></Private>}/> 
            <Route path="/orders" element  = {<Private><FetchInfo><OrdersPage/></FetchInfo></Private>}/> 
            <Route path="/orders/:order_id" element  = {<Private><FetchInfo>{isTabletOrMobile?<OrderDetailedPageMobile/>:<OrderDetailedPage/>}</FetchInfo></Private>}/> 
            <Route path="/materials" element = {isTabletOrMobile? <MaterialDetailPageMobile/>:<MaterialDetailPage/>}/> 
            <Route path="/notfound" element  = {<NotFoundPage/>}/> 
            <Route path="*" element={<LandingPage/>}/>
          </Routes>
          </body>
      <Footer></Footer>
      </Suspense>
    </div>
  );
}

export default App;
