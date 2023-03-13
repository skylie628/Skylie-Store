import React from 'react'
import styles from './OptionSelection.module.css'
export default function OptionSelection({OptionList,selectedOption,setSelectedOption}) {
  return (
    <div className={styles.optionContainer}>
    <div>Chọn option </div>
    <div className ={styles.optionMenu}>
   { OptionList.map(x => 
   <img src={x.src} style ={{opacity: (selectedOption == x.id)? 1 : 0.5}} className ={styles.optionImage} onClick={()=>setSelectedOption(x.id)}></img>)
   }
    </div>
    </div>
  )
}
