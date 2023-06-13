import React, { useEffect } from 'react'
import styles from './CollectionCriterion.module.css'
import { filterByPrice } from '../../../store/reducers/productQuerySlice';
import { useDispatch,useSelector } from 'react-redux';
export default function PriceCriterion({showFilter , tempSelectedPrice,setTempSelectedPrice}) {
    const selectedPrice = useSelector(state=>state.productQuery).price;
    const handleOnClick = (index)=>{
      setTempSelectedPrice(index)
    }
    useEffect(()=>{
      showFilter&&setTempSelectedPrice(selectedPrice)
    },[selectedPrice,showFilter])
  return (
    <div className={styles.FilterCriterion}>
    <div  className = {styles.FilterCriterionName}>
    <div style={{float:'left'}}>Phân khúc giá</div>
   
    <div style ={{clear:'both'}}></div>
    </div>
    <div className={styles.FilterValue} style = {{maxHeight: '500px' ,overflow: 'hidden',transition:'0.5s ease-in-out'}}>
      <div style ={{color: tempSelectedPrice == 0 ? 'black' : 'rgba(0,0,0,0.8)' }} onClick={()=>handleOnClick(0)}> 100.000 vnd</div>
      <div style ={{color: tempSelectedPrice == 1 ? 'black' : 'rgba(0,0,0,0.8)' }} onClick={()=>handleOnClick(1)}>100.000 vnd - 200.000vnd</div>
      <div style ={{color: tempSelectedPrice == 2 ? 'black' : 'rgba(0,0,0,0.8)' }} onClick={()=>handleOnClick(2)}>200.000</div>
    </div>
  </div>
  )
}
