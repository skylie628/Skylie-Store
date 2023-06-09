import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import styles from './CheckoutModal.module.css'
export default function CheckoutModal({checkoutModal, setCheckoutModal}) {
const navigate = useNavigate()
useEffect(()=>{
    if(checkoutModal){
    setTimeout(()=>{setCheckoutModal(false)}, 3000);
    }
},[checkoutModal])
  return (
    <div  className ={styles.checkoutModal} style ={{maxHeight: checkoutModal? '160px' :'0', transition:'0.5s ease-in-out' }}>
        <div style ={{fontSize: '18px',margin: '10px'}}>
        Bạn đã thêm một sản phẩm vào giỏ hàng, checkout ngay.
        </div>
        <div className ={styles.reviewCartButton} onClick = {()=>navigate('/cart')}><div>Xem giỏ hàng</div></div>
    </div>
  )
}
