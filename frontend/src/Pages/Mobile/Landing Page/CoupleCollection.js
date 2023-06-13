import React from 'react'
import styles from './CoupleCollection.module.css'
import coupleCollection from '../../../assets/images/couple-collection-mobile.png'
import { useNavigate } from 'react-router-dom'
export default function CoupleCollection({windowDimensions,setWindowDimension}) {
  const navigate = useNavigate()
  const handleOnclick = () =>{
    navigate('./shopping')
  }
  return (
    <div className = {styles.coupleCollectionWrapper} style ={{height:'80vh'}}>
    <img src = {coupleCollection} style ={{width: '100%',height:'100%'}}className ={styles.coupleCollectionImg}></img>
    <div className = {styles.coupleCollectioncontentWrapper} style ={{width:'100%',height:'100%'}}>
        <div style ={{position : 'absolute',top:'5%', width: '100%'}}>
            <span className = {styles.productName}>Couple Case</span>
            <span className = {styles.productProperty}>Đánh dấu chủ quyền, ngại gì thể hiện.</span>
            <span onClick={handleOnclick}><a href='#' className  = {styles.morebtn}>Xem thêm</a></span>
        </div>
    </div>
    </div>
  )
}
