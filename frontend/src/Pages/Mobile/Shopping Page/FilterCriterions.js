import { position } from '@mui/system'
import React, { useEffect, useState } from 'react'
import styles from './FilterCriterions.module.css'
import ColourCriterion from '../../../Components/Mobile/Filter Criterion/ColourCriterion'
import CollectionCriterion from '../../../Components/Mobile/Filter Criterion/CollectionCriterion'
import PriceCriterion from '../../../Components/Mobile/Filter Criterion/PriceCriterion'
import Logo from '../../../Components/Logo/Logo'
import CloseIcon from '../../../assets/images/close-icon-black.png'
import { resetQuery } from '../../../store/reducers/productQuerySlice'
import { useDispatch } from 'react-redux'
export default function FilterCriterions({handleSubmitFilter,showFilter,setShowFilter}) {
  const dispatch = useDispatch();
  const handleClearQuery = async()=>{
    dispatch(resetQuery());
  }
  return (
    <div className= {styles.container} style = {{flex: showFilter? '1 0 0' : '0 0 0', maxHeight: showFilter? '100%': '0px'}} >
           {showFilter&&<div  style={{right: '20px',top:'20px',border:'2px solid black',padding:'5px',borderRadius:'100%',backgroundColor:'white',position:'fixed',zIndex:'10'}} onClick={()=>setShowFilter(false)}><Logo style ={{width: '20px'}} src ={CloseIcon}></Logo></div>}
      <CollectionCriterion></CollectionCriterion>
      <ColourCriterion></ColourCriterion>
      <PriceCriterion></PriceCriterion>
      <div style ={{display:'flex',justifyContent:'space-between'}}>
      <div className={styles.btn} style ={{border:'1px solid black'}} onClick={handleSubmitFilter}><div>Lọc</div></div>
      <div className={styles.btn} style ={{backgroundColor:'gray',color:'white'}} onClick ={handleClearQuery}><div>Xóa lọc</div></div>
      </div>
    </div>
  )
}
