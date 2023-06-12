import styles from './CheckoutPage.module.css'
import React from 'react'
import PaymentSummary from './PaymentSummary'
import AddressInfomation from './AddressInfomation'
import ItemCard from './ItemCard'
import Button from '../../../Components/ClassicButton/Button'
import AddressSelection from './AddressSelection'
import DeliveryInfoForm from '../../Mobile/ProfiledPage/DeliveryInfoForm'
import OrderSuccess from './OrderSuccess'
import {gsap} from 'gsap'
import { apiLookupProvince,apiLookupDistrict } from '../../../services/address'
import { apiGetFee } from '../../../services/giaohangtietkiem'
import { useEffect,useState } from 'react'
import { translateAddress } from '../../../utils/translateAddress'
import { addShippingAddresses } from '../../../store/actions/shippingAddress'
import { useDispatch,useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import actionTypes from '../../../store/actions/actionTypes'
import LoadingSpinner from '../../../Components/LoadingSpinner/LoadingSpinner'
import { fetchShippingAddresses } from '../../../store/actions/shippingAddress'
import { ResetError, addOrder } from '../../../store/actions/order'
import { covertCurrencyFormat } from '../../../utils/currencyFortmat'
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
    const addressAction = useSelector(state=>state.shippingAddress).action
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
        if(checkvalid){dispatch(addOrder({account_id:userInfo.id,shipping_address_id:selectedAddress.id,cart_id:cart.cartId.id}))}
    }
    const getShippingAddresses = async ()=>{
        await userInfo.id&&dispatch(fetchShippingAddresses(userInfo.id));
    }
    useEffect(()=>{
        if(addressAction == actionTypes.GET_ALL_SUCCESS){
            const defaultAddress = addressesData.find(address => address.default);
            console.log('default address là',defaultAddress)
            setSelectedAddress(defaultAddress)
        }
    },[addressAction])
    const calculateShippingFee =  async (pcode,dcode) =>{
        const fee = await apiGetFee({province:pcode,district:dcode,quantity:1})
        .then(rst => rst.fee)
        .catch(err => 30000)
        console.log('fee là',fee)
        return fee;
        /* const quantity = cart.cartItems.reduce((x,y)=> (x+ y.quantity),0);
        if(quantity>2){
            return 0;
        }
        if (pcode == 72){
            return 15000
        }
        return 30000*/
    
    }
        useEffect(()=>{
            setTotal(productTotal+deliveryFee)},[productTotal,deliveryFee])
        useEffect(()=>{
            console.log(selectedAddress);
            if(selectedAddress && selectedAddress.province){
    calculateShippingFee(selectedAddress.province,selectedAddress.district).then(rst =>  setDeliveryFee(rst))
           }
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
    <div className ={styles.ContentWrapper}>
    <div className={styles.rightCol}>
            <div className={styles.sticky}>
        <AddressInfomation addressesData ={addressesData} stateAddModalAddresses ={stateAddModalAddresses} setStateAddModalAddresses ={setStateAddModalAddresses} selectedAddress={selectedAddress} setStateModalAddresses ={setStateModalAddresses}/>
           
          { /*<div className ={styles.voucherWrapper}>
                <div className={styles.voucherInput}>
                 <input></input>
                </div>
                <div className={styles.voucherBtn}>
                    Mã Voucher
                </div>
</div>*/}

        <PaymentSummary selectedAddress ={selectedAddress} handleOrder ={handleOrder} productTotal={productTotal} deliveryFee ={deliveryFee} total={total}/>
        </div>
        </div>
        <div className ={styles.leftCol}>
        <div style={{fontSize:'25px',textAlign:'left',width:'100%',margin:'20px 0px 0px 20px'}}>Giỏ hàng</div>
            <div className ={styles.descriptionCard}>
            <div style={{fontSize:'18px',textAlign:'left',margin:'10px 0px'}}>Đã chọn</div>
            {cart.cartItems.map(item =>  <ItemCard itemInfo = {item}/>)}
            <div className={styles.productTotal}>
                <div  style ={{fontSize: '16px'}}>Tiền hàng</div>
                <div  style ={{fontSize: '18px',fontWeight:'600'}}>{covertCurrencyFormat(productTotal)}</div>
            </div>
            <div className={styles.buttons}>
           < Button  label = "Giỏ hàng" color ='white' style ={{width:'100px',margin:'20px'}} onClick = {()=>navigate('../cart')} ></Button>
<Button  label = "Shopping"  color ='black' style ={{width:'100px',margin:'20px '}} onClick = {()=>navigate('../shopping')} ></Button>
            </div>
            </div>
        </div>
    </div>
    </div>}
    </LoadingSpinner>
  )
}
