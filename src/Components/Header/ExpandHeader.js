import React from 'react'
import { useNavigate } from 'react-router-dom'
import Logo from '../Logo/Logo'
import SaveIconBlack from '../../assets/images/save-icon-black.png'
import SaveIconWhite from '../../assets/images/save-icon-white.png'
import OrderIconBlack from '../../assets/images/orders-icon-black.png'
import OrderIconWhite from '../../assets/images/orders-icon-white.png'
import AccountIconBlack from '../../assets/images/account-icon-black.png'
import AccountIconWhite from '../../assets/images/account-icon-white.png'
import styles from './ExpandHeader.module.css'
export default function ExpandHeader({isRelative,isExpandHeader,setIsExpandHeader}) {
    const navigate = useNavigate()
    const handleNavigate = (path)=>{
        setIsExpandHeader(false)
        navigate(path)
    }
    return (
    <div  className ={styles.expandContainer} style ={{zIndex:5,maxHeight: isExpandHeader? '500px' :'0', transition:'0.5s ease-in-out' ,color: isRelative? 'black' : 'white', backgroundColor: isRelative? 'rgb(245,245,245)' : 'black'}}>
        <div className ={styles.leftCol} >
        Giỏ hàng của bạn đang có 6 sản phẩm, checkout ngay.
        <div className ={styles.myProfile} style ={{fontSize: '13px'}}>
            <div>My Profile</div>
            <div>
                <div onClick = {()=>handleNavigate('/saved')}>
                    <Logo src={ isRelative ? SaveIconBlack : SaveIconWhite} style = {{width:'20px'}}/>
                    <div>Đã lưu</div>
                </div>
                <div onClick = {()=>handleNavigate('/orders')}>
                    <Logo src={ isRelative ? OrderIconBlack : OrderIconWhite} style = {{width:'20px'}}/>
                    <div>Orders</div>
                </div>
                <div onClick = {()=>handleNavigate('/profile')}>
                    <Logo src={ isRelative ? AccountIconBlack : AccountIconWhite} style = {{width:'20px'}}/>
                    <div>Account</div>
                </div>
            </div>
        </div>
        </div>
        <div className ={styles.reviewCartButton} onClick = {()=>handleNavigate('/cart')}><div>Xem giỏ hàng</div></div>
    </div>
  )
}
