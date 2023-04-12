import React from 'react'
import Logo from '../Logo/Logo'
import ErrorImg from '../../assets/images/error-icon.png'
export default function MultipleNotify(props) {
  return (
    <div style={props.style} >
      <div><Logo src = {ErrorImg} style={{width: '20px',height:'20px'}}></Logo></div>
    </div>
  )
}
