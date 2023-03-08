import React from 'react'
import styles from './ItemCard.module.css'
export default function ItemCard({src,hotTag,name,option,sold,price}) {
  return (
    <div className = {styles.card}>
    <div className ={styles.square}>
        <img src ={src} ></img>
    </div>
    <div className={styles.description}>
        <div className ={styles.hotTag}>{hotTag}</div>
        <div className={styles.name}> {name}</div>
        <div className={styles.option}>{option} Option</div>
        <div className={styles.sold}> {sold} đã bán</div>
        <div className={styles.price}> {price} vnd</div>
    </div>
    </div>
  )
}
