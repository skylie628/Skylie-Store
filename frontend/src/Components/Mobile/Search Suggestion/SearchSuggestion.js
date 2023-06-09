import React, { useEffect } from 'react'
import styles from './SearchSuggestion.module.css'
import LoadingSpinner from '../../LoadingSpinner/LoadingSpinner'
import { useNavigate } from 'react-router-dom'
import SuggestImage from '../../../assets/images/ProductImage/1.png'
export default function SearchSuggestion({products,isLoading}) {
  const navigate = useNavigate();

  return (
    <div className  = {styles.container}>
    <div className = {styles.searchSuggest}>
        <div  style = {{margin: '15px',alignSelf:'center',fontSize: '16px',color:'gray'}} >Có phải bạn muốn tìm</div>
        <div className={styles.searchRst}>Ốp Lưng Messi Mẫu 01</div>
        <div className={styles.searchRst}>Ốp Lưng Messi Mẫu 02</div>
        <div className={styles.searchRst}>Ốp Lưng Messi Mẫu 03</div>
    </div>
    <div className = {styles.imagesDescription}>
        <div className= {styles.gridContainer} >
        {isLoading&&<LoadingSpinner overlay={{backgroundColor: 'white',zIndex:0,height: '100%'}} isLoading ={isLoading}>
        </LoadingSpinner>}
        { !isLoading&&products.map(product =>
                <div className={styles.gridItem}>
                        <div className = {styles.squareImage} style ={{cursor:'pointer'}} onClick={()=>navigate(`../product/${product.slug}`)}>
                            <img src={product.options?.showing_img_thumbnail} width= '100%' className={styles.img}></img>
                            <div> {`${product.name.substring(0,20)}...`}</div>
                       </div>
                 </div>
                )}
        </div>
    </div>
</div>
  )
}
