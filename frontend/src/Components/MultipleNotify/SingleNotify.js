import React, { Fragment, useEffect, useState } from 'react'
import Logo from '../Logo/Logo'
import ErrorImg from '../../assets/images/error-icon.png'
import SuccessImg from '../../assets/images/success-icon.png'
export default function SingleNotify(props) {
  const [isVisible,setIsVisible] = useState(true)
  useEffect(()=>{
    setTimeout(()=>{
      setIsVisible(false)
    },2000)
  },[])
  return <Fragment>
    {isVisible && <div style={props.style} >
      <div style={{ padding:'20px',display:'flex'}}>
      <div><Logo src = {props.severity == 'error' ? ErrorImg : SuccessImg} style={{width: '20px',height:'20px',}}></Logo></div>
      {
        props.msg.constructor ===Array?
        <div style={{flex:'1 0 0'}}>
        {props.msg.map(x =>
          <div>{x.msg}</div>
          )}
        </div>
        :<div style={{flex:'1 0 0'}}>{props.msg}</div>
        }
      </div>
    </div>}
    </Fragment>
}
