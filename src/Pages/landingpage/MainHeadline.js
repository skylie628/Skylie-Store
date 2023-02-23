import React from 'react' ;
import { useEffect, useState } from 'react';
import useWindowDimensions from '../../Hooks/useWindowDimensions.js'
import styles from './styles.module.css';
import Canvas from '../../Components/Canvas.js';
import SmoothScrollBar from '../../Components/SmoothScrollBar.js';
import SIH from '../../assets/images/Sequence Image Header/sequenceimg_header0044.png';
export default function MainHeadline() {
  const [ratio, setRatio] = useState(0);
  const [index, setIndex] = useState(44);
  const { height, width } = useWindowDimensions();
  const currentpath =  (index) =>{
    return  `../../assets/images/Sequence Image Header/sequenceimg_header00${index}.png`
  }

  useEffect(() => {
      const unit = 56/(height);
      const onScroll = () => {
      setRatio(window.pageYOffset/height)
      requestAnimationFrame(()=>setIndex(Math.min(99,44 + Math.round(window.pageYOffset*unit)))) 
    
    }
      // clean up code
      window.removeEventListener('scroll', onScroll);
      window.addEventListener('scroll', onScroll, { passive: true });
      return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (

    <div className = {styles.mainHeadline}>
        {/*<div className = {styles.text}>
        <span  className = {styles.slogan} > Find your style.</span>
        <span  className = {styles.quote} > Thế giới gần 8 tỉ người, nhưng bạn là duy nhất.</span>
        <span  className = {styles.quote} > Sở hữu chiếc ốp lưng thật khác biệt sẽ khiến đối phương nhớ nhung bạn, người yêu cũ tiếc nuối bạn. </span>
        </div>
        <div className = {styles.images}>
        <span  className = {styles.slogan} > Find your style.{offset}</span>
  </div> */}

        <SmoothScrollBar />
        <div className = {styles.image} style = {{position :  (ratio >3 )? 'absolute' :'fixed', bottom:(ratio >3 )? 0 :'' , display:'block',width:'100%',height:'100%'}}>
          <div style = {{position: 'relative', display: 'block'}}>
          <Canvas imgIndex={index}  width={1263} height = {600} className = {styles.canvasimg}></Canvas>
          <div className={styles.HeaderName} style = {{opacity : (ratio<1) ? (1- 2*ratio) : 0, fontSize : (ratio<1) ? `${18+ratio*10}vw` : 0}}>
            <span >SKYLIE</span>
          </div>
          <div className={styles.HeaderName} style = {{opacity : (ratio>0.75) ? ((ratio<1)?(4*(ratio-0.75)):(1-4*(ratio-1))) : 0, fontSize : (ratio>0.75 && ratio<1.25) ?  `${8+(ratio-0.75)*4}vw` : 0 }}>
            <span  >Find your style.</span>
          </div>
          </div>
          <div>{index}{height}</div>
        </div>
        <div></div>
    </div>
  )
}
