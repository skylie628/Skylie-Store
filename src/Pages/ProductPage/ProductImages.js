import React from 'react'
import side1 from '../../assets/images/ProductImage/side-1.png'
import side2 from '../../assets/images/ProductImage/side-2.png'
import productSide3 from '../../assets/images/product-side3.png'
import productSide4 from '../../assets/images/product-side4.png'
import styles from './ProductImages.module.css'
export default function ProductImages({showingImage,setShowingImage}) {
    const changeImage = (img) => {
        setShowingImage(img.target.src)
    }
  return (
    <div className ={styles.images}>
    <div className = {styles.stickyEle}>
    <div className={styles.thumbnail}>
     <div className = {styles.thumbnailImg}>
        <img src={side1} style={{width : '100%'}} onClick = {(img)=>{changeImage(img)}}>
        </img>
    </div>   
     <div className = {styles.thumbnailImg}>
     <img src={side2} style={{width : '100%'}} onClick = {(img)=>{changeImage(img)}}></img>
     </div>   
     <div className = {styles.thumbnailImg}>
     <img src={productSide3} style={{width : '100%'}} onClick = {(img)=>{changeImage(img)}}></img>
    </div>   
     <div className = {styles.thumbnailImg}>
     <img src={productSide4} style={{width : '100%'}} onClick = {(img)=>{changeImage(img)}}></img>
    </div>   
    </div>
    <div className={styles.productImage}>
        <img src={showingImage} style={{height:'100%',objectFit:'cover'}}></img>
    </div>
    </div>
</div>
  )
}
