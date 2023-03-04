import React from 'react'
import styles from './style.module.css'
import { useEffect } from 'react'
export default function VideoModal(props) {
    useEffect(()=>{
    document.body.style.overflowY = "hidden";
    return () => {
        document.body.style.overflowY = "visible";
    }
    },[])

  return (
    <div className = {styles.container}>
        <div style = {{color : 'white'}} onClick = {()=>{return props.closeModal(false)}}> 
        <iframe src="https://player.vimeo.com/video/60814695?title=0&amp;byline=0&amp;portrait=0&amp;color=ffffff" width="448" height="800" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen>
        </iframe>
        </div>
    </div>
  )
}
