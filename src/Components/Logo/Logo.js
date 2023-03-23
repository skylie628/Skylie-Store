import React from 'react'

export default function Logo({src,srcOnHover,onClick,style}) {
  return (
    <img src = {src} onClick ={onClick} style = {{display: 'block',cursor: 'pointer',...style}}
    onMouseOver={(e): void => {
        srcOnHover && (e.currentTarget.src = srcOnHover);
      }}
      onMouseOut={(e): void => {
        srcOnHover && (e.currentTarget.src = src || '');
      }} ></img>
  )
}
