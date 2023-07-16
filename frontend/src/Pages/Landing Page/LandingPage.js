import React, { useEffect } from 'react'
import MainHeadline from './MainHeadline'
//import GlassMaterialsAds from './GlassMaterialsAds'
//import CoupleCollection from './CoupleCollection'
//import FootballCollection from './FootballCollection'
//import QrCode from './QrCode'
import { Suspense } from 'react'
import useWindowDimensions from '../../Hooks/useWindowDimensions'
import { useSelector, useDispatch } from 'react-redux'
import { GetUserCurrent } from '../../store/actions/user'
const QrCode = React.lazy(() => import('./QrCode'));
const GlassMaterialsAds = React.lazy(() => import('./GlassMaterialsAds'));
const FootballCollection = React.lazy(() => import('./FootballCollection'));
const CoupleCollection = React.lazy(() => import('./CoupleCollection'));
export default function LandingPage() {
 const [windowDimensions,setWindowDimensions] = useWindowDimensions();
 const dispatch = useDispatch();
 const {islogged} = useSelector(state => state.auth)
 useEffect(()=>{
  setTimeout(()=>{islogged && dispatch(GetUserCurrent());},1000) 
 },[islogged])
 useEffect(()=>{
  const width = window.document.body.clientWidth;
  const height = window.innerHeight;
  setWindowDimensions({width : width,height : height});
 },[])
  return (
    <div style ={{width:windowDimensions.width }}>    
    <MainHeadline windowDimensions ={windowDimensions} setWindowDimensions = {setWindowDimensions}></MainHeadline> 
    <Suspense fallback={<div></div>}>
    <CoupleCollection  windowDimensions ={windowDimensions} setWindowDimensions = {setWindowDimensions}></CoupleCollection>
    </Suspense>
    <Suspense fallback={<div></div>}>
    <GlassMaterialsAds  windowDimensions ={windowDimensions} setWindowDimensions = {setWindowDimensions}></GlassMaterialsAds>
    </Suspense>
    <Suspense fallback={<div></div>}>
    <QrCode windowDimensions ={windowDimensions} setWindowDimensions = {setWindowDimensions}></QrCode>
    </Suspense>
    <Suspense fallback={<div></div>}>
    <FootballCollection windowDimensions ={windowDimensions} setWindowDimensions = {setWindowDimensions}></FootballCollection>
    </Suspense>
    </div>

  )
}