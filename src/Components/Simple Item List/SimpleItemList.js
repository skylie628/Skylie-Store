import React, { useState } from 'react'
import styles from './SimpleItemList.module.css'
export default function SimpleItemList({ListItem,style,selectedItem,setSelectedItem}) {
    console.log(selectedItem)
    const [showList,setShowList] = useState(true)
  return (
    <div className ={styles.container} style ={{...style}}>
 <div style ={{float:'right',cursor:'pointer'}} onClick={()=>{setShowList(prev => !prev)}}>Ẩn</div>
    <div className= {styles.listWrapper} style ={{maxHeight: showList? '1000px' : 0,transition: '0.3s ease-in-out'}}>
    {Array.from(Array(ListItem.length).keys()).map(x=> <div key = {x} style ={{fontWeight: (x==selectedItem)?'bold': ''}} className = {styles.item} onClick ={()=>setSelectedItem(x)}>{ListItem[x]}</div>)}
    </div>
    </div>
  )
}
