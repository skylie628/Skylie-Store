import React, { useEffect } from 'react'
import styles from './OptionSelection.module.css'
export default function OptionSelection({OptionList,selectedOption,setSelectedOption}) {
  useEffect(()=>{
    OptionList.length>0&&setSelectedOption(OptionList[0].id);
  },[OptionList])
  return (
    <div className={styles.optionContainer}>
    <div>Chọn option </div>
    <div className ={styles.optionMenu}>
   { OptionList.map(x => 
   <img src={x.straight_img_thumbnail} style ={{opacity: (selectedOption == x.id)? 1 : 0.5}} className ={styles.optionImage} onClick={()=>setSelectedOption(x.id)}></img>)
   }
    </div>
    </div>
  )
}
