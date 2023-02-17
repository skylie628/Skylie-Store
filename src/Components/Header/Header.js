import React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import  Toolbar  from '@mui/material/Toolbar'
import styles from './styles.module.css'
import Logo from '../../assets/images/skylie-logo-icon.png'
export default function Header() {
  return (
    <div style= {{position :"sticky",top:0,zIndex: 2 }}>
    <Box>
    <AppBar  sx = {{boxShadow: 'inherit', opacity: 0.9, top:0, position : "sticky"}} >
    <Toolbar sx = {{backgroundColor : 'black'}}  >
    <img  src= {Logo} className ={styles.logo}/>
    <box className ={styles.buttons}>
    <span className ={styles.button}><a href = '#' className ={styles.button}>Về chúng tôi</a></span>
    <span className ={styles.button}><a href = '#' className ={styles.button}>Khám phá</a></span>
    <span className ={styles.button}><a href = '#' className ={styles.button}>Đăng nhập</a></span>
    </box>
    </Toolbar>
    </AppBar>
    </Box>
    </div>
  )
}
