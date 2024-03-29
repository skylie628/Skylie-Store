import React, { useEffect } from 'react'
import { useState } from 'react';
import styles from './CollectionCriterion.module.css'
import { apiGetCollections } from '../../services/collection';
import Logo from '../../Components/Logo/Logo'
import ExpandIcon from '../../assets/images/expand-icon.png'
import NarrowIcon from '../../assets/images/narrow-icon.png'
import { useDispatch,useSelector } from 'react-redux';
import { filterByCollection } from '../../store/reducers/productQuerySlice';
export default function CollectionCriterion() {
    const [showCollection,setShowCollection] = useState(true);
    const [collections,setCollections] = useState([]);
    const selectedCollection = useSelector(state=> state.productQuery).collection;
    const dispatch = useDispatch();
    const handleSelectedCollection = (id) =>{
      console.log('id la',id);
      dispatch(filterByCollection(id))
    }
    useEffect(()=>{
    const collectionlist = apiGetCollections().then(
      rst => { console.log("rst la",rst); setCollections(rst.data)}
    );
    },[])
  return (
    <div className={styles.FilterCriterion}>
    <div onClick = {()=>{setShowCollection(prev => !prev)}} className = {styles.FilterCriterionName}>
    <div style={{float:'left'}}>Bộ sưu tập</div>
    <Logo src = {showCollection? NarrowIcon : ExpandIcon } style = {{width: '20px' ,height: '20px', float:'right'}}></Logo>
    <div style ={{clear:'both'}}></div>
    </div>
    <div className={styles.FilterValue} style = {{maxHeight: showCollection? '500px' : '0',overflow: 'hidden',transition:'0.5s ease-in-out'}}>
      {
      collections.map(collection => 
      <div id= {collection.id} key ={collection.id} style ={{zIndex: 5,color: ((collection.id == selectedCollection) ? 'black' : 'rgba(0,0,0,0.6)')}} onClick={()=>handleSelectedCollection(collection.id)} >{collection.name}</div>
      )
      }
    </div>
  </div>
  )
}
