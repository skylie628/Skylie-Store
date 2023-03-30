import { height } from '@mui/system';
import { useState, useEffect } from 'react';

function getWindowDimensions() {
  return {
    width: window.document.body.clientWidth,
    height: window.innerHeight,
  };
}

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return [windowDimensions,setWindowDimensions];
}
