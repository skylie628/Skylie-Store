import React from 'react'
import styles from './EmptyCard.module.css'
export default function EmptyCard({msg,style}) {
  return (
    <div className ={styles.container} style ={style}>
    <div style ={{}}>
        <img src = {'/empty-box.png'} style ={{width: '15%',margin:'0 auto', opacity: '0.3'}}></img>
    </div>
    <div className ={styles.description} >
    {msg}
    </div>
    </div>
  )
}
