import React from 'react'
import styles from './ItemList.module.css'
import ItemCard from '../../Components/Item Card/ItemCard'
import ProductImage from '../../assets/images/ProductImage/1.png'
import { useNavigate } from 'react-router-dom'
import ProductPage from '../ProductPage/ProductPage'
export default function ItemsList() {
    const navigate = useNavigate();
    const itemList =  [0,1,2,3,4,5,6,7].map(x =>({
        id : x,
        src: ProductImage,
        name: 'Unique mẫu 1 ',
        hotTag: "Best Seller",
        option: 2,
        sold: 245,
        price: '95000'
    }))
    const itemCount = itemList.length;
    const row  = Math.ceil(itemList.length/3);
    const itemPerRow = 3;
  return (
    <div style = {{flex: '4 0 0', backgroundColor : 'white',height:'100%',transition:'0.5 ease-in-out'}}>
    {Array.from(Array(row).keys()).map(x =>
        <div style ={{display:'flex',flexWrap: 'wrap'}}>
        {Array.from(Array(itemPerRow).keys()).map(y =>
                (x*itemPerRow + y > itemCount-1)? '':<ItemCard className={styles.square}  {...itemList[x*itemPerRow + y]}/>)
        }
        </div>    
            )}
    </div>
  )
}
