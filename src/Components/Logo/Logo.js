import React from 'react'

export default function Logo({src,srcOnHover,style}) {
  return (
    <img src = {src} style = {{...style,display: 'block',cursor: 'pointer'}}
    onMouseOver={(e): void => {
        srcOnHover && (e.currentTarget.src = srcOnHover);
      }}
      onMouseOut={(e): void => {
        srcOnHover && (e.currentTarget.src = src || '');
      }} ></img>
  )
}
