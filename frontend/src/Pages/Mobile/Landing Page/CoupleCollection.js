import React from 'react'
import styles from './CoupleCollection.module.css'
import coupleCollection from '../../../assets/images/couple-collection-mobile.png'
export default function CoupleCollection({windowDimensions,setWindowDimension}) {
  return (
    <div className = {styles.coupleCollectionWrapper} style ={{height:'80vh'}}>
    <img src = {coupleCollection} style ={{height: '100%'}}className ={styles.coupleCollectionImg}></img>
    <div className = {styles.coupleCollectioncontentWrapper} style ={{width:'100%',height:'100%'}}>
        <div style ={{position : 'absolute',top:'5%', width: '100%'}}>
            <span className = {styles.productName}>Couple Case</span>
            <span className = {styles.productProperty}>Đánh dấu chủ quyền, ngại gì thể hiện.</span>
            <span><a href='#' className  = {styles.morebtn}>Xem thêm</a></span>
        </div>
    </div>
    </div>
  )
}
