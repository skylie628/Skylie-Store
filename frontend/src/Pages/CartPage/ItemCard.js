import React from 'react'
import styles from './ItemCard.module.css'
import product from '../../assets/images/ProductImage/side-1.png'
import deleteBtn from '../../assets/images/delete-icon.png' 
import Logo from '../../Components/Logo/Logo'
export default function ItemCard() {
  return (
    <div className={styles.productCard}>
    <div className={styles.item}>
    <div><img src={product}></img></div>
    <div className={styles.productInfo}>
        <div className={styles.productName}>Unique Collection x Mẫu 1</div>
        <div className={styles.productDescription}>
           <div>Option 1</div>
           <div> Mirror</div> 
           <div>Samsung Galaxy S10</div> 
        <div className ={styles.quantitySelect}  style={{width:'200px'}}>
        <select>
            {Array.from(Array(10).keys()).map(x => <option value="1">{x+1}</option>)}
        </select>
        </div>
            </div>
    </div>
    </div>
    <div className={styles.rightcol}>
    <div className={styles.subtotal}>
    95.000 vnd
    </div>
    <div style = {{width:'30px',margin: '0px 0px 50px 0px',flex:'0 0 0',width:'100%'}}>
    <Logo src={deleteBtn} style ={{margin: '20px',float:'right',width:'30px'}} ></Logo>
    </div>
    </div>
</div>
  )
}