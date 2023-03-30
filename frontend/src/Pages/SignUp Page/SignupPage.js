import React from 'react'
import Logo from '../../Components/Logo/Logo.js'
import GoogleActive from '../../assets/images/google-icon-active.png'
import GoogleInactive from '../../assets/images/google-icon-inactive.png'
import FacebookActive from '../../assets/images/facebook-icon-active.png'
import FacebookInactive from '../../assets/images/facebook-icon-inactive.png'
import SignupForm from './SignupForm.js'
import Box from '@mui/material/Box';
import styles from './styles.module.css'
export default function SignupPage() {
const handleFormSubmit = (value) =>{
console.log(value)
}
  return (
    <Box
    sx={{
        display: 'block',
    }}
    className = {styles.container}
  >
    <div className = {styles.headerTitle}>Đăng ký tài khoản </div>
      <SignupForm onSubmit ={handleFormSubmit}></SignupForm>
      <div style = {{display: 'flex', alignItems: 'center',justifyContent : 'center'}}>
        <Logo src = {FacebookInactive} srcOnHover = {FacebookActive} style ={{width : '40px' ,height : '40px',marginLeft: '10px'}}></Logo>
        <Logo src = {GoogleInactive} srcOnHover = {GoogleActive} style = {{width : '40px' , height : '40px', marginLeft: '10px'}}></Logo>
      </div>
      <div style={{margin: '20px'}}>
      <div className = {styles.resetBtn}>Quên tài khoản ? <a>Reset ngay</a></div>
      <div className = {styles.signupBtn}>Chưa có tài khoản ? <a>Đăng ký</a></div>
      </div>
  </Box>
  )
}
