import React, { useEffect,useState } from 'react'
import productSide3 from '../../assets/images/product3.png'
import productSide4 from '../../assets/images/product4.png'
import styles from './ProductImages.module.css'
import { useSelector } from 'react-redux'
export default function ProductImages() {
    let productImages = useSelector(state => state.productDetail).productDetail;
    const [showingImage,setShowingImage] = useState('');
    const [images,setImages] = useState({});
    useEffect(()=>{
      productImages.options.length >0 &&setImages(productImages.options[0]);
      productImages.options.length >0 &&setShowingImage(productImages.options[0].straight_img)
    },[productImages])
    useEffect(()=>{
      console.log('image là',images)
    },[images])
    const changeImage = (img) => {
        setShowingImage(img.target.src)
    }
  return (
    <div className ={styles.images}>
    <div className = {styles.stickyEle}>
    <div className={styles.thumbnail}>
     <div className = {styles.thumbnailImg}>
        <img  src={images.straight_img_thumbnail} style={{width : '100%'}} onClick = {()=>{ setShowingImage(images.straight_img)}}>
        </img>
    </div>   
     <div className = {styles.thumbnailImg}>
     <img src={images.side_img_thumbnail} style={{width : '100%'}} onClick = {()=>{setShowingImage(images.side_img)}}></img>
     </div>   
     <div className = {styles.thumbnailImg}>
     <img src={productSide3} style={{width : '100%'}} onClick = {(img)=>{changeImage(img)}}></img>
    </div>   
     <div className = {styles.thumbnailImg}>
     <img src={productSide4} style={{width : '100%'}} onClick = {(img)=>{changeImage(img)}}></img>
    </div>   
    </div>
    <div className={styles.productImage}>
        <img className = {styles.showingImg} src={showingImage} style={{height:'100%',objectFit:'cover',cursor:'pointer',transition:'1s ease-in-out'}}></img>
    </div>
    </div>
</div>
  )
}
