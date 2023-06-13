import React from 'react'
import useWindowDimensions from '../../../Hooks/useWindowDimensions'
import BlackSil from '../../../assets/images/black-silicon-materials-mobile.png'
import TransSil from '../../../assets/images/transparent-silicon-materials-mobile.png'
import { useEffect,useState } from 'react';
import styles from './SiliconOption.module.css'
export default function SiliconOption() {
    const [windowDimensions,setWindowDimensions] = useWindowDimensions();
    const [optionSelect,setOptionSelect] = useState(0);
    useEffect(()=>{
        const width = window.document.body.clientWidth;
        const height = window.innerHeight;
        setWindowDimensions({width : width,height : height})},[])
  return (
    <div style ={{width:windowDimensions.width,height: windowDimensions.height*0.8}} className={styles.container}>
    <div className={styles.property} style ={{opacity: optionSelect, left: optionSelect == 0? '-50px' : '0', transition:'0.5s ease-in-out'}}>
    <div>Darknight.</div>
    <div>Cool.</div>
    <div>Mystery.</div>
    </div>
    <div className={styles.property} style ={{opacity: optionSelect == 0 ? 1 : 0, left: optionSelect == 1? '-50px' : '0', transition:'0.5s ease-in-out'}}>
    <div>PureHeart.</div>
    <div>Soft.</div>
    <div>Luxury.</div>
    </div>
    <img className={styles.materialsImg} src = {BlackSil} style ={{zIndex : 1, height:'100%', opacity: optionSelect, transition:'0.5s ease-in-out'}} ></img>
    <img className={styles.materialsImg} src = {TransSil} style ={{zIndex: 0,height:'100%',transition:'0.5s ease-in-out'}} ></img>
    <div className ={styles.options}>
        <div style ={{margin:'0 auto'}}>
        <div className={styles.option}>
            <div className={styles.colorDot} style={{backgroundColor:'white',border:optionSelect == 0? '2px solid blue' :'2px solid black'}} onClick = {()=>setOptionSelect(0)}></div>
            <div >
            Trong suốt
            </div>
        </div>
        <div className={styles.option}>
        <div className={styles.colorDot} style={{backgroundColor:'black',border:optionSelect == 1? '2px solid blue' :'2px solid gray'}} onClick = {()=>{setOptionSelect(1)}}></div>
        <div>
            Đen
            </div>
        </div>
        </div>
    </div>
    </div>
  )
}
