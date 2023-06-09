import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import UpdateAccountInfoForm from './UpdateAccountInfoForm';
import HeaderNofify from '../../../Components/MultipleNotify/HeaderNotify';
import { GetUserCurrent,UpdateUserCurrent,ResetError } from '../../../store/actions/user';
import { apiupdateCurrent } from '../../../services/user';
import { useDispatch, useSelector } from 'react-redux';
import actionTypes from '../../../store/actions/actionTypes';
export default function AccountInfo() {
    const islogged = useSelector(state=>state.auth).islogged
    const navigate = useNavigate();
    const dispatch =useDispatch();
    !islogged && navigate('/');
    const {userInfo,action} = useSelector(state => state.user) ;
    useEffect(()=>{
     return ()=>{dispatch(ResetError())}
    },[])

    const handleSubmitForm = async(value) =>{
        console.log("payload làs",value)
        dispatch(UpdateUserCurrent({id: userInfo.id, ...value}))
    } 
  return (
    <div>
         {(action == actionTypes.UPDATE_SUCCESS) && <HeaderNofify style = {{width: '100%'}} severity ='' msg={'Cập nhật thông tin tài khoản thành công'} ></HeaderNofify>}
        <div style ={{fontSize: '18px',margin: '20px'}}>Cung cấp thông tin đầy đủ sẽ giúp bạn tiếp cận được nhiều ưu đãi hơn. </div>
        <UpdateAccountInfoForm userInfo ={userInfo} handleSubmitForm ={handleSubmitForm}></UpdateAccountInfoForm>
    </div>
  )
}
