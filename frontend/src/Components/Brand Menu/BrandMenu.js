import React, { useRef } from 'react'
import styles from './BrandMenu.module.css'
import prev from  '../../assets/images/prev-icon.png'
import next from '../../assets/images/next-icon.png'
import apple from '../../assets/images/Brand Logo/Apple-logo.png'
import samsung from '../../assets/images/Brand Logo/Samsung-logo.png'
import oppo from '../../assets/images/Brand Logo/Oppo-logo.png'
import realme from '../../assets/images/Brand Logo/Realme-logo.png'
import vivo from '../../assets/images/Brand Logo/Vivo-logo.png'
import xiaomi from '../../assets/images/Brand Logo/Xiaomi-logo.png'
import huawei from '../../assets/images/Brand Logo/Huawei-logo.png'
import sony from '../../assets/images/Brand Logo/Sony-logo.png'
import nokia from '../../assets/images/Brand Logo/Nokia-logo.png'
import zenfone from '../../assets/images/Brand Logo/Zenfone-logo.png'
import vsmart from '../../assets/images/Brand Logo/Vsmart-logo.png'
import htc from '../../assets/images/Brand Logo/HTC-logo.png'
import lg from '../../assets/images/Brand Logo/Lg-logo.png'
import meizu from '../../assets/images/Brand Logo/Meizu-logo.png'
import motorola from '../../assets/images/Brand Logo/Motorola-logo.png'
import oneplus from '../../assets/images/Brand Logo/Oneplus-logo.png'

import { useState,useEffect } from 'react'
export default function BrandMenu({id,stateBrandMenu,setStateBrandMenu,selectedBrand,setSelectedBrand}) {
    const ScrollWidth = useRef(null);
    const [current,setCurrent] = useState(-1)
    const [speed,setSpeed] = useState(100)
    const brandImgs =[
        apple,samsung,oppo,realme,vivo,xiaomi,huawei,sony,nokia,zenfone,
        vsmart,htc,lg,meizu,motorola,oneplus
    ]
    const brandNames = 
    [
      "Apple",
      "Samsung",
      "Oppo",
      "Realme",
      "Vivo",
      "Xiaomi",
      "Huawei",
      "Sony",
      "Nokia",
      "Zenfone",
      "Vsmart",
      "Htc",
      "Lg",
      "Meizu",
      "Motorola",
      "Oneplus"
    ]
    const numBrands = 12;
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
    const changeBrandMenu = (id) =>{
        setSelectedBrand(id);
        setStateBrandMenu(prev => 'Touched');
    }
  return (
    <div style={{borderTop: '1px solid rgba(0,0,0,0.3)',position:'relative'}}>
        <div className = {styles.notActive} style ={{display:(stateBrandMenu == 'notActive')? 'block': 'none'}}></div>
        <div style={{padding: '30px 0px'}}>Chọn dòng điện thoại</div>
    <div className  = {styles.phoneBrand}>
    <div className={styles.prevBtn} onClick ={()=>handlePrevBtn()}>
        <img src={prev}></img>
    </div>
    <div className= {styles.content} ref ={ScrollWidth}>
    <div id="brandMenu" className ={styles.phoneBrandSlider} style={{left: `-${current*speed*60}px`,transition:'0.3s ease-in-out'}}>
   {brandNames.map((name,index) => 
   <div id={index} className ={styles.phoneBrandImage}>
        <img  src ={brandImgs[index]} style={{opacity: selectedBrand == index ? 1 : ''}} onClick={()=>changeBrandMenu(index)}></img>
        <span>{name}</span>
    </div>)}
    </div>
    </div>
    <div className={styles.nextBtn} onClick ={()=>handleNextBtn()} >
        <img src={next}></img>
    </div>
    </div>
    </div>
  )
}
