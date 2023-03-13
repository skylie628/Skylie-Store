import styles from './CheckoutPage.module.css'
import React from 'react'
import PaymentSummary from './PaymentSummary'
import AddressInfomation from './AddressInfomation'
import ItemCard from './ItemCard'
export default function CheckoutPage() {
  return (
    <div>
    <div style={{fontSize:'25px',textAlign:'left',width:'100%',margin:'20px 0px 0px 20px'}}>Giỏ hàng</div>
    <div className ={styles.ContentWrapper}>
        <div className ={styles.leftCol}>
            <div className ={styles.descriptionCard}>
            <div style={{fontSize:'18px',textAlign:'left',margin:'10px 0px'}}>Đã chọn</div>
            <div className ={styles.descriptionCardHeader}>
                <div className={styles.item}>Sản phẩm</div>
                <div className={styles.quantity}>Số lượng</div>
                <div className={styles.subtotal}>Giá tiền</div>
            </div>

            <ItemCard/>
            <ItemCard/>
            <ItemCard/>
            <ItemCard/>
            <ItemCard/>
            <ItemCard/>
            <div className={styles.productTotal}>
                <div  style ={{fontSize: '20px'}}>Total</div>
                <div  style ={{fontSize: '18px'}}>95 000</div>
            </div>
            <div className={styles.buttons}>
            <div className={styles.backCartButton}>Trở về giỏ hàng</div>
            <div className={styles.continueShoppingButton}>Tiếp tục shopping</div>
            </div>
            </div>
        </div>
        <div className={styles.rightCol}>
            <div className={styles.sticky}>
        <AddressInfomation/>
            <div className ={styles.voucherWrapper}>
                <div className={styles.voucherInput}>
                    <input></input>
                </div>
                <div className={styles.voucherBtn}>
                    Mã Voucher
                </div>
            </div>
        <PaymentSummary/>
        </div>
        </div>
    </div>
    </div>
  )
}
