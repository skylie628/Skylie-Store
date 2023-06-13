import React, { useEffect, useState } from 'react'
import styles from './DetailedAlbum.module.css'
import ProductCard from './ProductCard';
import ShareLink from '../../assets/images/share-link-icon.png'
import Logo from '../../Components/Logo/Logo';
import EmptyCard from '../../Components/EmptyCard/EmptyCard';
import HeaderNofify from '../../Components/MultipleNotify/HeaderNotify'
import { useNavigate,useParams } from 'react-router-dom';
import { apiGetShareUrl } from '../../services/savedAlbum';
import LoadingSpinner from '../../Components/LoadingSpinner/LoadingSpinner';
import { fetchSavedProducts } from '../../store/actions/savedProduct';
import { useDispatch, useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import actionTypes from '../../store/actions/actionTypes';
export default function DetailedAlbum() {
    const {id} = useParams();
    const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 })
    const [showPopup,setShowPopUp] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {action} = useSelector(state => state.savedProduct);
    const savedProducts = useSelector(state => state.savedProduct).savedProducts;
    const handleCopyLink = async() =>{
     await apiGetShareUrl({ids: id}).then(rs => {
        rs.access_id&&navigator.clipboard.writeText(`${window.location.origin.toString()}/shared/${rs.access_id}`)
        rs.access_id&&setShowPopUp(true)
    })

     //  setSharedUrl(`./shared/${rs.access_id}`)
    }
    useEffect(()=>{
        if(showPopup){
            setTimeout(()=>{setShowPopUp(false)},3000)
        }
    },[showPopup])
    const getSavedProducts = async() =>{
        await dispatch(fetchSavedProducts(id));
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
        
        <div >
        {action == actionTypes.DELETE_SUCCESS && <HeaderNofify style={{width:'100%'}} msg="Xóa sản phẩm khỏi album thành công"></HeaderNofify>}
        <div style={{fontSize: '35px', textAlign:'left', fontWeight:'600'}}>{savedProducts.name} Album.</div>
        <div style={{fontSize: '20px', textAlign:'left',color:'gray',fontWeight:'100'}}>Save & Share.</div>
        </div>
        <LoadingSpinner overlay={{backgroundColor:'white'}} isLoading={action == actionTypes.DELETE}>
        {savedProducts&&(savedProducts?.savedProduct?.length == 0)&&<EmptyCard msg="Chưa có sản phẩm nào được lưu"></EmptyCard>}
        {savedProducts.savedProduct && savedProducts.savedProduct?.map(savedProduct =>{console.log('savedProduct là',savedProduct); return <ProductCard Product = {savedProduct}/>})}
        </LoadingSpinner>
       {  savedProducts&&(savedProducts.savedProduct?.length >0)&& <div style ={{position:'relative'}}>
                <div style ={{fontSize: isTabletOrMobile?'20px':'25px',margin:'20px'}}>Vẫn còn đang cân nhắc? Đừng ngại chia sẻ để nhận góp ý từ người thân và bạn bè.</div>
            {showPopup&&<div className ={styles.successPopup} style ={{position:'absolute',padding:'15px',backgroundColor:'black',color:'white', cursor:'pointer'}}>Copy thành công</div>}
            <div><div className={styles.shareLinkBtn}><Logo src={ShareLink} style = {{width: '40px'}} onClick={handleCopyLink}/></div></div></div>}
    </div>
  )
}
