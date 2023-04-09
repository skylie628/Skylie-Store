import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import UpdateAccountInfoForm from './UpdateAccountInfoForm';
import { GetUserCurrent } from '../../store/actions/user';
import { apiupdateCurrent } from '../../services/user';
import { useDispatch, useSelector } from 'react-redux';
export default function AccountInfo() {
    const islogged = useSelector(state=>state.auth).islogged
    const navigate = useNavigate();
    const dispatch =useDispatch();
    !islogged && navigate('/');
    const {userInfo} = useSelector(state => state.user) ;
    const handleSubmitForm = async(value) =>{
        const response = await (apiupdateCurrent({id: userInfo.id, ...value}))
        dispatch(GetUserCurrent(userInfo.id))
        console.log(response)
    } 
  return (
    <div>
        <div style ={{fontSize: '20px',margin: '20px'}}>Cung cấp thông tin đầy đủ sẽ giúp bạn tiếp cận được nhiều ưu đãi hơn. </div>
        <UpdateAccountInfoForm userInfo ={userInfo} handleSubmitForm ={handleSubmitForm}></UpdateAccountInfoForm>
    </div>
  )
}
