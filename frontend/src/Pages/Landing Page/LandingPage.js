import React, { useEffect } from 'react'
import MainHeadline from './MainHeadline'
import GlassMaterialsAds from './GlassMaterialsAds'
import CoupleCollection from './CoupleCollection'
//import FootballCollection from './FootballCollection'
import QrCode from './QrCode'
import { Suspense } from 'react'
import useWindowDimensions from '../../Hooks/useWindowDimensions'
import { useSelector, useDispatch } from 'react-redux'
import { GetUserCurrent } from '../../store/actions/user'
const FootballCollection = React.lazy(() => import('./FootballCollection'));
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
    <GlassMaterialsAds  windowDimensions ={windowDimensions} setWindowDimensions = {setWindowDimensions}></GlassMaterialsAds>
    <CoupleCollection  windowDimensions ={windowDimensions} setWindowDimensions = {setWindowDimensions}></CoupleCollection>
    <QrCode windowDimensions ={windowDimensions} setWindowDimensions = {setWindowDimensions}></QrCode>
    <Suspense fallback={<div></div>}>
    <FootballCollection windowDimensions ={windowDimensions} setWindowDimensions = {setWindowDimensions}></FootballCollection>
    </Suspense>
    </div>

  )
}