import React from 'react'
import styles from './GlassMaterialsAds.module.css'
import { useEffect } from 'react'
import Uvb from '../../assets/images/Glass Material Component/uvb-frame.png'
import ColorLayer from '../../assets/images/Glass Material Component/color-layer.png'
import GlassLayer from '../../assets/images/Glass Material Component/glass-layer.png'
import {gsap} from 'gsap'
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
export default function GlassMaterialsAds() {
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    gsap.to('#uvb',
    { top:20, 
      left: 30,
     immediateRender: false,
     scrollTrigger: {
     trigger:'#uvb',
     start: "top top" ,
     end:  "+=" +300,
     scrub: true
   },
   });
   gsap.to('#glass',
   { top:-30, 
    immediateRender: false,
    scrollTrigger: {
    trigger:'#glass',
    start: "top top" ,
    end:  "+=" +300,
    scrub: true
  },
  });
  gsap.to('#color',
  { top:0, 
    left: -30,
   immediateRender: false,
   scrollTrigger: {
   trigger:'#color',
   start: "top top" ,
   end:  "+=" +300,
   scrub: true
 },
 });

  },[])
  return (
    <div className={styles.Container}>
    <div className={styles.Sticky}>
    <div className = {styles.glassMaterialsWrapper}>
    <div className = {styles.contentWrapper}>
        <div style={{position : 'relative'}}>
            <span className = {`${styles.productName} ${styles.shine}`}>Nano Case</span>
            <span className = {`${styles.productProperty} ${styles.shine}`}>Sang trọng. Đẳng cấp.</span>
            <span><a href='#' className = {styles.morebtn}>Xem thêm</a></span>
        </div>
    </div>
    <img id = "uvb" style = {{top:-10}} src = {Uvb} className ={styles.glassMaterialsImg}></img>
    <img id = "color" style = {{top:10}}  src = {ColorLayer} className ={styles.glassMaterialsImg}></img>
    <img id = "glass" style = {{top:10}}  src = {GlassLayer} className ={styles.glassMaterialsImg}></img>
    </div>
    </div>
    </div>
  )
}
