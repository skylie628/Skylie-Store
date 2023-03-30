import React from 'react'
import styles from './DetailedAlbum.module.css'
import ProductCard from './ProductCard';
import ShareLink from '../../assets/images/share-link-icon.png'
import Logo from '../../Components/Logo/Logo';

import { useNavigate } from 'react-router-dom';
import side1 from '../../assets/images/ProductImage/side-1.png'
export default function DetailedAlbum() {
    const ProductList =[
        {
            name: 'unique Case Mẫu 1',
            img : side1,
            price: '95000',
            option: 1,
            id: 1,

        },
        {
            name: 'unique Case Mẫu 1',
            img : side1,
            price: '95000',
            option: 1,
            id: 1,

        },
        {
            name: 'unique Case Mẫu 1',
            img : side1,
            price: '95000',
            option: 1,
            id: 1,

        },
    ];
    return (
    <div>
        <div className ={styles.header}>
        <div style={{fontSize: '35px', textAlign:'left', fontWeight:'600'}}>Unique Album.</div>
        <div style={{fontSize: '20px', textAlign:'left',color:'gray',fontWeight:'100'}}>Save & Share.</div>
        </div>
        {ProductList.map(x =><ProductCard Product = {x}/>)}
            <div style ={{fontSize: '25px'}}>Vẫn còn đang cân nhắc? Đừng ngại chia sẻ để nhận góp ý từ người thân và bạn bè.</div>
            <div><div className={styles.shareLinkBtn}><Logo src={ShareLink} style = {{width: '50px'}}/></div></div>
    </div>
  )
}
