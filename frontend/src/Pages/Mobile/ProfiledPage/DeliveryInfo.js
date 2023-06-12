import React, { Fragment, useEffect, useState } from 'react'
import DeleteIcon from '../../../assets/images/delete-icon.png'
import EditIcon from '../../../assets/images/edit-icon-thin.png'
import styles from './DeliveryInfo.module.css'
import Logo from '../../../Components/Logo/Logo'
import EmptyCard from '../../../Components/EmptyCard/EmptyCard'
import actionTypes from '../../../store/actions/actionTypes'
import { fetchShippingAddresses,deleteShippingAddresses } from '../../../store/actions/shippingAddress'
import { useSelector,useDispatch } from 'react-redux'
import { ResetError } from '../../../store/actions/auth'
import LoadingSpinner from '../../../Components/LoadingSpinner/LoadingSpinner'
import HeaderNofify from '../../../Components/MultipleNotify/HeaderNotify'
export default function DeliveryInfo({setIsOpenModal,selectedId,setSelectedId}) {
     const [isEdited, setIsEdited] = useState(false)
     //const [shippingAddresses,setShippingAddresses] = useState([])
     const userInfo = useSelector(state => state.user).userInfo
     const addresses = useSelector(state => state.shippingAddress).addresses
     const {action} = useSelector(state => state.shippingAddress);
     const dispatch = useDispatch()
     const fetchShippingData = async()=>{
        /*const defaultIndex = addresses.findIndex(item => item.default);
        addresses.unshift(addresses.splice(defaultIndex,1)[0])*/
        userInfo.id&&dispatch(fetchShippingAddresses(userInfo.id))
        console.log(addresses)
     }
     const isSuccess =  (action == actionTypes.ADD_SUCCESS || action == actionTypes.UPDATE_SUCCESS || action == actionTypes.DELETE_SUCCESS)
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
        console.log(action)
        if(isSuccess){
            setIsOpenModal(false)
        }
     },[action])

     useEffect(()=>{
        fetchShippingData()
        return dispatch(ResetError())
     },[])
  return (
    <div>
         {(isSuccess) && <HeaderNofify style = {{width: '100%'}} severity ='' msg={'Cập nhật thông tin cho địa chỉ thành công'} ></HeaderNofify>}
        <div className = {styles.mainHeader}>
        <div style ={{fontSize: '25px', fontWeight:'bold'}}>Add & Pick.</div>
        <div style ={{fontSize: '20px'}}>Thêm thông tin vận chuyển để được hỗ trợ ship cod, gửi tặng quà cho người thân, bạn bè.</div>
        </div>
        <div className = {styles.controls}>
            <div>{isEdited ? <div style ={{display: 'block',cursor:'pointer'}} onClick ={handleAddAddress}>Thêm</div>: ' My Adresses'}</div>
        <div >
            <div style ={{cursor: 'pointer'}} onClick ={()=>setIsEdited(prev => !prev)}> {!isEdited ?  'Chỉnh sửa' : 'Hoàn thành'}</div>
       </div>
        </div>
        <div className = {styles.content}>
        <LoadingSpinner overlay={{backgroundColor: 'white', height: '40px'}} isLoading ={action == actionTypes.GET_ALL}>
        </LoadingSpinner>
        {addresses.length == 0 && action == actionTypes.GET_ALL_SUCCESS &&
        <EmptyCard msg="Chưa có địa chỉ vận chuyển nào được tạo"></EmptyCard>
        }
            {
            addresses.map(address =>
                <Fragment>
                 <div className={styles.addressCard} key ={address.id}>
                 <div>
                     <div>{address.firstname} {address.lastname}</div>
                 </div>
                 <div>
                     <div>{address.phonenum}</div>
                 </div>
                 <div>
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
             </Fragment>
            )}

        </div>
    </div>
  )
}
