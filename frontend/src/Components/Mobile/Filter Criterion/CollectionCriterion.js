import React, { useEffect } from 'react'
import { useState } from 'react';
import styles from './CollectionCriterion.module.css'
import { apiGetCollections } from '../../../services/collection';
import { useDispatch,useSelector } from 'react-redux';
export default function CollectionCriterion({showFilter,tempSelectedCollection,setTempSelectedCollection}) {
    const [collections,setCollections] = useState([]);
    const selectedCollection = useSelector(state=> state.productQuery).collection;
    const handleSelectedCollection = (id) =>{
      console.log('id la',id);
      //dispatch(filterByCollection(id))
      setTempSelectedCollection(id)
    }
    useEffect(()=>{
      showFilter&&setTempSelectedCollection(selectedCollection);
    },[selectedCollection,showFilter])
    useEffect(()=>{
    apiGetCollections().then(
      rst => { console.log("rst la",rst); setCollections(rst.data)}
    );
    },[])
  return (
    <div className={styles.FilterCriterion}>
    <div className = {styles.FilterCriterionName}>
    <div style={{float:'left'}}>Bộ sưu tập</div>
    <div style ={{clear:'both'}}></div>
    </div>
    <div className={styles.FilterValue} style = {{maxHeight:'500px',overflow: 'hidden',transition:'0.5s ease-in-out'}}>
      {
      collections.map(collection => 
      <div id= {collection.id} style ={{zIndex: 5,color: ((collection.id == tempSelectedCollection) ? 'black' : 'rgba(0,0,0,0.6)')}} onClick={()=>handleSelectedCollection(collection.id)} >{collection.name}</div>
      )
      }
    </div>
  </div>
  )
}
