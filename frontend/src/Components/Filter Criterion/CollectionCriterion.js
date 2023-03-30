import React from 'react'
import { useState } from 'react';
import styles from './CollectionCriterion.module.css'
import Logo from '../../Components/Logo/Logo'
import ExpandIcon from '../../assets/images/expand-icon.png'
import NarrowIcon from '../../assets/images/narrow-icon.png'
export default function CollectionCriterion() {
    const [showCollection,setShowCollection] = useState(true);
  return (
    <div className={styles.FilterCriterion}>
    <div onClick = {()=>{setShowCollection(prev => !prev)}} className = {styles.FilterCriterionName}>
    <div style={{float:'left'}}>Bộ sưu tập</div>
    <Logo src = {showCollection? NarrowIcon : ExpandIcon } style = {{width: '20px' ,height: '20px', float:'right'}}></Logo>
    <div style ={{clear:'both'}}></div>
    </div>
    <div className={styles.FilterValue} style = {{maxHeight: showCollection? '500px' : '0',overflow: 'hidden',transition:'0.5s ease-in-out'}}>
      <div>Football</div>
      <div>12 Zodiacs</div>
      <div>Couple</div>
      <div>Abstract</div>
    </div>
  </div>
  )
}
