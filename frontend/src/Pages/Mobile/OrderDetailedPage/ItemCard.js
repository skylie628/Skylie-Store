import React from 'react'
import styles from './ItemCard.module.css'
import { useNavigate } from 'react-router-dom'
import product from '../../../assets/images/ProductImage/side-1.png'
import { covertCurrencyFormat } from '../../../utils/currencyFortmat'
export default function ItemCard({itemInfo}) {
  const navigate = useNavigate()
  return (
    <div className={styles.productCard}>
    <div className={styles.item} style ={{cursor:'pointer'}} onClick = {()=>navigate(`../product/${itemInfo.option.product.slug}`)}>
    <div style={{  margin: '20px 0px'}}><img src={itemInfo.option.straight_img_thumbnail}></img></div>
    <div className={styles.productInfo}>
        <div className={styles.productName}>{itemInfo.option.product.name}</div>
        <div className={styles.productDescription}>
           <span>{itemInfo.option.name}. </span>
           <span> {itemInfo.material.name}. </span> 
           <span>{itemInfo.model.name}. </span> 
            </div>

        <div style ={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
        <div className={styles.quantity}>
    x{itemInfo.quantity}
    </div>
    <div className={styles.subtotal}>
    <div className={styles.price}>{itemInfo?.saleCampaign &&<div>{covertCurrencyFormat(itemInfo?.option.product.price*(1-itemInfo?.saleCampaign.value/100))}</div>} <div style={{textDecoration:itemInfo?.saleCampaign?'line-through':'none',color:itemInfo?.campaign?'gray':'black' }}>{covertCurrencyFormat(itemInfo?.option.product.price)}</div></div>
    </div>
        </div>
    </div>
    </div>
</div>
  )
}
