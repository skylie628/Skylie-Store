import React, { useEffect, useState } from 'react'
import AddressSelection from './AddressSelection'
import styles from './AddressInfomation.module.css'
import { useSelector } from 'react-redux'
export default function AddressInfomation({selectedAddress,setStateModalAddresses}) {
  return (
    <div className={styles.billInfo}>
    <div className ={styles.billInfoHeader}>
    <div style={{fontSize: '20px',flex:'1 0 0'}}>Địa chỉ </div>
    <div className ={styles.addMoreAddress} onClick={()=>setStateModalAddresses(true)}><a>Chọn địa chỉ</a></div>
    </div>
    <div>
        <div>{selectedAddress.firstname} {selectedAddress.lastname}</div>
    </div>
    <div>
        <div>{selectedAddress.phonenum}</div>
    </div>
    <div>
        <div>{selectedAddress.address}</div>
    </div>
</div>
  )
}
