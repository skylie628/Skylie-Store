import React from 'react'
import styles from './ItemCard.module.css'
import { useNavigate } from 'react-router-dom'
import product from '../../assets/images/ProductImage/side-1.png'
import { covertCurrencyFormat } from '../../utils/currencyFortmat'
export default function ItemCard({itemInfo}) {
  const navigate = useNavigate()
  return (
    <div className={styles.productCard}>
    <div className={styles.item} style ={{cursor:'pointer'}} onClick = {()=>navigate(`../product/${itemInfo.option.product.slug}`)}>
    <div><img src={itemInfo.option.straight_img_thumbnail}></img></div>
    <div className={styles.productInfo}>
        <div className={styles.productName}>{itemInfo.option.product.name}</div>
        <div className={styles.productDescription}>
           <div>{itemInfo.option.name}</div>
           <div> {itemInfo.material.name}</div> 
           <div>{itemInfo.model.name}</div> 
            </div>
    </div>
    </div>
    <div className={styles.quantity}>
    {itemInfo.quantity}
    </div>
    <div className={styles.subtotal}>
    <div className={styles.price}>{itemInfo?.saleCampaign &&<div>{covertCurrencyFormat(itemInfo?.option.product.price*(1-itemInfo?.saleCampaign.value/100))}</div>} <div style={{textDecoration:itemInfo?.saleCampaign?'line-through':'none',color:itemInfo?.campaign?'gray':'black' }}>{covertCurrencyFormat(itemInfo?.option.product.price)}</div></div>
    </div>
</div>
  )
}
