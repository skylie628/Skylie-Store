import React, { useRef } from 'react'
import styles from './BrandMenu.module.css'
import apple from '../../assets/images/Brand Logo/apple-logo.png'
import prev from  '../../assets/images/prev-icon.png'
import next from '../../assets/images/next-icon.png'
import huawei from '../../assets/images/Brand Logo/huawei-logo.png'
import lg from '../../assets/images/Brand Logo/lg-logo.png'
import oppo from '../../assets/images/Brand Logo/oppo-logo.png'
import realme from '../../assets/images/Brand Logo/realme-logo.png'
import samsung from '../../assets/images/Brand Logo/samsung-logo.png'
import vivo from '../../assets/images/Brand Logo/vivo-logo.png'
import xiaomi from '../../assets/images/Brand Logo/xiaomi-logo.png'
import { useState,useEffect } from 'react'
export default function BrandMenu({selectedBrand,setSelectedBrand}) {
    const ScrollWidth = useRef(null);
    const [current,setCurrent] = useState(-1)
    const [speed,setSpeed] = useState(100)
    const numBrands = 8;
    useEffect(()=>{
         setSpeed(ScrollWidth?.current?.clientWidth/80);
         console.log(ScrollWidth?.current?.clientWidth);
         console.log('aaa')
    },[ScrollWidth?.current?.clientWidth])
    const handleNextBtn =()=> {
        if((current+1)*speed*60<numBrands*80){
        setCurrent(prev => (prev+1))
        console.log(current)
        }
    }
    const handlePrevBtn =()=> {
       if(current>0){
        setCurrent(prev => (prev-1))
       }
    }
  return (
    <div style={{borderTop: '1px solid rgba(0,0,0,0.3)'}}>
        <div style={{padding: '30px 0px'}}>Chọn dòng điện thoại</div>
    <div className  = {styles.phoneBrand}>
    <div className={styles.prevBtn} onClick ={()=>handlePrevBtn()}>
        <img src={prev}></img>
    </div>
    <div className= {styles.content} ref ={ScrollWidth}>
    <div className ={styles.phoneBrandSlider} style={{left: `-${current*speed*60}px`,transition:'0.3s ease-in-out'}}>
    <div className ={styles.phoneBrandImage}>
        <img src ={apple} style={{opacity: selectedBrand == 0 ? 1 : 0.5}} onClick={()=>setSelectedBrand(0)}></img>
        <span>Apple</span>
    </div>
    <div className ={styles.phoneBrandImage}>
        <img src ={samsung} style={{opacity: selectedBrand == 1 ? 1 : 0.5}} onClick={()=>setSelectedBrand(1)}></img>
        <span>Samsung</span>
    </div>
    <div className ={styles.phoneBrandImage}>
        <img src ={lg} style={{opacity: selectedBrand == 2 ? 1 : 0.5}} onClick={()=>setSelectedBrand(2)}></img>
        <span>Lg</span>
    </div>
    <div className ={styles.phoneBrandImage}>
        <img src ={xiaomi} style={{opacity: selectedBrand == 3 ? 1 : 0.5}} onClick={()=>setSelectedBrand(3)}></img>
        <span>Xiaomi</span>
    </div>
    <div className ={styles.phoneBrandImage}>
        <img src ={oppo}  style={{opacity: selectedBrand == 4 ? 1 : 0.5}} onClick={()=>setSelectedBrand(4)}></img>
        <span>Oppo</span>
    </div>
    <div className ={styles.phoneBrandImage}>
        <img src ={realme} style={{opacity: selectedBrand == 5 ? 1 : 0.5}} onClick={()=>setSelectedBrand(5)}></img>
        <span>Realme</span>
    </div>
    <div className ={styles.phoneBrandImage}>
        <img src ={huawei} style={{opacity: selectedBrand == 6 ? 1 : 0.5}} onClick={()=>setSelectedBrand(6)}></img>
        <span>Huawei</span>
    </div>
    <div className ={styles.phoneBrandImage}>
        <img src ={vivo} style={{opacity: selectedBrand == 7 ? 1 : 0.5}} onClick={()=>setSelectedBrand(7)}></img>
        <span>Vivo</span>
    </div>
    </div>
    </div>
    <div className={styles.nextBtn} onClick ={()=>handleNextBtn()} >
        <img src={next}></img>
    </div>
    </div>
    </div>
  )
}
