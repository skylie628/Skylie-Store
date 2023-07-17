import React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import  Toolbar  from '@mui/material/Toolbar'
import { useNavigate } from "react-router-dom"
import { useState,  useEffect} from 'react'
import { useLocation, matchPath } from 'react-router-dom'
import styles from './styles.module.css'
import Logo from '../../assets/images/skylie-logo-icon.png'
import BlackShoppingBag from '../../assets/images/shopping-bag-icon-black.png'
import WhiteShoppingBag from '../../assets/images/shopping-bag-icon-white.png'
import BlackLogo from '../../assets/images/skylie-logo-icon-black.png'
import { useSelector, useDispatch } from 'react-redux'
import MetaTags from 'react-meta-tags';
import { GetUserCurrent } from '../../store/actions/user'
import ExpandHeader from './ExpandHeader'
export default function Header(props) {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const {islogged} = useSelector(state=> state.auth);
  const [isRelative, setIsRelative] = useState(false);
  const [hoverShopping,setHoverShopping] = useState(false);
  const [isLeavingHeader,setIsLeavingHeader] = useState(false);
  const [isLeavingHeaperHeader,setIsLeavingHeaperHeader] = useState(false);
  const [isBlack,setIsBlack] = useState(false);
  const [hoverAbout,setHoverAbout] = useState(false);
  const [hoverSignin,setHoverSignin] = useState(false);
  const [isExpandHeader,setIsExpandHeader] = useState(false);
  /*useEffect(()=>{
   (pathname =='/shopping' || pathname =='/cart' || matchPath({path : '/product/:id',exact: false},pathname)) ? setIsRelative(true) : setIsRelative(false)
  },[pathname])*/
  useEffect(()=>{
    if(isLeavingHeader&&isLeavingHeaperHeader){
      setIsExpandHeader(false);
    }
  },[isLeavingHeader,isLeavingHeaperHeader])
  useEffect(()=>{
    if(isExpandHeader){
    setIsLeavingHeader(false);
    setIsLeavingHeaperHeader(false);
}
  },[isExpandHeader])
  useEffect(()=>{
    (pathname =='/' || pathname =='/materials' ) ? setIsRelative(false) : setIsRelative(true)
   },[pathname])
  const navigate = useNavigate();
  const changePath = (path) =>{
    navigate(path);
    setIsExpandHeader(false);
  }
  return (
    <AppBar  className ={styles.header}sx = {{boxShadow: 'inherit',zIndex:3, top:0, position :isRelative ? 'relative' : 'sticky',height:'64px',backfaceVisibility:'hidden',transform:'translate3d(0px,0px,0px)' }} onMouseLeave={()=>{setIsLeavingHeader(true);console.log('leave ')}}>
    <MetaTags>
    <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1"/>
    </MetaTags>
    <Toolbar sx = {{backgroundColor : isRelative? '#F5F5F5':'black',opacity: 1,height:'64px', transform: 'translateZ(0)'}} style ={{color: isRelative? 'black' : 'white',top:0}}  >
    <img  src= {isRelative? BlackLogo : Logo} className ={styles.logo} onClick = {() =>{changePath('/')}}/>
    <box className ={styles.buttons}>
    <span className ={styles.button}><a className ={styles.button} onMouseEnter={()=>setHoverAbout(true)} onMouseLeave={()=>setHoverAbout(false)} style ={{color:hoverAbout?(isRelative?'black':'white'): (isRelative?'rgba(0,0,0,0.95)':'rgba(255,255,255,0.95)')}} >Về chúng tôi</a></span>
    <span className ={styles.button}><a className ={styles.button} onMouseEnter={()=>setHoverShopping(true)} onMouseLeave={()=>setHoverShopping(false)} style = {{color:hoverShopping?(isRelative?'black':'white'): (isRelative?'rgba(0,0,0,0.95)':'rgba(255,255,255,0.95)')}} onClick = {() =>{changePath('/shopping')}}>Shopping</a></span>
    {!islogged && <span className ={styles.button} onMouseEnter={()=>setHoverSignin(true)} onMouseLeave={()=>setHoverSignin(false)} style = {{color:hoverSignin?(isRelative?'black':'white'): (isRelative?'rgba(0,0,0,0.95)':'rgba(255,255,255,0.95)')}}><a className ={styles.button} onClick = {() =>{changePath('/signin')}}>Đăng nhập</a></span>}
    <span className ={styles.button}><img  src= {isRelative? BlackShoppingBag : WhiteShoppingBag} className ={styles.cart} onClick = {() =>setIsExpandHeader(prev => !prev)}/></span>
    </box>
    </Toolbar>
    <ExpandHeader isRelative = {isRelative} isExpandHeader={ isExpandHeader} setIsExpandHeader ={setIsExpandHeader} onMouseLeave={()=>{setIsLeavingHeaperHeader(true);console.log('leave help')}}/>
    </AppBar>
  )
}
