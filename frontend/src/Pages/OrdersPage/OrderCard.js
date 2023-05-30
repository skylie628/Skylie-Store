import React from 'react'
import styles from './OrderCard.module.css'
import product from '../../assets/images/ProductImage/side-1.png'
import { useNavigate } from 'react-router-dom'
import { covertCurrencyFormat } from '../../utils/currencyFortmat'
export default function OrderCard({order,deleteOrder}) {
   const navigate = useNavigate();
  return (

    <div className ={styles.container} key = {order.id}>
      <div className ={styles.header}>
      <div>{order.createdAt}</div>
      <div>{order.status}</div>
      </div>
    {order?.orderItem.map(orderItem=>
         <div className={styles.productCard} onClick={()=>navigate(`./${order.id}`)}>
         <div className={styles.item}>
         <div><img src={orderItem.option.straight_img_thumbnail}></img></div>
         <div className={styles.productInfo}>
             <div className={styles.productName}>{orderItem.option.product.name}</div>
             <div className={styles.productDescription}>
                <span>{orderItem.option.name}. </span>
                <span> {orderItem.material.name}. </span> 
                <span>{orderItem.model.name}. </span> 
                <div className={styles.quantity}>x{orderItem.quantity}</div>
                 </div>
         </div>
         </div>
         <div className={styles.subtotal}>
         {orderItem?.campaign_id&&<div>{covertCurrencyFormat(orderItem?.option.product.price*(1-orderItem?.saleCampaign.value/100))}</div>} <div style={{textDecoration:orderItem?.campaign_id?'line-through':'none',color:orderItem?.campaign_id?'gray':'black' }}>{covertCurrencyFormat(orderItem?.option.product.price)}</div>
         </div>
     </div>
     )}
<div style ={{textAlign:'right', fontSize:'18px'}}>{covertCurrencyFormat(order.total_price)} </div>
{order.status =='Created'&&<div className ={styles.deletebtn} onClick={()=>deleteOrder(order.id)}><div>Hủy</div></div>}
<div style={{clear:'both'}}></div>
</div>
  )
}