import React, { useState,useRef, useEffect,useDeferredValue } from 'react'
import styles from '../ProductPage/ProductPage.module.css'
import CheckoutModal from './CheckoutModal'
import ProductImages from './ProductImages'
import OptionSelection from './OptionSelection'
import Button from '../../Components/ClassicButton/Button'
import { Suspense } from 'react'
import MaterialSelection from './MaterialSelection'
//import Comment from './Comment'
import { covertCurrencyFormat } from '../../utils/currencyFortmat'
import BrandMenu from '../../Components/Brand Menu/BrandMenu'
import ShowHideLayout from '../../Components/Show Hide Layout/ShowHideLayout'
import SimpleItemList from '../../Components/Simple Item List/SimpleItemList'
import Suggestion from '../../Components/Suggestion/Suggestion'
import AddAlbumModal from './AddAlbumModal'
import LoadingSpinner from '../../Components/LoadingSpinner/LoadingSpinner'
import { apiGetModel, apiGetSeries } from '../../services/phone'
import { getProductDetail } from '../../store/actions/productDetail'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import AlbumSelection from './AlbumSelection'
import {gsap} from 'gsap';
import { ResetProduct } from '../../store/actions/productDetail'
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { useParams } from 'react-router-dom'
import { getCartId,fetchCartItem, addCartItem } from '../../store/actions/cartItem'
import { ResetState } from '../../store/actions/comment'
import actionTypes from '../../store/actions/actionTypes'
import HeaderNofify from '../../Components/MultipleNotify/HeaderNotify'
const Comment = React.lazy(() => import('./Comment'));
export default function ProductPage() {
    gsap.registerPlugin(ScrollToPlugin);
    const brandMenu = useRef();
    const [selectedMaterial,setSelectedMaterial] = useState(-1);
    // state: notActive ---> notTouched ---> Touched
    const [stateMaterialMenu,setStateMaterialMenu] = useState('notTouched');
    const [selectedBrand,setSelectedBrand] = useState(-1);
    const [stateBrandMenu,setStateBrandMenu] = useState('notActive');
    const [selectedModel,setSelectedModel] = useState(false);
    const [selectedSeries,setSelectedSeries] = useState(false);
    const [stateSeries,setStateSeries] = useState('notActive');
    const [stateModel,setStateModel] = useState('notActive');
    const userInfo = useSelector(state => state.user).userInfo;
    const cart = useSelector(state => state.cart);
    const [stateCheckoutBtn,setStateCheckoutBtn] = useState('notActive');
    const [selectedOption,setSelectedOption] = useState(0);
    const [checkoutModal,setCheckoutModal] = useState(false);
    const [listSeries,setListSeries] = useState([]);
    const [listModels,setListModels] = useState([]);
    const [stateAddAlbumModal,setStateAddAlbumModal] = useState(false);
    const [stateSavedProductModal,setStateSavedProductModal] = useState(false);
    const [productDetail,setProductDetail] = useState({});
    const {slug} = useParams();
    const [showsigninNotify,setShowSigninNotify] = useState(false) 
    const deferredshowsigninNotify = useDeferredValue(showsigninNotify);
    const productInfo = useSelector(state=>state.productDetail).productDetail;
    const action = useSelector(state=>state.productDetail).action;
    const actionProductDetail = useSelector(state=>state.productDetail).action;
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const addTocart = async ()=>{
        setCheckoutModal(true);
        console.log('aaaa');
        const shouldadd = cart.cartId && selectedModel && selectedMaterial && selectedOption;
        console.log(cart.cartId , selectedModel, selectedMaterial , selectedOption)
        shouldadd && dispatch(addCartItem({
            cart_id:cart.cartId.id,
            model_id: selectedModel,
            material_id: selectedMaterial,
            productoption_id: selectedOption,
        }))
    }
    const addToWishlist = async () =>{
        if(userInfo){
        setStateSavedProductModal(true);
        }
        else{
            setShowSigninNotify(true);
            setTimeout(()=>{setShowSigninNotify(false)},3000)
        }
    }
    const fetchDetail = async() => {
        console.log('fetchDetail run')
         dispatch(getProductDetail(slug));
    }

    useEffect(()=>{
        if(stateMaterialMenu == 'Touched'){
         gsap.to(window,{duration:1,scrollTo:{y:'#brandMenu',offsetY:300}}); 
         setStateBrandMenu('notTouched')
        }
    },[stateMaterialMenu])
    useEffect(()=>{

        cart.cartId&&dispatch(fetchCartItem(cart.cartId.id));
    },[cart.cartId])
    useEffect(()=>{
        userInfo&&dispatch(getCartId(userInfo.id));
    },[])
    useEffect(()=>{
        if(action == actionTypes.GET_ALL_FAIL){
            navigate('../notfound')
        }
    },[action])
    useEffect(()=>{
        if(stateBrandMenu == 'Touched'){
         gsap.to(window,{duration:1,scrollTo:{y:'#Series',offsetY:300}}); 
         setStateSeries('notTouched')
        }
    },[stateBrandMenu])
    useEffect(()=>{
        if(stateSeries == 'Touched'){
         gsap.to(window,{duration:1,scrollTo:{y:'#Models',offsetY:300}}); 
         setStateModel('notTouched')
        }
    },[stateSeries])
    useEffect(()=>{
        if(stateModel == 'Touched'){
         gsap.to(window,{duration:1,scrollTo:{y:'#checkoutBtn',offsetY:300}}); 
         setStateCheckoutBtn('notTouched')
        }
    },[stateModel])

    useEffect(()=>{
       selectedBrand !== false && setListModels([])
       selectedBrand !== false && apiGetSeries(selectedBrand).then(rst=>{console.log(rst.data);setListSeries(rst.data||[]);if(rst.data.length ==1){setSelectedSeries(rst.data[0].id);setStateSeries('Touched')}});
    },[selectedBrand])
    useEffect(()=>{
        selectedSeries !== false && apiGetModel(selectedSeries).then(rst=>{console.log(rst.data);setListModels(rst.data||[]);});
     },[selectedSeries])
    useEffect(()=>{
        console.log('start fetching slug',slug);
        fetchDetail();
        return ()=> {dispatch(ResetState());dispatch(ResetProduct())}
    },[])
    const PhoneNames = ['Iphone6', 'Iphone6s','Iphone7s Plus','Iphone XsMax']
  return (
    <div>
    {showsigninNotify&&<HeaderNofify style={{width: '100%'}} severity ='' msg={'Đăng nhập để thêm vào giỏ hàng'}></HeaderNofify>}
    {stateSavedProductModal && <AlbumSelection setStateSavedProductModal={setStateSavedProductModal} productInfo ={productInfo} setStateAddAlbumModal={setStateAddAlbumModal}></AlbumSelection>}
    {stateAddAlbumModal && <AddAlbumModal setStateSavedProductModal ={setStateSavedProductModal} setStateAddAlbumModal={setStateAddAlbumModal}></AddAlbumModal>}
    <LoadingSpinner overlay ={{backgroundColor:'white'}} isLoading ={actionProductDetail == actionTypes.GET_ALL}>
    <div className={styles.container}>
    <CheckoutModal checkoutModal ={checkoutModal} setCheckoutModal = {setCheckoutModal}/>
    <ProductImages />
    <div className ={styles.information}>
        <div className={styles.hotTag}>{productInfo?.best_sale&&"Hot hit"}</div>
        {productInfo?.campaign!=0 &&<div style ={{display:'flex',justifyContent:'space-between'}}>
       <div className ={styles.percentSale}>{productInfo?.campaign?.value}% Off</div>
        <div className ={styles.campaignName}><div>{productInfo?.campaign?.name}</div></div>
        </div>}
        <div className={styles.name}>{productInfo?.name}</div>
        <div className={styles.price}>{productInfo?.campaign!= 0 &&<span>{covertCurrencyFormat(productInfo?.price*(1-productInfo?.campaign?.value/100))}</span>} <span style={{textDecoration:productInfo?.campaign?'line-through':'none',color:productInfo?.campaign?'gray':'black',margin:productInfo?.campaign?'0px 10px':'' }}>{covertCurrencyFormat(productInfo?.price)}</span></div>
        <OptionSelection selectedOption={selectedOption} setSelectedOption= {setSelectedOption} OptionList={productInfo?.options}/>
        <MaterialSelection setStateMaterialMenu={setStateMaterialMenu} selectedMaterial={selectedMaterial} setSelectedMaterial={setSelectedMaterial}></MaterialSelection>
        <BrandMenu stateBrandMenu ={stateBrandMenu} setStateBrandMenu ={setStateBrandMenu} id='brandMenu' ref={brandMenu} selectedBrand ={selectedBrand} setSelectedBrand ={setSelectedBrand}></BrandMenu>
        <SimpleItemList  nameList = 'Series' stateModel = {stateSeries} setStateModel = {setStateSeries} ListItem={listSeries} selectedItem = {selectedSeries} setSelectedItem ={setSelectedSeries} style ={{}}></SimpleItemList>
        <SimpleItemList nameList = 'Models' stateModel = {stateModel} setStateModel = {setStateModel} ListItem={listModels} selectedItem = {selectedModel} setSelectedItem ={setSelectedModel} style ={{}}></SimpleItemList>
        <Button id='checkoutBtn' color ='black' label = 'Thêm vào giỏ hàng' disabled = {stateCheckoutBtn == 'notActive'} onClick={()=>{if(stateCheckoutBtn != 'notActive'){if(userInfo){addTocart();}else{setShowSigninNotify(true);setTimeout(()=>{setShowSigninNotify(false)},3000);}}}} />
        <Button id='checkoutBtn' color ='white' label = 'Lưu'  onClick={addToWishlist} />
        <ShowHideLayout header='Chính sách vận chuyển'>
            <div style ={{ lineHeight:'2em'}}>
            <div>
                Đơn hàng của bạn từ 2 ốp lưng sẽ được hỗ trợ miễn phí vận chuyển. Cước phí vận chuyển được tính theo dịch vụ giao hàng tiết kiệm.
            </div>
            <ul>
           <li>
            Mất 1 - 2 ngày để chúng mình in mẫu bạn chọn lên ốp và bàn giao cho đơn vị vận chuyển.
           </li>
           <li>
            Đối với khu vực nội thành TP. Hồ Chí Minh, khách hàng nhận hàng sau 2 - 3 ngày sau khi đặt, thời gian này đối với khu vực các tỉnh ngoại thành  khoản 3 - 6 ngày phụ thuộc các yếu tố khách quan.
            </li>
            <li>
            Khách hàng thanh toán sau khi nhận hàng
            </li>
            </ul>
            </div>
        </ShowHideLayout>
        <ShowHideLayout header='Chính sách bảo hành'>
            <div style ={{ lineHeight:'2em'}}>
            <ul>
           <li>
            1 đổi 1 nếu sản phẩm sai mẫu, sai dòng điện thoại so với đơn đặt hàng trên hệ thống.
           </li>
           <li>
            Khách hàng được bảo hành ốp mới trong vòng 6 tháng nếu ốp bị hỏng do lỗi nhà cung cấp.
           </li>
            </ul>
            </div>
        </ShowHideLayout>
        <Suspense fallback = {<div></div>}>
        <Comment productInfo ={productInfo} userInfo={userInfo} />
        </Suspense>
    </div>
    </div>
    </LoadingSpinner>
    <Suggestion></Suggestion>
    </div>
    
  )
}
