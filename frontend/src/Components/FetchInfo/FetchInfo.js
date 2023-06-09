import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { GetUserCurrent } from '../../store/actions/user';
export default function FetchInfo(props) {
const userInfo  = useSelector(state => state.user).userInfo;
const token  = useSelector(state => state.auth).userToken;
const navigate = useNavigate();
const dispatch = useDispatch();
const getUser = async()=>{
  dispatch(GetUserCurrent())
}
useEffect(()=>{
    if(!userInfo){
        token&&getUser();
    }
},[])
  return (
    <div>{token&&userInfo&&props.children}</div>
  )
}
