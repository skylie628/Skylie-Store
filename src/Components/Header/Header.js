import React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import  Toolbar  from '@mui/material/Toolbar'
import { useNavigate } from "react-router-dom"
import styles from './styles.module.css'
import Logo from '../../assets/images/skylie-logo-icon.png'
export default function Header() {
  const navigate = useNavigate();
  return (
    <div style= {{position :"sticky",top:0,zIndex: 2 }}>
    <Box>
    <AppBar  sx = {{boxShadow: 'inherit', opacity: 0.9, top:0, position : "sticky"}} >
    <Toolbar sx = {{backgroundColor : 'black'}}  >
    <img  src= {Logo} className ={styles.logo} onClick = {()=>navigate('/')}/>
    <box className ={styles.buttons}>
    <span className ={styles.button}><a className ={styles.button}>Về chúng tôi</a></span>
    <span className ={styles.button}><a className ={styles.button} onClick = {()=> navigate('/shopping')}>Shopping</a></span>
    <span className ={styles.button}><a className ={styles.button} onClick = {()=> navigate('/signin')}>Đăng nhập</a></span>
    </box>
    </Toolbar>
    </AppBar>
    </Box>
    </div>
  )
}
