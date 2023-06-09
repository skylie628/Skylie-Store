import React, { useEffect } from 'react'
import styles from './Modal.module.css'
export default function Modal(pros) {
    useEffect(()=>{
        document.body.style.overflowY = "hidden";
        return () => {
            document.body.style.overflowY = "visible";
        }
    },[])
  return (
    <div className = {styles.overlay}>{pros.children}</div>
  )
}
