import React, { useEffect, useState } from 'react'
import styles from './SimpleItemList.module.css'
export default function SimpleItemList({stateModel, setStateModel,ListItem,style,selectedItem,setSelectedItem}) {
    console.log(selectedItem)
    const [showList,setShowList] = useState(false)
    useEffect(()=>{
      if(stateModel == 'notTouched'){
        setShowList(true);
      }
    },[stateModel])
  return (
    <div id = 'model' className ={styles.container} style ={{...style}}>
 <div style ={{float:'right',cursor:'pointer'}} onClick={()=>{if(stateModel != 'notActive'){setShowList(prev => !prev)}}}> {showList ? 'Ẩn' : 'Hiện'}</div>
    <div className= {styles.listWrapper} style ={{maxHeight: showList? '1000px' : 0,transition: '0.3s ease-in-out'}}>
    {Array.from(Array(ListItem.length).keys()).map(x=> <div key = {x} style ={{fontWeight: (x==selectedItem)?'bold': ''}} className = {styles.item} onClick ={()=>{setSelectedItem(x);setStateModel(prev =>'Touched')}}>{ListItem[x]}</div>)}
    </div>
    </div>
  )
}
