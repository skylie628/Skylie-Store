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
    <div  className ={styles.checkoutModal} style ={{maxHeight: checkoutModal? '120px' :'0', transition:'0.5s ease-in-out' }}>
        <div style ={{flex :'1 0 0',fontSize: '25px',margin: '30px'}}>
        Bạn đã thêm một sản phẩm vào giỏ hàng, checkout ngay.
        </div>
        <div className ={styles.reviewCartButton} onClick = {()=>navigate('/cart')}><div>Xem giỏ hàng</div></div>
    </div>
  )
}
