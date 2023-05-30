import React from 'react'
import deleteBtn from '../../assets/images/delete-icon.png' 
import Logo from '../../Components/Logo/Logo'
import styles from './ProductCard.module.css'
import { deleteSavedProducts } from '../../store/actions/savedProduct'
import { useDispatch,useSelector } from 'react-redux'
import actionTypes from '../../store/actions/actionTypes'
export default function ProductCard({Product}) {
  const dispatch = useDispatch();
  const deleteProduct = async()=>{
    await dispatch(deleteSavedProducts(Product.id))
  };

  return (
    <div className={styles.productCard}>
    <div className={styles.item}>
    <div><img src={Product?.product?.options.straight_img_thumbnail}></img></div>
    <div className={styles.productInfo}>
        <div style ={{color:'orange',fontSize: '25px'}}>Brand New</div>
        <div className={styles.productName}>{Product?.product?.name}</div>
        <div className={styles.productDescription}>
            <div style={{fontSize: '25px'}}>{Product?.product?.price}</div>
           <div>Option </div>
            </div>
            <div className ={styles.addToCartBtn} >
            Xem chi tiết
        </div>
    </div>
    </div>
    <div className={styles.rightcol}>
    <div style = {{width:'30px',margin: '0px 0px 50px 0px',flex:'0 0 0',width:'100%'}}>
    <Logo src={deleteBtn} style ={{margin: '20px',float:'right',width:'30px'}} onClick={deleteProduct}></Logo>
    </div>
    </div>
</div>
  )
}
