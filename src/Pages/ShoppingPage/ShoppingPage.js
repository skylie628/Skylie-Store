import React, { useLayoutEffect, useRef, useState } from 'react'
import { Fragment } from 'react'
import styles from './ShoppingPage.module.css'
import HelperHeader from '../../Components/Helper Header/HelperHeader'
import FilterCriterions from './FilterCriterions';
import ItemCard from '../../Components/Item Card/ItemCard';
import ItemsList from './ItemsList';
import { display } from '@mui/system';
export default function ShoppingPage() {
  const [isFixed,setIsFixed] = useState(false);
  const [showFilter,setShowFilter] = useState(false);
  const header = useRef();
  useLayoutEffect(()=>{
    const onScroll = () => {
      if ( window.scrollY>64) {
        setIsFixed(true)
      } else {
        setIsFixed(false)
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  },[])
  return (
    <div style = {{position: 'relative'}}>
      <div style = {{position: 'relative',height:80}}>
    <HelperHeader id = "header" showFilter ={showFilter} setShowFilter = {setShowFilter} ref = {header} isFixed = {isFixed} style = {{top:isFixed ? 0: -64,position: isFixed? 'sticky' : 'relative'}}></HelperHeader>
      </div>
      <div style = {{position:'relative',width:'100%',height:'100%',display:'block'}}>
    <div style  = {{ display:'flex',position:'relative', height: 'auto',width: '100%'}}>
     <FilterCriterions showFilter ={showFilter} isFixed = {isFixed}></FilterCriterions>
      <ItemsList></ItemsList>
      {/*<div style = {{flex: '4 0 0', backgroundColor : 'white',height:'100%',transition:'0.5 ease-in-out'}}>
      <div style ={{display:'flex',flexWrap: 'wrap'}}>
        <ItemCard className={styles.square}></ItemCard>
      <div className = {styles.card} >
      <div className={styles.square}></div>
      </div>
      <div className = {styles.card} >
      <div className={styles.square}></div>
      </div>
      <div className = {styles.card} >
      <div className={styles.square}></div>
      </div>
      </div>
      </div> */}
      </div>
      </div>
    </div>
  )
}
