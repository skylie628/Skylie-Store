import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './ItemCard.module.css'
export default function ItemCard({src,id,hotTag,name,option,sold,price}) {
  const navigate = useNavigate();
  return (
    <div className = {styles.card} onClick ={()=>navigate(`../product/${id}`)}>
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
