import React, { useEffect } from 'react'
import  Box  from '@mui/material/Box'
import MainHeadline from './MainHeadline'
import GlassMaterialsAds from './GlassMaterialsAds'
import CoupleCollection from './CoupleCollection'
import FootballCollection from './FootballCollection'
import QrCode from './QrCode'
import useWindowDimensions from '../../Hooks/useWindowDimensions'
import { height } from '@mui/system'
export default function LandingPage() {
 const [windowDimensions,setWindowDimensions] = useWindowDimensions();
 useEffect(()=>{
  const width = window.document.body.clientWidth;
  const height = window.innerHeight;
  setWindowDimensions({width : width,height : height});
 },[])

  return (
    <div style ={{width:windowDimensions.width }}>    
    <MainHeadline windowDimensions ={windowDimensions} setWindowDimensions = {setWindowDimensions}></MainHeadline> 
    <GlassMaterialsAds  windowDimensions ={windowDimensions} setWindowDimensions = {setWindowDimensions}></GlassMaterialsAds>
    <CoupleCollection  windowDimensions ={windowDimensions} setWindowDimensions = {setWindowDimensions}></CoupleCollection>
    <QrCode windowDimensions ={windowDimensions} setWindowDimensions = {setWindowDimensions}></QrCode>
    <FootballCollection windowDimensions ={windowDimensions} setWindowDimensions = {setWindowDimensions}></FootballCollection>
    </div>

  )
}