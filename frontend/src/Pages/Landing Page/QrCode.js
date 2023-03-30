import React, { useState } from 'react'
import girl from '../../assets/images/qrcode-girl.png'
import hand from '../../assets/images/qrcode-hand.png'
import shoppingIcon from  '../../assets/images/shopping-icon.png'
import styles from './QrCode.module.css'
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import ZoomOutIcon from '@mui/icons-material/ZoomOut';
import {gsap} from 'gsap';
import { useEffect } from 'react';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { width } from '@mui/system';
export default function QrCode({windowDimensions,setWindowDimensions}) {
    gsap.registerPlugin(ScrollTrigger);
    const [sliderValue,setSliderValue] = useState(30);
    const value = {count : 30};
    const updateValue = (event, newValue) =>{
        setSliderValue(newValue);
    }
 useEffect(()=>{
    gsap.to(value, {
        // backgroundPosition: (-offset_value * frame_count * 2) + "px 50%",
        // ease: "steps(" + frame_count + ")", // use a stepped ease for the sprite sheet
        count: 100,
        scrollTrigger: {
        trigger:'#girlPhone',
        start: 'top top',
        end:  "+=" + windowDimensions.height/2,
        scrub: 1 ,
        },
        onUpdate: self => {
         setSliderValue(value.count)
        }
    })

        gsap.fromTo('#girlPhone',
        {transform: 'scale(1)'},
        { transform: 'scale(2)', 
         immediateRender: false,
         scrollTrigger: {
         trigger:'#girlPhone',
         start: "top top",
         end:  "+=" + windowDimensions.height/2,
         scrub: true
       },
       });

       gsap.fromTo('#handImage',
       {    transform: 'translate(-50%,-50%) scale(4)'},
       {    transform: 'translate(-50%,-50%) scale(1)' , 
        immediateRender: false,
        scrollTrigger: {
        trigger:'#handCanvas',
        start: "+=" + windowDimensions.height/2,
        end:  "+=" + windowDimensions.height/2,
        scrub: true
      },
      });
      gsap.to('#handImage',
      { opacity: 1, 
       immediateRender: false,
       scrollTrigger: {
       trigger:'#handCanvas',
       start: "+=" + (windowDimensions.height/2),
       end: "+=" + 0,
       scrub: true
     },
     });
     gsap.to('#ZoomContainer',
     { opacity: 0, 
      immediateRender: false,
      scrollTrigger: {
      trigger:'#handCanvas',
      start: "+=" + (windowDimensions.height/2),
      end: "+=" + 0,
      scrub: true
    },
    });
    gsap.to('#shoppingButton',
    { bottom: '15%',
      transition: '0.2s ease-in-out', 
     immediateRender: false,
     scrollTrigger: {
     trigger:'#handCanvas',
     start: "+=" + (windowDimensions.height),
     end: "+=" + 0,
     scrub: true
   },
   });

       gsap.to('#girlPhone',
 { opacity: 0, 
  immediateRender: false,
  scrollTrigger: {
  trigger:'#girlPhone',
  start: "+=" + windowDimensions.height/2,
  end:  "+=" + 10,
  scrub: true
},
});
gsap.to('#girlPhone',
{ sx: {
    opacity: 0,
    '& input[type="range"]': {
      WebkitAppearance: 'slider-vertical',
    },
  }, 
 immediateRender: false,
 scrollTrigger: {
 trigger:'#slider',
 start: "+=" + windowDimensions.height/2,
 end:  "+=" + 10,
 scrub: true
},
});

gsap.fromTo('#sliderDot',
{top: '100%'
},
{ top: '0', 
 immediateRender: false,
 scrollTrigger: {
 trigger:'#girlPhone',
 start: "top top",
 end:  "+=" + windowDimensions.height/2,
 scrub: true
},
});

    
    },[]) 
    
  return (
    <div className={styles.container} >
        <div  className = {styles.stickyEle} style ={{height:windowDimensions.height}}>
        <div className = {styles.squareCanvas} style ={{height: windowDimensions.height,width: windowDimensions.height}}>
        <img id = 'girlPhone' src ={girl} style ={{width:'100%',height: '100%'}}></img>
        </div>
        <div  id ="ZoomContainer" className={styles.ZoomContainer} style ={{width:(windowDimensions.width - windowDimensions.height)/2,height: windowDimensions.height}}> 
        <div className={styles.ZoomWrapper}> 
            <ZoomInIcon fontSize= 'large'></ZoomInIcon>
            <div className ={styles.verticalSlider}>
            <div className ={styles.sliderDot} id ="sliderDot"></div>
            </div>
            <ZoomOutIcon fontSize= 'large'></ZoomOutIcon>
         </div>
         </div>
        <div id = 'handCanvas' className = {styles.handImgWrapper} style ={{height:windowDimensions.height,width: windowDimensions.width}}>
        <img id = 'handImage' src = {hand} className = {styles.handImg} ></img>
        </div>
        <div id ="shoppingButton" className= {`${styles.shoppingButtonWrapper}`} style = {{ transition : `all 0.8s ease-in-out 0.2s'}` ,opacity :  1}}>
        <div>
        <div className= {`${styles.shoppingButton}`} style = {{backgroundColor: 'rgb(241,241,241)'}}>
        <span>QrCode Collection</span>
        <img src = {shoppingIcon}></img>
        </div>
        </div>
        </div>

        </div>
    </div>
  )
}
