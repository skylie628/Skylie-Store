import React, { useState } from 'react'
import AccountInfo from './AccountInfo'
import DeliveryInfo from './DeliveryInfo'
import styles from './ProfiledPage.module.css'
import { apiAddShippingAddress } from '../../services/shippingAddress'
import { addShippingAddresses,updateShippingAddresses } from '../../store/actions/shippingAddress'
import { translateAddress } from '../../utils/translateAddress'
import DeliveryInfoForm from './DeliveryInfoForm'
import { useSelector,useDispatch } from 'react-redux'
export default function ProfiledPage() {
  const [checkedPage,setCheckedPage] = useState(0);
  const [isOpenModal,setIsOpenModal] = useState(false);
  const [selectedId,setSelectedId] = useState('')
  const userInfo = useSelector(state=> state.user).userInfo;
  const addresses = useSelector(state=> state.shippingAddress).addresses;
  const dispatch = useDispatch()
  const handleFormSubmit = async(payload) =>{
    const address = await translateAddress(payload.province,payload.district,payload.ward,payload.homenum);
    payload = {account_id : userInfo.id,address: address,default: true,...payload};
    selectedId ? await  dispatch(updateShippingAddresses({id:selectedId,...payload})) : await dispatch(addShippingAddresses(payload))
    console.log("list sau khi add",addresses);
  }
  return (
    <div>
      {
        isOpenModal && <DeliveryInfoForm  handleFormSubmit = {handleFormSubmit} isOpenModal ={isOpenModal} setIsOpenModal ={setIsOpenModal} selectedId = {selectedId} setSelectedId ={setSelectedId}></DeliveryInfoForm>
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
    {checkedPage == 1 && <DeliveryInfo setIsOpenModal = {setIsOpenModal} selectedId = {selectedId} setSelectedId ={setSelectedId} />}
    </div>
  )
}
