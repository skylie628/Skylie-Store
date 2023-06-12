import React, { useEffect, useState } from 'react'
import styles from './SharedAlbum.module.css'
import ProductCard from './ProductCard';
import EmptyCard from '../../Components/EmptyCard/EmptyCard';
import HeaderNofify from '../../Components/MultipleNotify/HeaderNotify'
import { useNavigate,useParams } from 'react-router-dom';
import LoadingSpinner from '../../Components/LoadingSpinner/LoadingSpinner';
import { fetchSavedProductsByShareUrl } from '../../store/actions/savedProduct';
import { useDispatch, useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import actionTypes from '../../store/actions/actionTypes';
export default function SharedAlbum() {
    const {access_id} = useParams();
    const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 })
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {action} = useSelector(state => state.savedProduct);
    const savedProducts = useSelector(state => state.savedProduct).savedProducts;
    const getSavedProducts = async() =>{
        await dispatch(fetchSavedProductsByShareUrl({access_id}));
    }
    useEffect(()=>{
        if(action == actionTypes.GET_ALL_FAIL){
            navigate('../notfound')
        } 
    },[action])
    useEffect(()=>{
        getSavedProducts();
    },[])
    return (
    <div>
        
        <div className ={styles.header}>
        {action == actionTypes.DELETE_SUCCESS && <HeaderNofify style={{width:'100%'}} msg="Xóa sản phẩm khỏi album thành công"></HeaderNofify>}
        <div style={{fontSize: '35px', textAlign:'left', fontWeight:'600'}}>Album {savedProducts.name} .</div>
        <div style={{fontSize: '20px', textAlign:'left',color:'gray',fontWeight:'100'}}>Save & Share. by {savedProducts?.account?.lastname}.</div>
        </div>
        <LoadingSpinner overlay={{backgroundColor:'white'}} isLoading={action == actionTypes.DELETE}>
        {savedProducts&&(savedProducts?.savedProduct?.length == 0)&&<EmptyCard msg="Chưa có sản phẩm nào được lưu"></EmptyCard>}
        {savedProducts.savedProduct && savedProducts.savedProduct?.map(savedProduct =>{console.log('savedProduct là',savedProduct); return <ProductCard Product = {savedProduct}/>})}
        </LoadingSpinner>
    </div>
  )
}
