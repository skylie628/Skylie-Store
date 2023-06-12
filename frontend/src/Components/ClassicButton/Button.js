import React from 'react'
import styles from './Button.module.css'
export default function Button(props) {
  return (
    <div id = {props.id} className = {props.color == 'black'? styles.blackBtn: styles.whiteBtn} style ={{  ...props.style, pointerEvents: props.disabled ? 'none' :''}} onClick={props.onClick}>{props.label}</div>
  )
}
