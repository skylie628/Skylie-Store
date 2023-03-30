import React, { useRef } from 'react'
import styles from './style.module.css'
import { useEffect } from 'react'
import CloseIcon from '../../assets/images/close-icon.png';
import videoPath from '../../assets/videos/football.mp4' 
import useWindowDimensions from '../../Hooks/useWindowDimensions'
export default function VideoModal(props) {
  const {width,height}  = useWindowDimensions()
    const video = useRef() 
    useEffect(()=>{
    video.current.volume = 0.2
    document.body.style.overflowY = "hidden";
    return () => {
        document.body.style.overflowY = "visible";
    }
    },[])

  return (
    <div className = {styles.container}>
      <div style = {{maxWidth: 'fit-content', height:'100%',margin:'0 auto', position:'relative'}}>
        <img src = {CloseIcon} style = {{width: '20px', height: '20px', display:'block',position :"absolute",cursor:'pointer',zIndex:1, left:'-10px'}} onClick = {()=>{return props.closeModal(false)}}></img>
        <div style = {{height : '100%',position :"relative"}} > 
          <video ref = {video} height ='100%' style ={{ objectFit: 'cover'}} controls>
          <source src={videoPath} type="video/mp4"/>
          Your browser does not support HTML video.
        </video>
        </div>
        </div>
    </div>
  )
}
