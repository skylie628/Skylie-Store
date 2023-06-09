import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './ItemCard.module.css'
import { covertCurrencyFormat } from '../../../utils/currencyFortmat';
const slugify = require('slugify')
export default function ItemCard({id,best_sale,name,options,sales,price,campaign}) {
  const navigate = useNavigate();
  return (
    <div className = {styles.card} onClick ={()=>navigate(`../product/${slugify(name)}`)}>
    <div className ={styles.square}>
        <img src ={options.showing_img_thumbnail} ></img>
    </div>
    <div className={styles.description}>
    {campaign!=0 &&<div style ={{display:'flex',flexDirection:'column'}}>
       <div className ={styles.percentSale}>{campaign.value}% Off</div>
        <div className ={styles.campaignName}><div>{campaign.name}</div></div>
        </div>}
        <div className ={styles.hotTag}>{best_sale?'Best Sales':''}</div>
        <div className={styles.name}> {name}</div>
        <div className={styles.option}>1 Option</div>
        <div className={styles.sold}> {sales} đã bán</div>
        <div className={styles.price}>{campaign!= 0 &&<span>{covertCurrencyFormat(price*(1-campaign.value/100))}</span>} <span style={{textDecoration:campaign?'line-through':'none',color:campaign?'gray':'black',margin:campaign?'0px 10px':'' }}>{covertCurrencyFormat(price)}</span></div>
    </div>
    </div>
  )
}
