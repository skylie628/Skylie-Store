import React, { useEffect } from 'react'
import styles from './SearchSuggestion.module.css'
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner'
import { useNavigate } from 'react-router-dom'
import Logo from '../Logo/Logo'
import hotSearch from '../../assets/images/hot-search-icon.png'
import { useDispatch } from 'react-redux'
import { filterByName } from '../../store/reducers/productQuerySlice'
import SuggestImage from '../../assets/images/ProductImage/1.png'
export default function SearchSuggestion({handleOutfocus,products,isLoading}) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
const handleSearch = (payload) =>{
dispatch(filterByName(payload));
handleOutfocus();
}
  return (
    <div className  = {styles.container}>
    <div className = {styles.searchSuggest}>
        <div  style = {{margin: '15px',alignSelf:'center',fontSize: '16px',color:'gray'}} >Có phải bạn muốn tìm</div>
        
        <div className={styles.searchRst}>
          <div style = {{display:'flex',flexDirection:'row',alignItems:'center'}}>
          <Logo src ={hotSearch} style={{width:'30px',margin:'10px'}}></Logo>
          <div style={{textAlign:'left',display:'block'}} onClick={()=>{handleSearch('messi')}}>Messi</div>
          </div>
          <div style = {{display:'flex',flexDirection:'row',alignItems:'center'}}>
          <Logo src ={hotSearch} style={{width:'30px',margin:'10px'}}></Logo>
          <div style={{textAlign:'left',display:'block'}} onClick={()=>{handleSearch('unique')}}>Ốp lưng độc đáo</div>
          </div>
          <div style = {{display:'flex',flexDirection:'row',alignItems:'center'}}>
          <Logo src ={hotSearch} style={{width:'30px',margin:'10px'}}></Logo>
          <div style={{textAlign:'left',display:'block'}} onClick={()=>{handleSearch('couple')}}>Ốp lưng cặp đôi</div>
          </div>
          </div>
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
