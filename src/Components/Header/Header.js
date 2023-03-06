import React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import  Toolbar  from '@mui/material/Toolbar'
import { useNavigate } from "react-router-dom"
import { useState,  useEffect} from 'react'
import { useLocation } from 'react-router-dom'
import styles from './styles.module.css'
import Logo from '../../assets/images/skylie-logo-icon.png'
import BlackLogo from '../../assets/images/skylie-logo-icon-black.png'
export default function Header(props) {
  const { pathname } = useLocation();
  const [isShopping, setIsShopping] = useState(false);
  useEffect(()=>{
    pathname =='/shopping' ? setIsShopping(true) : setIsShopping(false)
  },[pathname])
  const navigate = useNavigate();
  const changePath = (path) =>{
    navigate(path);
  }
  return (
    <div >
    <Box>
    <AppBar  sx = {{boxShadow: 'inherit',zIndex:2, opacity: 0.9, top:0, position :isShopping ? 'relative' : 'fixed'}} >
    <Toolbar sx = {{backgroundColor : isShopping? 'rgb(245,245,245)':'black'}} style ={{color: isShopping? 'black' : 'white'}}  >
    <img  src= {isShopping? BlackLogo : Logo} className ={styles.logo} onClick = {() =>{changePath('/')}}/>
    <box className ={styles.buttons}>
    <span className ={styles.button}><a className ={styles.button} >Về chúng tôi</a></span>
    <span className ={styles.button}><a className ={styles.button} onClick = {() =>{changePath('/shopping')}}>Shopping</a></span>
    <span className ={styles.button}><a className ={styles.button} onClick = {() =>{changePath('/signin')}}>Đăng nhập</a></span>
    </box>
    </Toolbar>
    </AppBar>
    </Box>
    </div>
  )
}
