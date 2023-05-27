import React from 'react'
import styles from './ItemCard.module.css'
import product from '../../assets/images/ProductImage/side-1.png'
import deleteBtn from '../../assets/images/delete-icon.png' 
import Logo from '../../Components/Logo/Logo'
import { covertCurrencyFormat } from '../../utils/currencyFortmat'
import { updateCartItem,deleteCartItem } from '../../store/actions/cartItem'
import { useSelector,useDispatch } from 'react-redux'
export default function ItemCard({itemInfo}) {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);
  const handleSelect = (e,id)=>{
    console.log("value là",e.target.value)
    dispatch(updateCartItem({id,quantity:parseInt(e.target.value)}))
  }
  const handleDeleteItem = (id)=>{
    dispatch(deleteCartItem(id));
  }
  return (
    <div className={styles.productCard} id = {itemInfo.id}>
    <div className={styles.item}>
    <div><img src={itemInfo.option?.straight_img_thumbnail}></img></div>
    <div className={styles.productInfo}>
        <div className={styles.productName}>{itemInfo.option?.product.name}</div>
        <div className={styles.productDescription}>
           <div>{itemInfo.option?.name}</div>
           <div> {itemInfo.material?.name}</div> 
           <div>{itemInfo.model?.name}</div> 
        <div className ={styles.quantitySelect}  style={{width:'200px'}}>
        <select value ={itemInfo.quantity}  onChange = {(value)=>{handleSelect(value,itemInfo.id)}}>
            {Array.from(Array(10).keys()).map(x => <option value={x+1}>{x+1}</option>)}
        </select>
        </div>
            </div>
    </div>
    </div>
    <div className={styles.rightcol}>
    <div className={styles.subtotal}>
    <div className={styles.price}>{itemInfo?.campaign!= 0 &&<div>{covertCurrencyFormat(itemInfo?.option.product.price*(1-itemInfo?.campaign.value/100))}</div>} <div style={{textDecoration:itemInfo?.campaign?'line-through':'none',color:itemInfo?.campaign?'gray':'black',margin:itemInfo?.campaign?'0px 10px':'' }}>{covertCurrencyFormat(itemInfo?.option.product.price)}</div></div>
    </div>
    <div style = {{display:'block',cursor:'pointer',width:'30px',margin: '0px 0px 50px 0px',flex:'0 0 0',width:'100%'}} onClick={()=>{handleDeleteItem(itemInfo.id)}}>
    <Logo src={deleteBtn} style ={{margin: '20px',float:'right',width:'30px'}} ></Logo>
    </div>
    </div>
</div>
  )
}