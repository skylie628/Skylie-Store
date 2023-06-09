import React from 'react'
import styles from './ItemCard.module.css'
import product from '../../../assets/images/ProductImage/side-1.png'
import { covertCurrencyFormat } from '../../../utils/currencyFortmat'
export default function ItemCard({itemInfo}) {
  return (
    <div className={styles.productCard}>
    <div className={styles.item}>
    <div><img src={itemInfo.option.straight_img_thumbnail}></img></div>
    </div>
    <div className={styles.productInfo}>
        <div className={styles.productName}>{itemInfo.option.product.name}</div>
        <div className={styles.productDescription}>
           <span>{itemInfo.option.name}, </span>
           <span> {itemInfo.material.name}, </span> 
           <span>{itemInfo.model.name}</span> 
            </div>
            <div style ={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
            <div className={styles.quantity}>x
    {itemInfo.quantity}
    </div>
    <div className={styles.subtotal}>
    <div className={styles.price}>{itemInfo?.campaign!= 0 &&<div>{covertCurrencyFormat(itemInfo?.option.product.price*(1-itemInfo?.campaign.value/100))}</div>} <div style={{textDecoration:itemInfo?.campaign?'line-through':'none',color:itemInfo?.campaign?'gray':'black' }}>{covertCurrencyFormat(itemInfo?.option.product.price)}</div></div>
    </div>
    </div>
    </div>
</div>
  )
}
