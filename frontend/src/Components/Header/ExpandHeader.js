import React, { Fragment } from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Logo from '../Logo/Logo'
import SaveIconBlack from '../../assets/images/save-icon-black.png'
import SaveIconWhite from '../../assets/images/save-icon-white.png'
import OrderIconBlack from '../../assets/images/orders-icon-black.png'
import OrderIconWhite from '../../assets/images/orders-icon-white.png'
import AccountIconBlack from '../../assets/images/account-icon-black.png'
import AccountIconWhite from '../../assets/images/account-icon-white.png'
import LogoutIconBlack from '../../assets/images/logout-black-icon.png'
import LogoutIconWhite from '../../assets/images/logout-white-icon.png'
import { Logout } from '../../store/actions/auth'
import { LogoutCurrent } from '../../store/actions/user'
import { useMediaQuery } from 'react-responsive'
import { useDispatch, useSelector } from 'react-redux'
import styles from './ExpandHeader.module.css'
export default function ExpandHeader({onMouseLeave,isRelative,isExpandHeader,setIsExpandHeader}) {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 });
    const {islogged} = useSelector(state => state.auth)
    const handleNavigate = (path)=>{
        setIsExpandHeader(false)
        navigate(path)
    }
    const handleLogout = ()=>{
        setIsExpandHeader(false)
        dispatch(Logout())
        dispatch(LogoutCurrent())
    }
    return (
    <div  className ={styles.expandContainer} style ={{zIndex:5,flexDirection:isTabletOrMobile?'column':'row',maxHeight: isExpandHeader? '500px' :'0', transition:'0.5s ease-in-out' ,color: isRelative? 'black' : 'white', backgroundColor: isRelative? 'rgb(245,245,245)' : 'black',transform: 'translateZ(0)'}} onMouseLeave ={onMouseLeave}>
        <div className ={styles.leftCol} >
        {islogged&&<div>
        Giỏ hàng của bạn đang có 6 sản phẩm, checkout ngay.
        </div>}

        {!islogged&&<div>
        Giỏ hàng của bạn đang trống, đăng nhập để shopping ngay.
        </div>}
        {islogged&&isTabletOrMobile&&<div className ={styles.reviewCartButton}  onClick = {()=>handleNavigate('/cart')}><div style ={{width: 'fit-content',fontSize:isTabletOrMobile?'20px':'25px'}}>Xem giỏ hàng</div></div>}
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
                <Fragment>
                <div onClick = {()=>handleNavigate('/profile')}>
                    <Logo src={ isRelative ? AccountIconBlack : AccountIconWhite} style = {{width:'20px'}}/>
                    <div>Account</div>
                </div>

              <div onClick = {()=>handleLogout()}>
                    <Logo src={ isRelative ? LogoutIconBlack : LogoutIconWhite} style = {{width:'20px'}}/>
                    <div>Logout</div>
                </div>
                </Fragment>
            </div>
        </div>
        </div>
        {islogged&&!isTabletOrMobile&&<div className ={styles.reviewCartButton} onClick = {()=>handleNavigate('/cart')}><div>Xem giỏ hàng</div></div>}
    </div>
  )
}
