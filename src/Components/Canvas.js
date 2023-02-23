import React from 'react';
import PropTypes from 'prop-types';
import { useMemo } from 'react';
const Canvas = ({imgIndex, height, width,className}) => {
    const nwidth =  width*1500/840;
    const offsetX = (width - nwidth) / 2 ;
    const offsetY =  0;
  const canvas = React.useRef();
  const imagelist = useMemo(() => {
    let imgls = [...Array(56).keys()].map(x=>{
        console.log('preload image')
        const image = new Image();
        image.src = require(`../assets/images/Compress Sequence Image Header/sequenceimg_header00${x+44}-min.png`);
        return image.src;
    })
    return imgls;
  },[]);
  React.useEffect(() => {
    const context = canvas.current.getContext('2d');
    const image = new Image();
    image.width = 1500;
    image.height = 840;
    image.onload = function()  {
        context.clearRect (offsetX,offsetY,nwidth,height);
        context.drawImage(image, offsetX,offsetY,nwidth,height);
      };
    image.src = imagelist[imgIndex-44]
  },[imgIndex]);
return (
    <canvas ref={canvas} height={height} width={width} className ={className} />
  );
};
Canvas.propTypes = {
  imgIndex: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
};
export default Canvas;