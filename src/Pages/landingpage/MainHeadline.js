import  Typography  from '@mui/material/Typography'
import Box  from '@mui/material/Box'
import  Grid  from '@mui/material/Grid'
import React from 'react'
import styles from './styles.module.css'
export default function MainHeadline() {
  return (
    <div className = {styles.mainHeadline}>
        <div className = {styles.text}>
        <span  className = {styles.slogan} > Find your style.</span>
        <span  className = {styles.quote} > Thế giới gần 8 tỉ người, nhưng bạn là duy nhất.</span>
        <span  className = {styles.quote} > Sở hữu chiếc ốp lưng thật khác biệt sẽ khiến đối phương nhớ nhung bạn, người yêu cũ tiếc nuối bạn. </span>
        </div>
        <div className = {styles.images}>
        <span  className = {styles.slogan} > Find your style.</span>
        </div>
    </div>
  )
}
