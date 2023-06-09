import styles from './OrderSuccess.module.css'
import React from 'react'
import Logo from '../../../Components/Logo/Logo'
import SuccessIcon from '../../../assets/images/order-success.png'
import { useNavigate } from 'react-router-dom'
export default function OrderSuccess() {
    const navigate = useNavigate()
  return (
    <div className = {styles.card} >
        <Logo src={SuccessIcon} style={{width: '80px',height:'80px',margin:'0 auto'}}></Logo>
        
        <div style ={{fontWeight:'bold',fontSize:'25px',margin:'40px 0px 20px 0px'}}>Order Success.</div>
        <div>Your order will be processed and delivered within 3 working days. You can delete your order as long as they are not confirmed by our staffs </div>
        <div>Thanks you for believing and choosing our services. Fullfill your need is our honor.</div>
        <div className ={styles.control}>
            <div onClick={()=>navigate('../shopping')}>{'<'} Back to home</div>
            <div onClick={()=>navigate('../orders')}>Track your order {'>'}</div>
        </div>
    </div>
  )
}
