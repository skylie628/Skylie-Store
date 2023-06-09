import React from 'react'
import styles from './PaymentSummary.module.css'
import { covertCurrencyFormat } from '../../utils/currencyFortmat'
export default function PaymentSummary({selectedAddress,handleOrder,productTotal,deliveryFee,total}) {
  return (
    <div className={styles.paymentSummary}>
    <div style={{fontSize: '20px',flex:'1 0 0'}}>Tóm tắt thanh toán</div>
    <div>
        <div style={{flex:'1 0 0'}}>Tổng tiền hàng</div>
        <div>{covertCurrencyFormat(productTotal)}</div>
    </div>
    <div>
        <div style={{flex:'1 0 0'}}>Phí ship</div>
        <div>{covertCurrencyFormat(deliveryFee)}</div>
    </div>
    <div className ={styles.grandTotal}>
        <div style={{flex:'1 0 0', fontSize: '16px',fontWeight:'600'}}>Tổng thanh toán</div>
        <div style={{fontSize: '16px',fontWeight:'600'}}>{covertCurrencyFormat(total)}</div>
    </div>
    <div className={styles.placeOrderBtn} onClick={handleOrder}><span style={{width:'100%'}}>Đặt hàng</span></div>
</div>
  )
}
