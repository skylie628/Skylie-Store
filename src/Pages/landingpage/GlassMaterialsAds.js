import React from 'react'
import glassMaterials from '../../assets/images/glass-material.png'
import styles from './styles.module.css'
export default function GlassMaterialsAds() {
  return (
    <div className = {styles.glassMaterialsWrapper}>
    <div className = {styles.contentWrapper}>
        <div style={{position : 'relative'}}>
            <span className = {styles.productName}>Nano Case</span>
            <span className = {styles.productProperty}>Sang trọng. Đẳng cấp.</span>
            <span><a href='#' className = {styles.morebtn}>Xem thêm</a></span>
        </div>
    </div>
    <img src = {glassMaterials} className ={styles.glassMaterialsImg}></img>
    </div>
  )
}
