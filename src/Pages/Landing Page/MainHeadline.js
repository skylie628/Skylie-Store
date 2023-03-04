import React from 'react' ;
import { useEffect, useState,useMemo,useRef } from 'react';
import useWindowDimensions from '../../Hooks/useWindowDimensions.js'
import styles from './styles.module.css';
import {gsap} from 'gsap'
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
export default function MainHeadline() {
  const [ratio, setRatio] = useState(0);
  let id = 0;
  const [ height, width ] = [600,1263];
  gsap.registerPlugin(ScrollTrigger);
  const nwidth =  height*3000/840;
  const offsetX = (width - nwidth) / 2 ;
  const offsetY =  0;
const canvas = React.useRef();
const brandname = React.useRef();
const imagelist = useMemo(() => {
  let imgls = [...Array(108).keys()].map(x=>{
      console.log('preload image')
      const image = new Image();
      image.width = 3000;
      image.height = 840;
      image.src = require(`../../assets/images/Sequence Image 50fps/seqimg-header-55fps0${x+100}-min.png`);
      return image;
  })
  return imgls;
},[]);
useEffect(() => {
  const imgUrl = {index: 0};
  const context = canvas.current.getContext('2d');
  let requestId ;

const render = () => {
  console.log("renderprogress:",id)
  context.clearRect (offsetX,offsetY,nwidth,height);
  context.drawImage(imagelist[id], offsetX,offsetY,nwidth,height);
};
render();
  gsap.to(imgUrl, {
  // backgroundPosition: (-offset_value * frame_count * 2) + "px 50%",
  // ease: "steps(" + frame_count + ")", // use a stepped ease for the sprite sheet
  index: 107,
  scrollTrigger: {
  start: "top top",
  end: "+=" + 600,
  scrub: 1 ,
  },
  onUpdate: self => {
    const round = Math.round(imgUrl.index);
    if (round !== id){
    id = round;
    requestId = window.requestAnimationFrame(render);
  }
 }})

gsap.fromTo('#brandname', {opacity: 1, fontSize :'16vw', yPercent :50},
 { opacity: 0, fontSize :'20vw', yPercent :-10,
  scrollTrigger: {
  trigger:'#brandname',
  start: "top top",
  end:  "+=" + 400,
  scrub: true
},
});
gsap.fromTo('#slogan-text', {backgroundImage: "linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)",  },
 { backgroundImage: "linear-gradient(-45deg, #12c2e9, #c471ed, #f64f59, #ee7752)" ,
  scrollTrigger: {
  trigger:'#slogan-text',
  start: "+=" + 300,
  end:  "+=" + 800,
  scrub: true
},
});


gsap.fromTo('#slogan', {opacity: 0, fontSize :'8vw'},
 { opacity: 1, fontSize :'10vw',
  scrollTrigger: {
  trigger:'#brandname',
  start: "+=" + 300,
  end:  "+=" + 400,
  scrub: true
},
});

gsap.to('#slogan',
 { opacity: 0, 
  immediateRender: false,
  scrollTrigger: {
  trigger:'#brandname',
  start: "+=" + 700,
  end:  "+=" + 800,
  scrub: true
},
});

  return () => cancelAnimationFrame(requestId);
  },[])
  return (
    <div className = {styles.mainHeadline}    id = "scroller">
        {/*<div className = {styles.text}>
        <span  className = {styles.slogan} > Find your style.</span>
        <span  className = {styles.quote} > Thế giới gần 8 tỉ người, nhưng bạn là duy nhất.</span>
        <span  className = {styles.quote} > Sở hữu chiếc ốp lưng thật khác biệt sẽ khiến đối phương nhớ nhung bạn, người yêu cũ tiếc nuối bạn. </span>
        </div>
        <div className = {styles.images}>
        <span  className = {styles.slogan} > Find your style.{offset}</span>
  </div> */}

        <div  id ="pin" style = {{display :'block', width : '100%',height: '600px', position: 'fixed'}}>{/*style = {{position :  (ratio >3 )? 'absolute' :'sticky', bottom:(ratio >3 )? 0 :'' , display:'block',width:'100%',height:'100%'}} */}
          <div style = {{position: 'relative', display: 'block'}}>
          <canvas ref = {canvas} width = {width} height = {height} className = {styles.canvasimg}></canvas>
          <div  ref = {brandname} id="brandname" className={styles.HeaderName}>
          <span >SKYLIE</span>
          </div>
          <div id = "slogan" className = {styles.Slogan} >
            <span id = "slogan-text" >Find your style.</span>
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
