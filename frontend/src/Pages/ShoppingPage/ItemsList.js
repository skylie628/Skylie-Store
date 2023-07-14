import React, { useLayoutEffect, useRef } from 'react'
import styles from './ItemList.module.css'
import ItemCard from '../../Components/Item Card/ItemCard'
import LoadingSpinner from '../../Components/LoadingSpinner/LoadingSpinner.js';
import { useEffect, useState } from 'react'
import actionTypes from '../../store/actions/actionTypes';
import { useDispatch,useSelector } from 'react-redux'
import { getProducts,ResetError } from '../../store/actions/product'
import { resetProducts } from '../../store/reducers/productSlice';
import EmptyCard from '../../Components/EmptyCard/EmptyCard';
import { useNavigate } from 'react-router-dom'
export default function ItemsList() {
    const [isFetching, setIsFetching] = useState(false);
    const [offset,setOffset] = useState(0);
    const offsetRef  = useRef(offset);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const products = useSelector(state => state.product).products;
    const action = useSelector(state => state.product).action;
    const maxCount = useSelector(state => state.product).maxCount;
    const productQuery = useSelector(state=>state.productQuery);
  
    const fetchProducts =async (payload) =>{
      setTimeout(() => {
      const products = dispatch(getProducts({offset:payload.offset,...productQuery}));
      setIsFetching(false);
      console.log('product sau khi get là',products);
      },1000)
      setOffset(prev => prev+1);
      return products;
    }
    function handleScroll() {
      if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight ) return;
      (offsetRef.current !== -1) && setIsFetching(true);
    }
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
      window.removeEventListener('scroll', handleScroll);
      dispatch(ResetError());};
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
      dispatch(resetProducts({data:null}))
      setIsFetching(true);
      setOffset(0);
      return ()=>{dispatch(ResetError())}
     },[productQuery])

    const itemCount = products.length;
    const row  = Math.ceil(products.length/3);
    const itemPerRow = 3;
  return (
    <div style = {{flex: '4 0 0', backgroundColor : 'white',height:'100%',transition:'0.5 ease-in-out'}}>
    {Array.from(Array(row).keys()).map(x =>
        <div style ={{display:'flex',flexWrap: 'wrap'}}>
        {Array.from(Array(itemPerRow).keys()).map(y =>
                (x*itemPerRow + y > itemCount-1)? '':<ItemCard className={styles.square}  {...products[x*itemPerRow + y]}/>)
        }
        </div>    
            )}
        {products.length == 0 && !isFetching && action === actionTypes.GET_ALL_SUCCESS && 
        <EmptyCard msg="Không có sản phẩm nào phù hợp với tiêu chí tìm kiếm"></EmptyCard>
        }
    {isFetching && <LoadingSpinner overlay={{backgroundColor: 'white',zIndex:0}} isLoading ={isFetching}>
    <div style ={{height:'200px'}}>
    </div>
    </LoadingSpinner>}
    </div>
  )
}
