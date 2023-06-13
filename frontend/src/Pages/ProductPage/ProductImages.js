import React, { useEffect,useState } from 'react'
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
     <img src="https://firebasestorage.googleapis.com/v0/b/skylie-store.appspot.com/o/Products%2Fside%20product%2Fproduct3.png?alt=media&token=4742a268-8e07-496c-8e20-c77fe3b5409b&_gl=1*1kehdip*_ga*MTg3ODkxNTgyNC4xNjgyNDg0MzQ3*_ga_CW55HF8NVT*MTY4NjYzNTY4Mi41LjEuMTY4NjYzNTkwMC4wLjAuMA.." style={{width : '100%'}} onClick = {(img)=>{changeImage(img)}}></img>
    </div>   
     <div className = {styles.thumbnailImg}>
     <img src="https://firebasestorage.googleapis.com/v0/b/skylie-store.appspot.com/o/Products%2Fside%20product%2Fproduct4.png?alt=media&token=bf9437a4-dfde-41f7-bf7f-578765ec2846&_gl=1*1vyaz8o*_ga*MTg3ODkxNTgyNC4xNjgyNDg0MzQ3*_ga_CW55HF8NVT*MTY4NjYzNTY4Mi41LjEuMTY4NjYzNTgxOS4wLjAuMA.." style={{width : '100%'}} onClick = {(img)=>{changeImage(img)}}></img>
    </div>   
    </div>
    <div className={styles.productImage}>
        <img className = {styles.showingImg} src={showingImage} style={{height:'100%',objectFit:'cover',cursor:'pointer',transition:'1s ease-in-out'}}></img>
    </div>
    </div>
</div>
  )
}
