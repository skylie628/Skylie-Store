import React from 'react'
import styles from './FilterCriterions.module.css'
import ColourCriterion from '../../Components/Filter Criterion/ColourCriterion'
import CollectionCriterion from '../../Components/Filter Criterion/CollectionCriterion'
import PriceCriterion from '../../Components/Filter Criterion/PriceCriterion'
export default function FilterCriterions({showFilter,isFixed}) {
  return (
    <div className= {styles.container} style = {{flex: showFilter? '1 0 0' : '0 0 0', minWidth: showFilter? '250px': '0px'}} >
      <CollectionCriterion></CollectionCriterion>
      <ColourCriterion></ColourCriterion>
      <PriceCriterion></PriceCriterion>
    </div>
  )
}
