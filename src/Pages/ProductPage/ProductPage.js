import React, { useState,useRef } from 'react'
import styles from '../ProductPage/ProductPage.module.css'
import ProductImage from '../../assets/images/ProductImage/1.png'
import side1 from '../../assets/images/ProductImage/side-1.png'
import side2 from '../../assets/images/ProductImage/side-2.png'
import productSide3 from '../../assets/images/product-side3.png'
import productSide4 from '../../assets/images/product-side4.png'
import GlassIcon from '../../assets/images/Material Icon/glasscase-icon.png'
import MirrorIcon from '../../assets/images/Material Icon/mirrorcase-icon.png'
import TransSilIcon from '../../assets/images/Material Icon/transparent-silicon-icon.png'
import BlackSilIcon from '../../assets/images/Material Icon/black-silicon-icon.png'
import ThreeDIcon from '../../assets/images/Material Icon/3dcase-icon.png'
export default function ProductPage() {
    const [showingImage,setShowingImage] = useState(side1);
    const changeImage = (img) => {
        setShowingImage(img.target.src)
    }
  return (
    <div>
    <div className={styles.container}>
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
    <div className ={styles.information}>
        <div className={styles.hotTag}>New Comming</div>
        <div className={styles.name}>Unique Collection x mẫu 01</div>
        <div className={styles.price}>95.000 vnd</div>
        <div className={styles.materialsSelection}>
            <div className ={styles.materialsImg}>
                <img src = {GlassIcon} style={{width:'100%'}}></img>
                <span>Nano </span><span>Glass</span>
            </div>
            <div className ={styles.materialsImg}>
                <img src = {MirrorIcon} style={{width:'100%'}}></img>
                <span>Mirror</span>
            </div>
            <div className ={styles.materialsImg}>
                <img src = {TransSilIcon} style={{width:'100%'}}></img>
                <span>Alpha </span><span>Silicon</span>
            </div>
            <div className ={styles.materialsImg}>
                <img src = {BlackSilIcon} style={{width:'100%'}}></img>
                <span>Black</span><span> Silicon</span>
            </div>
            <div className ={styles.materialsImg}>
                <img src = {ThreeDIcon} style={{width:'100%'}}></img>
                <span>3D</span>
            </div>
        </div>
        <div style ={{margin: '30px',fontSize: '12x', display:'block',float:'right'}}><a style={{textDecoration:'none'}} href="#">Tư vấn cho mình về chất liệu ốp</a></div>
    </div>
    </div>
    <div style={{position:'relative',height: '300px'}}></div>
    </div>
  )
}
