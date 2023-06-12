import React from 'react'
import deleteBtn from '../../assets/images/delete-icon.png' 
import Logo from '../../Components/Logo/Logo'
import styles from './ProductCard.module.css'
import { deleteSavedProducts } from '../../store/actions/savedProduct'
import { useDispatch} from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useMediaQuery } from 'react-responsive'
export default function ProductCard({Product}) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 })
  const deleteProduct = async()=>{
    await dispatch(deleteSavedProducts(Product.id))
  };

  return (
    <div className={styles.productCard} style ={{flexDirection: isTabletOrMobile?'column':'row'}}>
    <div className={styles.item} style ={{flexDirection: isTabletOrMobile?'column':'row'}}>
    <div style ={{cursor:'pointer'}} onClick={()=>navigate(`../product/${Product?.product?.slug}`)}><img style ={{width:isTabletOrMobile?'80%':'300px'}} src={Product?.product?.options.straight_img_thumbnail}></img></div>
    <div className={styles.productInfo}>
        <div style ={{color:'orange',fontSize: isTabletOrMobile?'20px':'25px'}}>Brand New</div>
        <div className={styles.productName}  style= {{fontSize: isTabletOrMobile?'22px':'30px'}}>{Product?.product?.name}</div>
        <div className={styles.productDescription} style= {{fontSize: isTabletOrMobile?'15px':''}}>
            <div style={{fontSize: '25px'}}>{Product?.product?.price}</div>
           <div>1 Option </div>
            </div>
    </div>
    </div>
</div>
  )
}
