import React, { useEffect } from 'react'
import Logo from '../../Components/Logo/Logo.js'
import GoogleActive from '../../assets/images/google-icon-active.png'
import GoogleInactive from '../../assets/images/google-icon-inactive.png'
import FacebookActive from '../../assets/images/facebook-icon-active.png'
import FacebookInactive from '../../assets/images/facebook-icon-inactive.png'
import SignInForm from './SignInForm.js'
import { useNavigate } from 'react-router-dom'
import Box from '@mui/material/Box';
import styles from './styles.module.css'
import { Login, ResetError } from '../../store/actions/auth.js'
import { useDispatch, useSelector } from 'react-redux'
export default function SigninPage() {
const dispatch = useDispatch();
const navigate = useNavigate();
const {islogged} = useSelector(state => state.auth);
useEffect(()=>{
  islogged && navigate('/')
  return ()=>dispatch(ResetError())
},[islogged])
const handleFormSubmit = async (value) =>{
  await dispatch(Login(value))
}

  return (
    <Box
    sx={{
        display: 'block',
    }}
    className = {styles.container}
  >
    <div className = {styles.headerTitle}>Đăng nhập để nhận được nhiều ưu đãi!</div>
      <SignInForm onSubmit ={handleFormSubmit}></SignInForm>
      {/*<div style = {{display: 'flex', alignItems: 'center',justifyContent : 'center'}}>
        <Logo src = {FacebookInactive} srcOnHover = {FacebookActive} style ={{width : '40px' ,height : '40px',marginLeft: '10px'}}></Logo>
        <Logo src = {GoogleInactive} srcOnHover = {GoogleActive} style = {{width : '40px' , height : '40px', marginLeft: '10px'}}></Logo>
  </div>*/}
      <div style={{margin: '20px'}}>
      {/*<div className = {styles.resetBtn}>Quên tài khoản ? <a>Reset ngay</a></div>*/}
      <div className = {styles.signupBtn}>Chưa có tài khoản ? <a  onClick = {()=> navigate('/signup')}>Đăng ký</a></div>
      </div>
  </Box>
  )
}
