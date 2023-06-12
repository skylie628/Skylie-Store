import React, { useEffect, useState } from 'react'
import styles from './Suggestion.module.css'
import { useNavigate } from 'react-router-dom'
import slugify from 'slugify'
import { useMediaQuery } from 'react-responsive'
import { apiGetRecommendProducts } from '../../services/product'
import { covertCurrencyFormat } from '../../utils/currencyFortmat'
export default function Suggestion() {
  const [products,setProducts] = useState([]);
  const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 });
  const navigate = useNavigate()
  const getRecommend = async () =>{
    const rs = await apiGetRecommendProducts()
    setProducts(rs.data.products);
    console.log('suggest',rs)
  }
  useEffect(()=>{
    getRecommend()
  },[])
  return (
    <div><div style ={{fontSize:'25px',textAlign:'left',margin:'30px 0px 20px 10px'}}>Có thể bạn sẽ thích</div>
    <div className={styles.SuggestionContainer}>
        {products.map(product=>
        (
            <div className={styles.cardItem} onClick ={()=>navigate(`../product/${slugify(product.name)}`)}>
                <img src={product.options.showing_img_thumbnail}></img>
                <div className ={styles.info}>
                {product.campaign!=0 &&<div style ={{display:'flex',flexDirection:'column'}}>
       <div className ={styles.percentSale}>{product.campaign.value}% Off</div>
        <div className ={styles.campaignName}><div>{product.campaign.name}</div></div>
        </div>}
        <div className ={styles.hotTag}>{product.best_sale?'Best Sales':''}</div>

                <div className ={styles.name} style ={{fontSize:isTabletOrMobile?'16px':'18px',fontWeight:'bold'}}>{product.name}</div>
                <div className={styles.price}>{product.campaign!= 0 &&<span>{covertCurrencyFormat(product.price*(1-product.campaign.value/100))}</span>} <span style={{textDecoration:product.campaign?'line-through':'none',color:product.campaign?'gray':'black',margin:product.campaign?'0px 10px':'' }}>{covertCurrencyFormat(product.price)}</span></div>
                </div>
            </div>
        ))}
    </div>
    </div>
  )
}
