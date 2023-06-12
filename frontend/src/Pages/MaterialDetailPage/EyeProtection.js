import React from 'react'
import styles from './EyeProtection.module.css'
import EyeProtect from '../../assets/images/full-eye-protect.png'
import Mantis from '../../assets/images/mantis.png'
import {gsap} from 'gsap';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
export default function EyeProtection({windowDimensions,setWindowDimensions}) {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to('#eyeProtect',
    {
     scrollTrigger:"#text",
     start:500,
     transform: 'scale(1)',
     duration: 1,
   });
   return <div className={styles.container} style = {{height:windowDimensions.height}}>
<div style ={{display:'flex',justifyContent:'space-between', padding:'30px 20%'}}>
    <div style = {{width: '35%',overflow:'hidden'}}>
   <img id = "eyeProtect" style={{width: '100%' ,transform: 'scale(0.6)'}} src ={EyeProtect}></img>
   </div>
   <div style = {{width: '35%',overflow:'hidden'}}>
   <img id = "eyeProtect" style={{width: '100%',transform: 'scale(0.5)'}} src ={Mantis}></img>
   </div>
</div>
<div style ={{color: 'rgba(255,255,255,0.9)'}}><div style={{fontSize:'35px',fontWeight:'bold',lineHeight:'50px'}}>Full Eye Protection
</div>
 <span id = "text" style ={{display: 'block',fontSize:'25px',fontWeight:'100',margin: '15px 10vw '}}>Bảo vệ toàn diện cụm camera điện thoại, một bộ phận dễ thương tổn của mặt lưng. Viền ốp nhô cao giúp cụm cam tránh trầy xước khi bị va chạm. </span></div>
   </div>
  
}
