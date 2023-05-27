import styles from './CheckoutPage.module.css'
import React from 'react'
import PaymentSummary from './PaymentSummary'
import AddressInfomation from './AddressInfomation'
import ItemCard from './ItemCard'
import AddressSelection from './AddressSelection'
import DeliveryInfoForm from '../ProfiledPage/DeliveryInfoForm'
import OrderSuccess from './OrderSuccess'
import {gsap} from 'gsap'
import { apiLookupProvince,apiLookupDistrict } from '../../services/address'
import { apiGetFee } from '../../services/giaohangtietkiem'
import { useEffect,useState } from 'react'
import { translateAddress } from '../../utils/translateAddress'
import { addShippingAddresses } from '../../store/actions/shippingAddress'
import { useDispatch,useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import actionTypes from '../../store/actions/actionTypes'
import LoadingSpinner from '../../Components/LoadingSpinner/LoadingSpinner'
import { fetchShippingAddresses } from '../../store/actions/shippingAddress'
import { ResetError, addOrder } from '../../store/actions/order'
import { covertCurrencyFormat } from '../../utils/currencyFortmat'
export default function CheckoutPage() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const cart = useSelector(state => state.cart);
    const [stateModalAddresses,setStateModalAddresses] = useState(false);
    const [stateAddModalAddresses,setStateAddModalAddresses] = useState(false);
    const userInfo= useSelector(state=>state.user).userInfo;
    const [selectedId,setSelectedId] = useState('');
    const [deliveryFee,setDeliveryFee] = useState(0);
    const order = useSelector(state=>state.order);
    const addressesData = useSelector(state=> state.shippingAddress).addresses
    const [selectedAddress,setSelectedAddress] = useState({});
    const [total,setTotal] = useState(0);
    const productTotal =  cart.cartItems.reduce((x,y)=> {
        if(y.campaign !=0){
            return (x+ y.quantity * (y.option?.product.price)*(1-y.campaign.value/100))
        }
        return (x+ y.quantity * y.option?.product.price)
    },0)
    const handleAddAddressSubmit = async(payload) =>{
      const address = await translateAddress(payload.province,payload.district,payload.ward,payload.homenum);
      payload = {account_id : userInfo.id,address: address,default: true,...payload};
      await dispatch(addShippingAddresses(payload))
      setStateModalAddresses(true);
      setStateAddModalAddresses(false);
    }
    const handleOrder =()=>{
        const checkvalid = userInfo.id&&selectedAddress&& cart.cartId?.id;
        checkvalid&&dispatch(addOrder({account_id:userInfo.id,shipping_address_id:selectedAddress.id,cart_id:cart.cartId.id}))
    }
    const getShippingAddresses = async ()=>{
        await userInfo.id&&dispatch(fetchShippingAddresses(userInfo.id));
        const defaultAddress = addressesData.find(address => address.default)||{};
        console.log('default address là',defaultAddress)
        setSelectedAddress(defaultAddress)
    }
    const calculateShippingFee =  (pcode,dcode) =>{
    /*const province = await apiLookupProvince(pcode);
    const district = await apiLookupDistrict(dcode);
    apiGetFee({province:province.name,district:district.name,quantity:1}).then(rst => console.log(rst)).catch(err => 0)*/
    const quantity = cart.cartItems.reduce((x,y)=> (x+ y.quantity),0);
    if(quantity>2){
        return 0;
    }
    if (pcode == 72){
        return 15000
    }
    return 30000
}
    useEffect(()=>{
        setTotal(productTotal+deliveryFee)},[productTotal,deliveryFee])
    useEffect(()=>{
        console.log(selectedAddress);
        const shippingFee = (selectedAddress.province&&calculateShippingFee(selectedAddress.province,selectedAddress.district))||0;
        setDeliveryFee(shippingFee);
    },[selectedAddress])
    useEffect(()=>{
        if(order.action == actionTypes.ADD_SUCCESS){
            
        }
    },[order])
    useEffect(()=>{
    !cart.cartId && navigate('/cart');
   getShippingAddresses();
   return ()=>{dispatch(ResetError)}
    },[])
  return (

    <LoadingSpinner overlay={{backgroundColor: 'white' }} isLoading ={ order.action == actionTypes.ADD }>
   {(order.action == actionTypes.ADD_SUCCESS)&&<OrderSuccess></OrderSuccess>}
    {(order.action != actionTypes.ADD_SUCCESS)&&<div>
        {stateModalAddresses&&<AddressSelection stateAddModalAddresses ={stateAddModalAddresses} setStateAddModalAddresses ={setStateAddModalAddresses} setStateModalAddresses = {setStateModalAddresses} selectedAddress = {selectedAddress} setSelectedAddress = {setSelectedAddress} addressesData ={addressesData}></AddressSelection>}
        {
        stateAddModalAddresses && <DeliveryInfoForm  handleFormSubmit = {handleAddAddressSubmit} isOpenModal ={stateAddModalAddresses} setIsOpenModal ={setStateAddModalAddresses}  selectedId = {selectedId} setSelectedId ={setSelectedId}></DeliveryInfoForm>
}
    <div style={{fontSize:'25px',textAlign:'left',width:'100%',margin:'20px 0px 0px 20px'}}>Giỏ hàng</div>
    <div className ={styles.ContentWrapper}>
        <div className ={styles.leftCol}>
            <div className ={styles.descriptionCard}>
            <div style={{fontSize:'18px',textAlign:'left',margin:'10px 0px'}}>Đã chọn</div>
            <div className ={styles.descriptionCardHeader}>
                <div className={styles.item}>Sản phẩm</div>
                <div className={styles.quantity}>Số lượng</div>
                <div className={styles.subtotal}>Giá tiền</div>
            </div>
            {cart.cartItems.map(item =>  <ItemCard itemInfo = {item}/>)}
            <div className={styles.productTotal}>
                <div  style ={{fontSize: '20px'}}>Total</div>
                <div  style ={{fontSize: '18px'}}>{covertCurrencyFormat(productTotal)}</div>
            </div>
            <div className={styles.buttons}>
            <div className={styles.backCartButton}>Trở về giỏ hàng</div>
            <div className={styles.continueShoppingButton}>Tiếp tục shopping</div>
            </div>
            </div>
        </div>
        <div className={styles.rightCol}>
            <div className={styles.sticky}>
        <AddressInfomation stateAddModalAddresses ={stateAddModalAddresses} setStateAddModalAddresses ={setStateAddModalAddresses} selectedAddress={selectedAddress} setStateModalAddresses ={setStateModalAddresses}/>
           
          { /*<div className ={styles.voucherWrapper}>
                <div className={styles.voucherInput}>
                 <input></input>
                </div>
                <div className={styles.voucherBtn}>
                    Mã Voucher
                </div>
</div>*/}

        <PaymentSummary handleOrder ={handleOrder} productTotal={productTotal} deliveryFee ={deliveryFee} total={total}/>
        </div>
        </div>
    </div>
    </div>}
    </LoadingSpinner>
  )
}
