import React, { useLayoutEffect, useRef } from 'react'
import styles from './ItemList.module.css'
import ItemCard from '../../../Components/Mobile/Item Card/ItemCard'
import ProductImage from '../../../assets/images/ProductImage/1.png'
import { resetQuery } from '../../../store/reducers/productQuerySlice'
import LoadingSpinner from '../../../Components/LoadingSpinner/LoadingSpinner.js';
import { useEffect, useState } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { getProducts,ResetError } from '../../../store/actions/product'
import { resetProducts } from '../../../store/reducers/productSlice';
import { useNavigate } from 'react-router-dom'
import EmptyCard from '../../../Components/EmptyCard/EmptyCard'
import ProductPage from '../../ProductPage/ProductPage'
export default function ItemsList({fetchFilter,setFetchFilter}) {
    const [isFetching, setIsFetching] = useState(false);
    const [offset,setOffset] = useState(0);
    const offsetRef  = useRef(offset);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const products = useSelector(state => state.product).products;
    const maxCount = useSelector(state => state.product).maxCount;
    const productQuery = useSelector(state=>state.productQuery);
  
    const fetchProducts =async (payload) =>{
      setTimeout(() => {
      const products = dispatch(getProducts({offset:payload.offset,...productQuery}));
      setIsFetching(false);
      console.log('product sau khi get là',products);
      },2000)
      setOffset(prev => prev+1);
      return products;
    }
    function handleScroll() {
      console.log('offset là',offset);
      if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight ) return;
      (offsetRef.current !== -1) && setIsFetching(true);
    }
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      dispatch(resetProducts({data:null}))
      setIsFetching(true);
      setOffset(0);
      setFetchFilter(false);
      return () => {window.removeEventListener('scroll', handleScroll);dispatch(ResetError());};
    }, []);
    useLayoutEffect(()=>{
      console.log('call from isFetchingchange')
      if (!isFetching) return;
      fetchProducts({offset});
      return ()=>{dispatch(ResetError())}
     },[isFetching])

     useEffect(()=>{
      if((offset-1)*9>maxCount){
        setOffset(prev=>-1)
      }
      offsetRef.current = offset
     },[offset])
     useLayoutEffect(()=>{
      console.log('call from query')
      if(fetchFilter){
      dispatch(resetProducts({data:null}))
      setIsFetching(true);
      setOffset(0);
      setFetchFilter(false);

    }
      return ()=>{dispatch(ResetError())}
     },[fetchFilter])

    const itemCount = products.length;
    const row  = Math.ceil(products.length/2);
    const itemPerRow = 2;
  return (
    <div style = {{flex: '2 0 0', backgroundColor : 'white',height:'100%',transition:'0.5 ease-in-out'}}>
    {Array.from(Array(row).keys()).map(x =>
        <div style ={{display:'flex',flexWrap: 'wrap'}}>
        {Array.from(Array(itemPerRow).keys()).map(y =>
                (x*itemPerRow + y > itemCount-1)? '':<ItemCard className={styles.square}  {...products[x*itemPerRow + y]}/>)
        }
        </div>    
            )}
        {products.length == 0 && !isFetching &&
        <EmptyCard style ={{margin:0}} msg="Không có sản phẩm nào phù hợp với tiêu chí tìm kiếm"></EmptyCard>
        }
    {isFetching && <LoadingSpinner overlay={{backgroundColor: 'white',zIndex:0}} isLoading ={isFetching}>
    <div style ={{height:'200px'}}>
    </div>
    </LoadingSpinner>}
    </div>
  )
}
