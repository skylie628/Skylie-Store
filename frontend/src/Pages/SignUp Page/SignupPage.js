import React from 'react'
import { useEffect } from 'react'
import Logo from '../../Components/Logo/Logo.js'
import GoogleActive from '../../assets/images/google-icon-active.png'
import GoogleInactive from '../../assets/images/google-icon-inactive.png'
import FacebookActive from '../../assets/images/facebook-icon-active.png'
import FacebookInactive from '../../assets/images/facebook-icon-inactive.png'
import SignupForm from './SignupForm.js'
import { useNavigate } from 'react-router-dom'
import LoadingSpinner from '../../Components/LoadingSpinner/LoadingSpinner.js'
import Box from '@mui/material/Box';
import styles from './styles.module.css'
import { Register,ResetError } from '../../store/actions/auth.js'
import actionTypes from '../../store/actions/actionTypes.js'
import {useDispatch, useSelector} from 'react-redux'
import { useMediaQuery } from 'react-responsive'
export default function SignupPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 })
  const {islogged} = useSelector(state => state.auth);
  const handleFormSubmit =  async value =>{
  await dispatch(Register(value))
}
useEffect(()=>{
  console.log("islogged",islogged)
  islogged && navigate('/');
},[islogged])
useEffect(()=>{
  return dispatch(ResetError())
},[])
  return (
    <div
    className = {styles.container}
    style={{marginBottom:'50px'}}
  >
    <div className = {styles.headerTitle} style ={{fontSize: isTabletOrMobile?'24px':'32px'}}>Đăng ký tài khoản </div>
      <SignupForm onSubmit ={handleFormSubmit}></SignupForm>
     {/*} <div style = {{display: 'flex', alignItems: 'center',justifyContent : 'center'}}>
        <Logo src = {FacebookInactive} srcOnHover = {FacebookActive} style ={{width : '40px' ,height : '40px',marginLeft: '10px'}}></Logo>
        <Logo src = {GoogleInactive} srcOnHover = {GoogleActive} style = {{width : '40px' , height : '40px', marginLeft: '10px'}}></Logo>
      </div>
     <div style={{margin: '20px'}}>
      <div className = {styles.resetBtn}>Quên tài khoản ? <a>Reset ngay</a></div>
      <div className = {styles.signupBtn}>Chưa có tài khoản ? <a>Đăng ký</a></div>
  </div>*/}
  </div>
  )
}
