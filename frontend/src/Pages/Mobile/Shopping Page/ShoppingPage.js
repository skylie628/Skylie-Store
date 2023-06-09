import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { Fragment } from 'react'
import styles from './ShoppingPage.module.css'
import HelperHeader from '../../../Components/Mobile/Helper Header/HelperHeader'
import FilterCriterions from './FilterCriterions';
import ItemCard from '../../../Components/Item Card/ItemCard';
import ItemsList from './ItemsList';
import { resetQuery } from '../../../store/reducers/productQuerySlice';
import { useDispatch, useSelector } from 'react-redux';
import { display } from '@mui/system';
export default function ShoppingPage() {
  const [isFixed,setIsFixed] = useState(false);
  const dispatch = useDispatch();
  const [showFilter,setShowFilter] = useState(false);
  const [fetchFilter,setFetchFilter] = useState(false);
  const productQuery = useSelector(state=>state.productQuery);
  const header = useRef();
  const handleSubmitFilter = ()=>{
    setFetchFilter(true);
    setShowFilter(false);
  }
  useEffect(()=>{
    window.scrollTo(0,0);
  },[productQuery])
  return (
    <div style = {{position: 'relative'}}>
    <FilterCriterions handleSubmitFilter ={handleSubmitFilter} showFilter ={showFilter} setShowFilter = {setShowFilter}></FilterCriterions>
      <div style = {{position: 'relative'}}>
    <HelperHeader id = "header" showFilter ={showFilter} setShowFilter = {setShowFilter} ref = {header} isFixed = {isFixed} ></HelperHeader>
      </div>
      <div style = {{position:'relative',width:'100%',height:'100%',display:'block'}}>
    <div style  = {{ display:'flex',position:'relative', height: 'auto',width: '100%'}}>
     
      <ItemsList fetchFilter = {fetchFilter} setFetchFilter ={setFetchFilter}></ItemsList>
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
