import React from 'react'
import styles from './AddressInfomation.module.css'
export default function AddressInfomation() {
  return (
    <div className={styles.billInfo}>
    <div className ={styles.billInfoHeader}>
    <div style={{fontSize: '20px',flex:'1 0 0'}}>Địa chỉ </div>
    <div className ={styles.addMoreAddress}><a>Thêm địa chỉ</a></div>
    </div>
    <div>
        <div>Người nhận</div>
        <div>Đinh Vĩnh Khương</div>
    </div>
    <div>
        <div>Phone Num.</div>
        <div>0352 917 477</div>
    </div>
    <div>
        <div >Địa chỉ</div>
        <div>210 Điện Biên Phủ khu phố Ninh Tân phường Ninh Sơn tp Hồ Chí Minh tỉnh Tây Ninh</div>
    </div>
</div>
  )
}
