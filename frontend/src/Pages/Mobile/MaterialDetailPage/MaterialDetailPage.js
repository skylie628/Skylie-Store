import React, { useEffect, useState, useRef, useMemo } from 'react'
import SiliconImage from '../../../assets/images/Transparent Silicon Sequence Img/sil1.png'
import EyeProtection from './EyeProtection'
import FlexibleAds from './FlexibleAds'
import useWindowDimensions from '../../../Hooks/useWindowDimensions'
import SiliconOption from './SiliconOption'
import styles from './MaterialDetailPage.module.css'
import SiliconCanvas from '../../../Components/Canvas/SiliconCanvas'
import {gsap} from 'gsap';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
export default function MaterialDetailPage() {
  let id = 1;
  gsap.registerPlugin(ScrollTrigger);
 const [windowDimensions,setWindowDimensions] = useWindowDimensions();
 let  imgUrl = {index: 0};
 const canvas = React.useRef();
const imagelist = useMemo(() => {
  console.log('preload image')
  let imgls = [...Array(19).keys()].map(x=>{
      const image = new Image();
      image.width = 3000;
      image.height = 840;
      image.src = require(`../../../assets/images/Transparent Silicon Sequence Img/sil${x}.png`);
      return image;
  })
  return imgls;
},[]);


 useEffect(()=>{
  
    const width = window.document.body.clientWidth;
    const height = window.innerHeight;
    setWindowDimensions({width : width,height : height})
    const nwidth =  windowDimensions.height*0.5*3000/840;
    const offsetX = (windowDimensions.width - nwidth) / 2 ;
    const offsetY =  0;
    const imgUrl = {index: 0};
    const context = canvas.current.getContext('2d');
    let requestId ;
  
    const render = () => {
      context.clearRect (offsetX,offsetY,nwidth,windowDimensions.height*0.5);
      context.drawImage(imagelist[id], offsetX,offsetY,nwidth,windowDimensions.height*0.5);
    };
    imagelist[0].onload = render
    //console.log(windowDimensions)
    gsap.to(imgUrl, {
      // backgroundPosition: (-offset_value * frame_count * 2) + "px 50%",
      // ease: "steps(" + frame_count + ")", // use a stepped ease for the sprite sheet
      index: 18,
      scrollTrigger: {
        trigger:'#rightProperty',
  start: "top top",
      end: "+=" + windowDimensions.height,
      scrub: 1 ,
      },
      onUpdate: self => {
        const round = Math.round(imgUrl.index);
        if (round !== id){
        id = round;
        requestId = window.requestAnimationFrame(render);}
     }})  
     gsap.to(imgUrl,
     {
      scrollTrigger:"#weightOption",
      index:0,
      onUpdate: self =>{
        window.requestAnimationFrame(render)
      }
    });
     gsap.to('#rightTexts',
     {
      scrollTrigger:"#rightborder",
      opacity:1,
      duration: 1.5,
    });
    gsap.to('#rightborder',
    {
     scrollTrigger:"#rightborder",
     width:'80%',
     duration: 0.5,
   });
   gsap.to('#rightProperty',
 { opacity: 0, 
  right: -50,
  immediateRender: false,
  scrollTrigger: {
  trigger:'#rightProperty',
  start: "top top",
  end:  "+=" + windowDimensions.height/2,
  scrub: true
},
});

gsap.to('#leftProperty',
{ opacity: 1, 
 immediateRender: false,
 scrollTrigger: {
 trigger:'#leftProperty',
 start: "top top",
 end:  "+=" + windowDimensions.height/2,
 scrub: true
},
});

gsap.to('#leftborder',
{  width:'80%',
 immediateRender: false,
 scrollTrigger: {
 trigger:'#weightOption',
 start: "top top",
 end:  "+=" + windowDimensions.height/2,
 scrub: true
},
});

gsap.to('#leftTexts',
{  opacity:1,
 marginLeft:'10vw',
 immediateRender: false,
 scrollTrigger: {
 trigger:'#weightOption',
 start: "top top",
 end:  "+=" + windowDimensions.height/2,
 scrub: true
},
});



  },[])
  return (
    <div>
      <SiliconOption></SiliconOption>
      <EyeProtection windowDimensions ={windowDimensions} setWindowDimensions = {setWindowDimensions}></EyeProtection>
    <div id="weightOption" className = {styles.container}>
    <div className ={styles.fixEle} style ={{width:'100%'}}>

    <canvas ref = {canvas} width = {windowDimensions.width} height = {windowDimensions.height*0.5} className = {styles.canvasimg}></canvas>
   
    <div id ="leftProperty" className ={styles.property} style ={{width:'35%',height:windowDimensions.height,left:'0',opacity:0}}>
       <div style ={{position:'absolute', bottom:'20%'}}>
       <div id = "leftTexts" style ={{opacity: 0,textAlign:'left',marginBottom:'3vw'}}>
       <div style ={{fontSize:'20px'}}>but can be </div>
       <div style ={{fontSize:'25px',fontWeight:'bold', color:'rgb(56,166,241)'}}>THICKER.</div> 
       </div>
       <div style={{fontSize:'15px',textAlign:'left',marginLeft:'20%',marginBottom:'10px'}}>2mm border</div>
        <div id ="leftborder" style ={{height: '1px',marginLeft:'20%',backgroundColor:'rgb(56,166,241)',width:'0'}}></div>
      </div>
      </div>

    <div id ="rightProperty" className ={styles.property} style ={{width:'35%',height:windowDimensions.height,right:'0'}}>
      <div style ={{marginTop:'50%'}}>
       <div id = "rightTexts" style ={{opacity: 0,margin:'5vw 10vw 3vw 10vw'}}>
       <div style ={{fontSize:'20px'}}>this is </div>
       <div style ={{fontSize:'25px',fontWeight:'bold', color:'rgb(56,166,241)'}}>THICK.</div> 
       </div>
       <div style={{fontSize:'15px',textAlign:'right',marginRight:'20%',marginBottom:'10px'}}>1mm border</div>
       <div ><div id ="rightborder" style ={{height: '0.5px',backgroundColor:'rgb(56,166,241)',width:'0'}}></div></div>
      </div>
      </div>
    </div>
    </div>
    <FlexibleAds windowDimensions = {windowDimensions} setWindowDimensions = {setWindowDimensions}></FlexibleAds>
    </div>
  )
}
