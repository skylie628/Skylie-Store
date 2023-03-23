import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useMemo } from 'react';
import {gsap} from 'gsap'
import styles from './SiliconCanvas.module.css'
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
const SiliconCanvas = ({imgIndex, height, width,className}) => {
    const nwidth =  height*3000/840;
    const offsetX = (width - nwidth) / 2 ;
    const offsetY =  0;
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
  React.useEffect(() => {
    const context = canvas.current.getContext('2d');
    let requestId;
    const render = () => {
      context.clearRect (offsetX,offsetY,nwidth,height);
      context.drawImage(imagelist[imgIndex], offsetX,offsetY,nwidth,height);
      requestId = window.requestAnimationFrame(render);
    };
    render();
    return () => cancelAnimationFrame(requestId);
  });
return (
  <div>
    <div style = {{color: 'white'}}></div>
    <canvas ref={canvas} height={height} width={width} className ={className} />
    </div>
  );
};
SiliconCanvas.propTypes = {
  imgIndex: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
};
export default SiliconCanvas;