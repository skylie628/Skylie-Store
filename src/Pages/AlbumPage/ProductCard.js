import React from 'react'
import deleteBtn from '../../assets/images/delete-icon.png' 
import Logo from '../../Components/Logo/Logo'
import styles from './ProductCard.module.css'
export default function ProductCard({Product}) {
  return (
    <div className={styles.productCard}>
    <div className={styles.item}>
    <div><img src={Product.img}></img></div>
    <div className={styles.productInfo}>
        <div style ={{color:'orange',fontSize: '25px'}}>Brand New</div>
        <div className={styles.productName}>{Product.name}</div>
        <div className={styles.productDescription}>
            <div style={{fontSize: '25px'}}>{Product.price}</div>
           <div>Option {Product.option}</div>
            </div>
            <div className ={styles.addToCartBtn} >
            Xem chi tiết
        </div>
    </div>
    </div>
    <div className={styles.rightcol}>
    <div style = {{width:'30px',margin: '0px 0px 50px 0px',flex:'0 0 0',width:'100%'}}>
    <Logo src={deleteBtn} style ={{margin: '20px',float:'right',width:'30px'}} ></Logo>
    </div>
    </div>
</div>
  )
}
