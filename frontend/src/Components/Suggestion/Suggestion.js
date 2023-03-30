import React from 'react'
import styles from './Suggestion.module.css'
import img from '../../assets/images/ProductImage/side-1.png'
export default function Suggestion() {
  return (
    <div><div style ={{fontSize:'25px',textAlign:'left',margin:'30px 0px 20px 10px'}}>Có thể bạn sẽ thích</div>
    <div className={styles.SuggestionContainer}>
        {[0,1,2,3,4].map(x=>
        (
            <div className={styles.cardItem}>
                <img src={img}></img>
                <div className ={styles.info}>
                <div className ={styles.name}>Unique case x Mẫu 01</div>
                <div className ={styles.price}>95000</div>
                </div>
            </div>
        ))}
    </div>
    </div>
  )
}
