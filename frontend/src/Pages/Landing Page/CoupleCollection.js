import React from 'react'
import styles from './CoupleCollection.module.css'
import { useNavigate } from 'react-router-dom'
import coupleCollection from '../../assets/images/couple-collection-graybg.png'
export default function CoupleCollection({windowDimensions,setWindowDimension}) {
  const navigate = useNavigate();
  const handleOnclick = () =>{
    navigate('./shopping')
  }
  return (
    <div className = {styles.coupleCollectionWrapper} style ={{width: windowDimensions.width,height: windowDimensions.height-64}}>
    <img src = {coupleCollection} style ={{height: windowDimensions.height}}className ={styles.coupleCollectionImg}></img>
    <div className = {styles.coupleCollectioncontentWrapper} style ={{width: windowDimensions.width,height: windowDimensions.height-64}}>
        <div style ={{position : 'relative', width: windowDimensions.width,height: windowDimensions.height-64}}>
            <span className = {styles.productName}>Couple Case</span>
            <span className = {styles.productProperty}>Đánh dấu chủ quyền, ngại gì thể hiện.</span>
            <span><a onClick ={handleOnclick} href='#' className  = {styles.morebtn}>Xem thêm</a></span>
        </div>
    </div>
    </div>
  )
}
