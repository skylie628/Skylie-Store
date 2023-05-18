import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './ItemCard.module.css'
const slugify = require('slugify')
export default function ItemCard({id,best_sale,name,options,sales,price}) {
  const navigate = useNavigate();
  return (
    <div className = {styles.card} onClick ={()=>navigate(`../product/${slugify(name)}`)}>
    <div className ={styles.square}>
        <img src ={options.showing_img_thumbnail} ></img>
    </div>
    <div className={styles.description}>
        <div className ={styles.hotTag}>{best_sale?'Best Sales':''}</div>
        <div className={styles.name}> {name}</div>
        <div className={styles.option}>1 Option</div>
        <div className={styles.sold}> {sales} đã bán</div>
        <div className={styles.price}> {price} vnd</div>
    </div>
    </div>
  )
}
