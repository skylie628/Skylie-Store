import React, { useEffect, useState, useRef, useMemo } from 'react'
import SiliconImage from '../../assets/images/Transparent Silicon Sequence Img/sil1.png'
import useWindowDimensions from '../../Hooks/useWindowDimensions'
import SiliconOption from './SiliconOption'
import styles from './MaterialDetailPage.module.css'
import SiliconCanvas from '../../Components/Canvas/SiliconCanvas'
import {gsap} from 'gsap';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
export default function MaterialDetailPage() {
  let id = 0;
  gsap.registerPlugin(ScrollTrigger);
 const [windowDimensions,setWindowDimensions] = useWindowDimensions();
 let  imgUrl = {index: 0};
 const [prevId,setPrevId] = useState(0);
 const canvas = React.useRef();
const imagelist = useMemo(() => {
  let imgls = [...Array(19).keys()].map(x=>{
      console.log('preload image')
      const image = new Image();
      image.width = 3000;
      image.height = 840;
      image.src = require(`../../assets/images/Transparent Silicon Sequence Img/sil${x}.png`);
      return image;
  })
  return imgls;
},[]);
 useEffect(()=>{
  
    const width = window.document.body.clientWidth;
    const height = window.innerHeight;
    setWindowDimensions({width : width,height : height})
    const nwidth =  windowDimensions.height*0.8*3000/840;
    const offsetX = (windowDimensions.width - nwidth) / 2 ;
    const offsetY =  0;
    const imgUrl = {index: 0};
    const context = canvas.current.getContext('2d');
    let requestId ;
  
    const render = () => {
    console.log("renderprogress:",windowDimensions.height,window.innerHeight)
    context.clearRect (offsetX,offsetY,nwidth,windowDimensions.height*0.8);
    context.drawImage(imagelist[id], offsetX,offsetY,nwidth,windowDimensions.height*0.8);
  };
  render();
    //console.log(windowDimensions)
    gsap.to(imgUrl, {
      // backgroundPosition: (-offset_value * frame_count * 2) + "px 50%",
      // ease: "steps(" + frame_count + ")", // use a stepped ease for the sprite sheet
      index: 18,
      scrollTrigger: {
      start: windowDimensions.height,
      end: "+=" + windowDimensions.height*2,
      scrub: 1 ,
      },
      onUpdate: self => {
        const round = Math.round(imgUrl.index);
        if (round !== id){
        id = round;
        requestId = window.requestAnimationFrame(render);}
     }})

  },[])
  return (
    <div>
      <SiliconOption></SiliconOption>
    <div className = {styles.container}>
    <div className ={styles.fixEle} style ={{width:'100%',height:windowDimensions.height - 64}}>
    <canvas ref = {canvas} width = {windowDimensions.width} height = {windowDimensions.height*0.8} className = {styles.canvasimg}></canvas>
    </div>
    </div>
    </div>
  )
}
