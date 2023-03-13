import React from 'react'
import styles from './CartPage.module.css'
import Suggestion from '../../Components/Suggestion/Suggestion'
import ItemCard from './ItemCard'
export default function CartPage() {
  return (
    <div>
        <div className ={styles.header}>
        <div style={{fontSize: '35px', textAlign:'left', fontWeight:'600'}}>Xem giỏ hàng.</div>
        <div style={{fontSize: '20px', textAlign:'left',color:'gray',fontWeight:'100'}}>Miễn phí ship khi mua từ 2 sản phẩm.</div>
        </div>
        <ItemCard/>
        <ItemCard/>
        <ItemCard/>
        <ItemCard/>
        <div className ={styles.totalWrapper}>
            <div style={{display:'flex'}}>
            <div style={{flex:'1 0 0',textAlign:'left'}}>Tổng tiền hàng</div>
            <div>275000</div>
            </div>
            <div style={{display:'flex'}}>
            <div style={{flex:'1 0 0',textAlign:'left'}}>Phí ship</div>
            <div>0</div>
            </div>
            <div style={{display:'flex'}}>
            <div style={{flex:'1 0 0',textAlign:'left'}}>Tổng </div>
            <div>275000</div>
            </div>
            <div className={styles.checkoutButton}>Checkout ngay!</div>
        </div>
        <Suggestion/>
    </div>
  )
}
