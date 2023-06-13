import React from 'react'
import EmptyImage from '../../assets/images/empty-box.png'
import styles from './EmptyCard.module.css'
export default function EmptyCard({msg,style}) {
  return (
    <div className ={styles.container} style ={style}>
    <div style ={{}}>
        <img src = {'/empty-box'} style ={{width: '15%',margin:'0 auto', opacity: '0.3'}}></img>
    </div>
    <div className ={styles.description} >
    {msg}
    </div>
    </div>
  )
}
