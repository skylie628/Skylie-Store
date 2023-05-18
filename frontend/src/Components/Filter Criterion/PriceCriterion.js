import React from 'react'
import { useState } from 'react';
import styles from './CollectionCriterion.module.css'
import Logo from '../../Components/Logo/Logo'
import ExpandIcon from '../../assets/images/expand-icon.png'
import NarrowIcon from '../../assets/images/narrow-icon.png'
import { filterByPrice } from '../../store/reducers/productQuerySlice';
import { useDispatch,useSelector } from 'react-redux';
export default function PriceCriterion() {
    const [showPrice,setShowPrice] = useState(true);
    const selectedPrice = useSelector(state=>state.productQuery).price;
    const dispatch = useDispatch();
    const handleOnClick = (index)=>{
      dispatch(filterByPrice(index))
    }
  return (
    <div className={styles.FilterCriterion}>
    <div onClick = {()=>{setShowPrice(prev => !prev)}} className = {styles.FilterCriterionName}>
    <div style={{float:'left'}}>Phân khúc giá</div>
    <Logo src = {showPrice? NarrowIcon : ExpandIcon } style = {{width: '20px' ,height: '20px', float:'right'}}></Logo>
    <div style ={{clear:'both'}}></div>
    </div>
    <div className={styles.FilterValue} style = {{maxHeight: showPrice? '500px' : '0',overflow: 'hidden',transition:'0.5s ease-in-out'}}>
      <div style ={{color: selectedPrice == 0 ? 'black' : 'rgba(0,0,0,0.8)' }} onClick={()=>handleOnClick(0)}> 100.000 vnd</div>
      <div style ={{color: selectedPrice == 1 ? 'black' : 'rgba(0,0,0,0.8)' }} onClick={()=>handleOnClick(1)}>100.000 vnd - 200.000vnd</div>
      <div style ={{color: selectedPrice == 2 ? 'black' : 'rgba(0,0,0,0.8)' }} onClick={()=>handleOnClick(2)}>200.000</div>
    </div>
  </div>
  )
}
