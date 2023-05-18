import React from 'react'
import styles from './Button.module.css'
export default function (props) {
  const color ={
    black: 'rgb(0,0,0)',
    gray: 'rgba(0,0,0,0.3)',
    blue: 'rgb(0,119,237)'
  }
  return (
    <div style ={{textAlign:'center',backgroundColor:color[props.bgColor],...props.style}} className ={styles.button}  onClick={props.onClick}>{props.label}</div>
  )
}
