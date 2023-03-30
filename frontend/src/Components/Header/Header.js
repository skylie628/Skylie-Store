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
import ExpandHeader from './ExpandHeader'
export default function Header(props) {
  const { pathname } = useLocation();
  const [isRelative, setIsRelative] = useState(false);
  const [isExpandHeader,setIsExpandHeader] = useState(false);
  /*useEffect(()=>{
   (pathname =='/shopping' || pathname =='/cart' || matchPath({path : '/product/:id',exact: false},pathname)) ? setIsRelative(true) : setIsRelative(false)
  },[pathname])*/
  useEffect(()=>{
    (pathname =='/' || pathname =='/materials' ) ? setIsRelative(false) : setIsRelative(true)
   },[pathname])
  const navigate = useNavigate();
  const changePath = (path) =>{
    navigate(path);
  }
  return (
    <AppBar  sx = {{boxShadow: 'inherit',zIndex:2, top:0, position :isRelative ? 'relative' : 'sticky',height:'64px'}} >
    <Toolbar sx = {{backgroundColor : isRelative? 'rgb(245,245,245)':'black',opacity: 0.9}} style ={{color: isRelative? 'black' : 'white',top:0}}  >
    <img  src= {isRelative? BlackLogo : Logo} className ={styles.logo} onClick = {() =>{changePath('/')}}/>
    <box className ={styles.buttons}>
    <span className ={styles.button}><a className ={styles.button} >Về chúng tôi</a></span>
    <span className ={styles.button}><a className ={styles.button} onClick = {() =>{changePath('/shopping')}}>Shopping</a></span>
    <span className ={styles.button}><a className ={styles.button} onClick = {() =>{changePath('/signin')}}>Đăng nhập</a></span>
    <span className ={styles.button}><img  src= {isRelative? BlackShoppingBag : WhiteShoppingBag} className ={styles.cart} onClick = {() =>setIsExpandHeader(prev => !prev)}/></span>
    </box>
    </Toolbar>
    <ExpandHeader isRelative = {isRelative} isExpandHeader={ isExpandHeader} setIsExpandHeader ={setIsExpandHeader} />
    </AppBar>
  )
}
