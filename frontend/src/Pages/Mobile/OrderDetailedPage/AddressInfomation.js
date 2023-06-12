import React from 'react'
import styles from './AddressInfomation.module.css'
export default function AddressInfomation({addressInfo}) {
  return (
    <div className={styles.billInfo}>
    <div className ={styles.billInfoHeader}>
    <div style={{fontSize: '20px',flex:'1 0 0'}}>Địa chỉ </div>
    </div>
    <div>
        <div>{addressInfo.firstname} {addressInfo.lastname}</div>
    </div>
    <div>
        <div>{addressInfo.phonenum}</div>
    </div>
    <div>
        <div>{addressInfo.address}</div>
    </div>
</div>
  )
}
