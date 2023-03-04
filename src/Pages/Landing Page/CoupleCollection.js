import React from 'react'
import styles from './CoupleCollection.module.css'
import coupleCollection from '../../assets/images/couple-collection-graybg.png'
export default function CoupleCollection() {
  return (
    <div className = {styles.coupleCollectionWrapper}>
    <div className = {styles.coupleCollectioncontentWrapper}>
        <div style={{position : 'relative'}}>
            <span className = {styles.productName}>Couple Case</span>
            <span className = {styles.productProperty}>Đã yêu ngại gì thể hiện.</span>
            <span><a href='#' className  = {styles.morebtn}>Xem thêm</a></span>
        </div>
    </div>
    <img src = {coupleCollection} className ={styles.coupleCollectionImg}></img>
    </div>
  )
}
