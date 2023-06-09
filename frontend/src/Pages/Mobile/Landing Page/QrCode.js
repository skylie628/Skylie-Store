import React, { useState } from 'react'
import handPhone from '../../../assets/images/qr-code-girl-mobile.png'
import shoppingIcon from  '../../../assets/images/shopping-icon.png'
import styles from './QrCode.module.css'
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import ZoomOutIcon from '@mui/icons-material/ZoomOut';
import {gsap} from 'gsap';
import { useEffect } from 'react';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { width } from '@mui/system';
export default function QrCode({windowDimensions,setWindowDimensions}) {
 useEffect(()=>{
    
    },[]) 
    
  return (
    <div className={styles.container} >
        <div id = 'handCanvas' className = {styles.handImgWrapper} style ={{height:'100%',width:'100%'}}>
        <img id = 'handImage' src = {handPhone} className = {styles.handImg} ></img>
        <div className = {styles.coupleCollectioncontentWrapper} style ={{width:'100%',height:'100%'}}>
        <div style ={{position : 'absolute',top:'5%', width: '100%'}}>
            <span className = {styles.productName}>QrCode Collection</span>
            <span className = {styles.productProperty}>Nếu độc thân, hãy là độc nhất</span>
            <span><a href='#' className  = {styles.morebtn}>Xem thêm</a></span>
        </div>
    </div>

        </div>
    </div>
  )
}
