import React, { useState } from 'react'
import styles from './ShowHideLayout.module.css'
import ExpandIcon from '../../assets/images/expand-icon.png'
import NarrowIcon from '../../assets/images/narrow-icon.png'

export default function ShowHideLayout(props) {
    const [show,setShow] = useState(props.initState) 
  return (
    <div className={styles.container}>
        <div className={styles.header} onClick ={()=>setShow(prev=>!prev)}>
        <div className={styles.headerTitle}>{props.header}</div>
        <div className={styles.headerIcon}><img className ={styles.icon} src ={show? NarrowIcon : ExpandIcon} ></img></div>
        </div>
        <div className={styles.content} style ={{maxHeight : show? '1000px' : '0px',transition:'0.3s ease-in-out'}}>
            {props.children}
        </div>
    </div>
  )
}
