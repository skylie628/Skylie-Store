import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
export default function Private(props) {
const token  = useSelector(state => state.auth).userToken;
const navigate = useNavigate();
useEffect(()=>{
    if(!token){
    navigate('../signin')
    }
},[token])
  return (
    <div>{token&&props.children}</div>
  )
}
