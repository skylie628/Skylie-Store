import React, { Fragment, useState } from 'react'
import styles from './CartPage.module.css'
import Suggestion from '../../Components/Suggestion/Suggestion'
import ItemCard from './ItemCard'
import HeaderNofify from '../../Components/MultipleNotify/HeaderNotify'
import actionTypes from '../../store/actions/actionTypes'
import LoadingSpinner from '../../Components/LoadingSpinner/LoadingSpinner'
import { covertCurrencyFormat } from '../../utils/currencyFortmat'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { fetchCartItem } from '../../store/actions/cartItem'
import { getCartId } from '../../store/actions/cartItem'
export default function CartPage() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [totalPrice,setTotalPrice] = useState(0);
    const userInfo = useSelector(state => state.user).userInfo;
    const cart = useSelector(state => state.cart);
    useEffect(()=>{
        cart.cartId&&dispatch(fetchCartItem(cart.cartId.id));
    },[cart.cartId])
    useEffect(()=>{
    let total = cart.cartItems.reduce((x,y)=> {
        if(y.campaign !=0){
            return (x+ y.quantity * (y.option?.product.price)*(1-y.campaign.value/100))
        }
        return (x+ y.quantity * y.option?.product.price)
    },0)
   setTotalPrice(total)
   console.log('tat ca la',total)
    },cart.cartItems)
    useEffect(()=>{
        dispatch(getCartId(userInfo.id));
    },[])
    return (
    <div>
       {(cart.action == actionTypes.UPDATE_SUCCESS) && <HeaderNofify style = {{width: '100%'}} severity ='' msg={'Cập nhật giỏ hàng thành công'} ></HeaderNofify>}
       {(cart.action == actionTypes.DELETE_SUCCESS) && <HeaderNofify style = {{width: '100%'}} severity ='' msg={'Xóa item khỏi giỏ hàng thành công'} ></HeaderNofify>}
        <div className ={styles.header}>
        <div style={{fontSize: '35px', textAlign:'left', fontWeight:'600'}}>Xem giỏ hàng.</div>
        <div style={{fontSize: '20px', textAlign:'left',color:'gray',fontWeight:'100'}}>Miễn phí ship khi mua từ 2 sản phẩm.</div>
        </div>
        <LoadingSpinner overlay={{backgroundColor: 'white', height:'300px'}} isLoading ={cart.action == actionTypes.GET_ALL ||  cart.action == actionTypes.GET }>
        { cart.cartItems.map(item => 
        <ItemCard itemInfo = {item}/>
        )}
         </LoadingSpinner>
        <div className ={styles.totalWrapper}>
            <div style={{display:'flex'}}>
            <div style={{flex:'1 0 0',textAlign:'left'}}>Tổng tiền hàng</div>
            <div>{covertCurrencyFormat(totalPrice)}</div>
            </div>
            <div style={{display:'flex'}}>
            <div style={{flex:'1 0 0',textAlign:'left'}}>Phí ship</div>
            <div>0</div>
            </div>
            <div style={{display:'flex'}}>
            <div style={{flex:'1 0 0',textAlign:'left'}}>Tổng </div>
            <div>275000</div>
            </div>
            <div className={styles.checkoutButton} onClick ={()=>navigate('/checkout')}>Checkout ngay!</div>
        </div>
        <Suggestion/>
    </div>
  )
}
