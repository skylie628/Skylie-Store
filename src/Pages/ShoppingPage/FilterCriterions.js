import { position } from '@mui/system'
import React from 'react'
import styles from './FilterCriterions.module.css'
export default function FilterCriterions({showFilter,isFixed}) {
  return (
    <div className= {styles.container} style = {{flex: showFilter? '1 0 0' : '0 0 0'}}  >
      {[1,2,3,4,5,6,7,8,9,10].map(x =>
      <div className={styles.FilterCriterionItem}>{x}</div>)}
    </div>
  )
}
