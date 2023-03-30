import React from 'react'
import styles from './ItemCard.module.css'
import product from '../../assets/images/ProductImage/side-1.png'
export default function ItemCard() {
  return (
    <div className={styles.productCard}>
    <div className={styles.item}>
    <div><img src={product}></img></div>
    <div className={styles.productInfo}>
        <div className={styles.productName}>Unique case 1</div>
        <div className={styles.productDescription}>
           <div>Option 1</div>
           <div> Mirror</div> 
           <div>Samsung Galaxy SS10</div> 
            </div>
    </div>
    </div>
    <div className={styles.quantity}>
    1
    </div>
    <div className={styles.subtotal}>
    95000
    </div>
</div>
  )
}
