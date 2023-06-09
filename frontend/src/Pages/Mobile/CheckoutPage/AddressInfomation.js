import React, { Fragment, useEffect, useState } from 'react'
import AddressSelection from './AddressSelection'
import styles from './AddressInfomation.module.css'
import { useSelector } from 'react-redux'
import EmptyCard from '../../../Components/EmptyCard/EmptyCard'
export default function AddressInfomation({addressesData,selectedAddress,setStateModalAddresses}) {
  return (
    <div className={styles.billInfo}>
    <div style={{fontSize: '20px',flex:'1 0 0'}}>Địa chỉ </div>
    <div className ={styles.billInfoHeader}>
    <div className ={styles.addMoreAddress} onClick={()=>setStateModalAddresses(true)}><a>Chọn địa chỉ</a></div>
    </div>
    {
(addressesData.length == 0 )&& <EmptyCard msg ="Thêm địa chỉ để order bạn nhé"></EmptyCard>
    }
    {selectedAddress&& 
    <Fragment>
    <div>
        <div>{selectedAddress.firstname} {selectedAddress.lastname}</div>
    </div>
    <div>
        <div>{selectedAddress.phonenum}</div>
    </div>
    <div>
        <div>{selectedAddress.address}</div>
    </div>
    </Fragment>
    }
</div>
  )
}
