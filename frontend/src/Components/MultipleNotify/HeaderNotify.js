import React, { Fragment, useEffect, useState } from 'react'
import Logo from '../Logo/Logo'
import ErrorImg from '../../assets/images/error-icon.png'
import SuccessImg from '../../assets/images/success-icon.png'
import { useMediaQuery } from 'react-responsive'
export default function HeaderNofify(props) {
  const [isVisible,setIsVisible] = useState(false);
  const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 })
  useEffect(()=>{
    setIsVisible(true)
    setTimeout(()=>{
      setIsVisible(false)
    },3000)
  },[])
  return <Fragment>
    {<div style={{position:'fixed',top:0,zIndex:isVisible? 5: 0,color:'white',opacity:isVisible? '1':'0',transition:'0.5s ease-in-out',backgroundColor:'rgb(0,119,237)',...props.style}}  >
      <div style={{ padding:'20px',display:'flex'}}>
      <div><Logo src = {props.severity == 'error' ? ErrorImg : SuccessImg} style={{width: '20px',height:'20px',}}></Logo></div>
      {
        props.msg?.constructor ===Array?
        <div style={{flex:'1 0 0'}}>
        {props.msg.map(x =>
          <div>{x.msg}</div>
          )}
        </div>
        :<div style={{flex:'1 0 0',fontSize: isTabletOrMobile?'18px':'20px'}}>{props.msg}</div>
        }
      </div>
    </div>}
    </Fragment>
}
