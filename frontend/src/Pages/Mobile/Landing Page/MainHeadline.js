import React from 'react' ;
import { useEffect, useState,useMemo,useRef } from 'react';
import useWindowDimensions from '../../../Hooks/useWindowDimensions.js'
import styles from './styles.module.css';
import {gsap} from 'gsap';
import PromoteImg from '../../../assets/images/promote-img-01.png'
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useNavigate } from 'react-router-dom';
export default function MainHeadline({windowDimensions,setWindowDimensions}) {
  const navigate = useNavigate();
  const handleOnclick = () =>{
    navigate('./shopping')
  }
  return (
    <div className = {styles.mainHeadline} style ={{width: windowDimensions.width}}   id = "scroller">
        {/*<div className = {styles.text}>
        <span  className = {styles.slogan} > Find your style.</span>
        <span  className = {styles.quote} > Thế giới gần 8 tỉ người, nhưng bạn là duy nhất.</span>
        <span  className = {styles.quote} > Sở hữu chiếc ốp lưng thật khác biệt sẽ khiến đối phương nhớ nhung bạn, người yêu cũ tiếc nuối bạn. </span>
        </div>
        <div className = {styles.images}>
        <span  className = {styles.slogan} > Find your style.{offset}</span>
  </div> */}

        <div  id ="pin" style = {{display :'block', width : windowDimensions.width,height: windowDimensions.height-64}}>{/*style = {{position :  (ratio >3 )? 'absolute' :'sticky', bottom:(ratio >3 )? 0 :'' , display:'block',width:'100%',height:'100%'}} */}
          <div style = {{position: 'relative', display: 'block'}}>
          <img src ={PromoteImg}></img>
          <div className ={styles.brandname}>
          <div>Skylie Case.</div>
          <div style={{fontSize:'15px',fontWeight:'500',margin:'5px'}}>Find Your Style.</div>
          <div onClick = {handleOnclick} style={{fontSize:'18px',color:'#2997ff',fontWeight:'500',margin:'5px',cursor:'pointer'}}>{'Shopping >'}</div>
          </div>

          {/*<Canvas imgIndex={index}  width={1263} height = {600} className = {styles.canvasimg} ></Canvas>
          <div className={styles.HeaderName} style = {{opacity : (ratio<1) ? (1- 2*ratio) : 0, fontSize : (ratio<1) ? `${18+ratio*10}vw` : 0}}>
            <span >SKYLIE</span>
          </div>
          <div className={styles.HeaderName} style = {{opacity : (ratio>0.75) ? ((ratio<1)?(4*(ratio-0.75)):(1-4*(ratio-1))) : 0, fontSize : (ratio>0.75 && ratio<1.25) ?  `${8+(ratio-0.75)*4}vw` : 0 }}>
            <span  >Find your style.</span>
          </div>*/}
          </div>

        </div>
    </div>
  )
}
