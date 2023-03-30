import React from 'react'
import styles from './SearchSuggestion.module.css'
import SuggestImage from '../../assets/images/ProductImage/1.png'
export default function SearchSuggestion() {
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
                <div className={styles.gridItem}>
                    <div className = {styles.squareImage}>
                        <img src={SuggestImage} width= '100%' className={styles.img}></img>
                        <div> Ốp lưng Messi 01</div>
                   </div>
                </div>
                <div className={styles.gridItem}>
                <div className = {styles.squareImage}>
                        <img src={SuggestImage} width= '100%' className={styles.img}></img>
                        <div> Ốp lưng Messi 01</div>
                    </div>
                </div>
                <div className={styles.gridItem}>
                <div className = {styles.squareImage}>
                        <img src={SuggestImage} width= '100%' className={styles.img}></img>
                        <div> Ốp lưng Messi 01</div>
                    </div>
                </div>
                <div className={styles.gridItem}>
                <div className = {styles.squareImage}>
                        <img src={SuggestImage} width= '100%' className={styles.img}></img>
                        <div> Ốp lưng Messi 01</div>
                    </div>
                </div>
                <div className={styles.gridItem}>
                <div className = {styles.squareImage}>
                        <img src={SuggestImage} width= '100%' className={styles.img}></img>
                        <div> Ốp lưng Messi 01</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
