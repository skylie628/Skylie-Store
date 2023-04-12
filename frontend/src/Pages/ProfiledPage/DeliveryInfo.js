import React, { useEffect, useState } from 'react'
import DeleteIcon from '../../assets/images/delete-icon.png'
import EditIcon from '../../assets/images/edit-icon-thin.png'
import styles from './DeliveryInfo.module.css'
import Logo from '../../Components/Logo/Logo'
import { fetchShippingAddresses,deleteShippingAddresses } from '../../store/actions/shippingAddress'
import { useSelector,useDispatch } from 'react-redux'
export default function DeliveryInfo({setIsOpenModal,selectedId,setSelectedId}) {
     const [isEdited, setIsEdited] = useState(false)
     //const [shippingAddresses,setShippingAddresses] = useState([])
     const userInfo = useSelector(state => state.user).userInfo
     const addresses = useSelector(state => state.shippingAddress).addresses
     const dispatch = useDispatch()
     const fetchShippingData = async()=>{
        /*const defaultIndex = addresses.findIndex(item => item.default);
        addresses.unshift(addresses.splice(defaultIndex,1)[0])*/
        userInfo.id&&dispatch(fetchShippingAddresses(userInfo.id))
        console.log(addresses)
     }
     const handleAddAddress = () =>{
        setSelectedId('');
        setIsOpenModal(true);
     }
     const handleEditAddress = (id) =>{
        setSelectedId(id);
        setIsOpenModal(true);
     }
     const handleDeleteAddress = (id) =>{
    id&& dispatch(deleteShippingAddresses(id))
     }
     useEffect(()=>{
        fetchShippingData()
     },[])
  return (
    <div>
        <div className = {styles.mainHeader}>
        <div style ={{fontSize: '30px', fontWeight:'bold'}}>Add & Pick.</div>
        <div style ={{fontSize: '25px'}}>Thêm thông tin vận chuyển để được hỗ trợ ship cod, gửi tặng quà cho người thân, bạn bè.</div>
        </div>
        <div className = {styles.controls}>
            <div>{isEdited ? <div style ={{display: 'block',cursor:'pointer'}} onClick ={handleAddAddress}>Thêm</div>: ' My Adresses'}</div>
        <div >
            <div style ={{cursor: 'pointer'}} onClick ={()=>setIsEdited(prev => !prev)}> {!isEdited ?  'Chỉnh sửa' : 'Hoàn thành'}</div>
       </div>
        </div>
        <div className = {styles.content}>
            {addresses.map(address =>
                 <div className={styles.addressCard} key ={address.id}>
                 <div>
                     <div>Tên</div>
                     <div>{address.firstname}" " {address.lastname}</div>
                 </div>
                 <div>
                     <div>Số điện thoại</div>
                     <div>{address.phonenum}</div>
                 </div>
                 <div>
                     <div>Địa chỉ</div>
                     <div>{address.address}</div>
                 </div>
                 { isEdited && <div className={styles.cardControl}>
                    { !address.default ? <div style = {{cursor:'pointer',color:'blue'}}> Đặt làm mặt định</div> : <div>Địa chỉ mặt định</div>}
                     <div onClick = {()=>handleDeleteAddress(address.id)}><Logo src={DeleteIcon} style= {{width: '25px'}}></Logo></div>
                 </div>}
                 { isEdited && <div className={styles.editBtn} onClick ={()=>handleEditAddress(address.id)}>
                 <Logo src={EditIcon} style= {{width: '25px'}}  id ={address.id}></Logo>
                 </div> }
             </div>
            )}

        </div>
    </div>
  )
}
