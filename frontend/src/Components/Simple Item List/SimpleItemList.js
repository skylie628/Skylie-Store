import React, { useEffect, useState } from 'react'
import styles from './SimpleItemList.module.css'
export default function SimpleItemList({nameList,stateModel, setStateModel,ListItem,style,selectedItem,setSelectedItem}) {
    const [showList,setShowList] = useState(false)
    useEffect(()=>{
      if(stateModel == 'notTouched'){
        setShowList(true);
      }
    },[stateModel])
  return (
    <div id = {nameList} className ={styles.container} style ={{...style}}>
      <div className ={styles.header}  onClick={()=>{if(stateModel != 'notActive'){setShowList(prev => !prev)}}}>
    <div style={{}}> {nameList}</div>
 <div style ={{}}> {showList ? 'Ẩn' : 'Hiện'}</div>
 </div>
    <div className= {styles.listWrapper} style ={{maxHeight: showList? '1000px' : 0,transition: '0.3s ease-in-out'}}>
    {ListItem.map(x=> <div key = {x.id} style ={{fontWeight: (x.id==selectedItem)?'bold': ''}} className = {styles.item} onClick ={()=>{setSelectedItem(x.id);setStateModel(prev =>'Touched')}}>{x.name}</div>)}
    </div>
    </div>
  )
}
