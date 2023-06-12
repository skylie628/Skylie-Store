import React from 'react'
import styles from './GlassMaterialsAds.module.css'
import { useEffect } from 'react'
import nano from '../../../assets/images/nano-material-mobile.png'
import { useNavigate } from 'react-router-dom'
export default function GlassMaterialsAds({windowDimensions,setWindowDimensions}) {
  const navigate = useNavigate()
  useEffect(() => {
  },[])
  return (
    <div className={styles.Container} style ={{width: windowDimensions.width}}>
    <div className={styles.Sticky}  style ={{height: windowDimensions.height-64}}>
    <div className = {styles.glassMaterialsWrapper}>
    <div className = {styles.contentWrapper}>
        <div style={{position : 'relative'}}>
            <span className = {`${styles.productName} ${styles.shine}`}>Nano Case</span>
            <span className = {`${styles.productProperty} ${styles.shine}`}>Sang trọng. Đẳng cấp.</span>
            <span><a href='#' onClick = {()=>navigate('/materials')} className = {styles.morebtn}>Xem thêm</a></span>
        </div>
    </div>
    <img id = "uvb" style = {{ width: '100%'}} src = {nano} className ={styles.glassMaterialsImg}></img>
    </div>
    </div>
    </div>
  )
}
