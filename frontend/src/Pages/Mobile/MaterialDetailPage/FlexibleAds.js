import React from 'react'
import styles from './FlexibleAds.module.css'
import { useMemo , useEffect} from 'react';
import {gsap} from 'gsap';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
export default function FlexibleAds({windowDimensions,setWindowDimensions}) {
    /*gsap.registerPlugin(ScrollTrigger);
    let id = 0;
    let  imgUrl = {index: 0};
    const canvas = React.useRef(); */
   const imagelist = useMemo(() => {
     console.log('preload image')
     let imgls = [...Array(6).keys()].map(x=>{
         const image = new Image();
         image.width = 3000;
         image.height = 840;
         image.src = require(`../../../assets/images/Silicon Case Twerk/silicon-case-phone-twerk-${x}.png`);
         return image;
     })
     return imgls;
   },[]);
   useEffect(()=>{
  
    /*const width = windowDimensions.width;
    const height = windowDimensions.height;
    setWindowDimensions({width : width,height : height})
    const nwidth =  windowDimensions.height*0.8*3000/840;
    const offsetX = (windowDimensions.width - nwidth) / 2 ;
    const offsetY =  0;
    const imgUrl = {index: 0};
    const context = canvas.current.getContext('2d');
    const render = () => {
        console.log(id);
        context.clearRect (offsetX,offsetY,nwidth,windowDimensions.height*0.8);
        context.drawImage(imagelist[id%6], offsetX,offsetY,nwidth,windowDimensions.height*0.8);
    };
      imagelist[0].onload = render

      const playSequenceImage = function(){
        const interval = setInterval(()=>{
            if(id > 23) {
                return ()=>{clearInterval(interval);}
            }
            window.requestAnimationFrame(render);
            id++;
        }, 500);
       }
    ScrollTrigger.create({
        trigger: '#canvasFlexible',
        onEnter: playSequenceImage});*/
        gsap.registerPlugin(ScrollTrigger);
   gsap.to('#img2',
   {
    scrollTrigger:"#canvasFlexible",
    left: '70%',
    opacity:1,
    duration: 0.6,
  });
  gsap.to('#img1',
  {
   scrollTrigger:"#canvasFlexible",
   left: '45%',
   opacity:1,
   duration: 0.5,
 });
 gsap.to('#img4',
 {
  scrollTrigger:"#canvasFlexible",
  start: 'top top',
  left: '15%',
  opacity:1,
  duration:0.6,
});
},[])
  return (
    <div id = 'canvasFlexible' className={styles.container} style ={{width:windowDimensions.width, height:windowDimensions.height}}>
    <img id ="img0" src = {imagelist[0].src}  style = {{transition:'1s ease-in-out',opacity:'1',left:'15%'}}></img>
    <img  id ="img1"  src = {imagelist[1].src} style = {{transition:'1s ease-in-out',left:'15%'}}></img>
    <img  id ="img2"  src = {imagelist[2].src} style = {{transition:'1s ease-in-out',left:'15%'}}></img>
  
    <div style ={{color:'rgba(255,255,255,0.9)',width:'80%', lineHeight:'1.5',position:'absolute', top: '70%',left:'50%',transform:'translate(-50%,-50%)'}}>
        <div style = {{fontSize:'25px'}}>Dẻo dai. bền bỉ. </div>
        <div style ={{fontSize:'20px'}}>
            Cả viền ốp và mặt lưng được làm bằng chất liệu <span style ={{fontSize:'25px',color:'white'}}>sillicon dẻo</span> nguyên khối. Nhờ vậy không bị hiện tượng nứt gãy khi va chạm mạnh. Ngoài ra, tính chất này cũng giúp ốp không bị hư trong quá trình tháo lắp.
        </div>
        </div>
    </div>
  )
}
