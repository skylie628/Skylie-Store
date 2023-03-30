import React, { useState } from 'react'
import AccountInfo from './AccountInfo'
import DeliveryInfo from './DeliveryInfo'
import styles from './ProfiledPage.module.css'
import DeliveryInfoForm from './DeliveryInfoForm'
export default function ProfiledPage() {
  const [checkedPage,setCheckedPage] = useState(0);
  const [isOpenModal,setIsOpenModal] = useState(false);
  return (
    <div>
      {
        isOpenModal && <DeliveryInfoForm isOpenModal ={isOpenModal} setIsOpenModal ={setIsOpenModal}></DeliveryInfoForm>
}
    <div className ={styles.profileHeader} style = {{display:'flex', justifyContent:'space-between'}}>
      <div style ={{fontSize: '30px'}}>Account Setting</div>
      <div className= {styles.infoControl} style = {{display:'flex',alignItems:'center'}}>
      <div className= {styles.accountInfo} style ={{color: checkedPage == 0 ? 'black' : '' }} onClick ={()=>setCheckedPage(0)}>Thông tin tài khoản</div>
      <div>|</div>
      <div className= {styles.adressInfo}  style ={{color: checkedPage == 1 ? 'black' : '' }} onClick ={()=>setCheckedPage(1)}>Thông tin vận chuyển</div>
      </div>
    </div>
    {checkedPage == 0 && <AccountInfo/>}
    {checkedPage == 1 && <DeliveryInfo setIsOpenModal = {setIsOpenModal}/>}
    </div>
  )
}
