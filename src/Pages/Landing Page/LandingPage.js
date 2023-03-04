import React from 'react'
import  Box  from '@mui/material/Box'
import MainHeadline from './MainHeadline'
import GlassMaterialsAds from './GlassMaterialsAds'
import CoupleCollection from './CoupleCollection'
import FootballCollection from './FootballCollection'
export default function LandingPage() {
  return (
    <Box>    
    <MainHeadline></MainHeadline> 
    <GlassMaterialsAds></GlassMaterialsAds>
    <CoupleCollection></CoupleCollection>
    <FootballCollection></FootballCollection>
    </Box>

  )
}