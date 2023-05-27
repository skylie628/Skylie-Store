import styles from './OrderDetailedPage.module.css'
import React from 'react'
import PaymentSummary from './PaymentSummary'
import AddressInfomation from './AddressInfomation'
import ItemCard from './ItemCard'
import { Fragment } from 'react'
import { useEffect,useState } from 'react'
import { cancleOrder} from '../../store/actions/order'
import { useDispatch,useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import LoadingSpinner from '../../Components/LoadingSpinner/LoadingSpinner'
import { ResetError, addOrder } from '../../store/actions/order'
import { covertCurrencyFormat } from '../../utils/currencyFortmat'
import { apiGetOrder } from '../../services/order'
export default function OrderDetailedPage() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [deliveryFee,setDeliveryFee] = useState(0);
    const [ptotal,setPtotal] = useState(0);
    const [total,setTotal] = useState(0);
    const [order,setOrder] = useState(null);
    const [status,setStatus] = useState(''); 
    const {order_id} = useParams();
    const productTotal = ()=> order.orderItem.reduce((x,y)=> {
        if(y.saleCampaign){
            return (x+ y.quantity * (y.option?.product.price)*(1-y.saleCampaign.value/100))
        }
        return (x+ y.quantity * y.option?.product.price)
    },0)

    const getOrderInfo = async (order_id) =>{
        const orderInfo = await apiGetOrder(order_id);
        console.log('orderInfo',orderInfo);
        setOrder(orderInfo.data);
    }
    const handleCancel =()=>{
        dispatch(cancleOrder(order_id));
        setOrder(prev => ({...prev,status: 'Cancel'}))
    }
    useEffect(()=>{
        if(order !== null){
            const shippingFee = calculateShippingFee();
            setDeliveryFee(shippingFee);
            const totalprice = productTotal();
            setPtotal(totalprice);
            setTotal(shippingFee+totalprice);
        }
    },[order])
    const calculateShippingFee =  () =>{
    /*const province = await apiLookupProvince(pcode);
    const district = await apiLookupDistrict(dcode);
    apiGetFee({province:province.name,district:district.name,quantity:1}).then(rst => console.log(rst)).catch(err => 0)*/
    const quantity = order.orderItem.reduce((x,y)=> (x+ y.quantity),0);
    if(quantity>2){
        return 0;
    }
    if (order.shippingAddress.province == 72){
        return 15000
    }
    return 30000
}

    useEffect(()=>{
    getOrderInfo(order_id);
   return ()=>{dispatch(ResetError)}
    },[])
  return (

    <LoadingSpinner overlay={{backgroundColor: 'white' }} isLoading ={ order==  null }>
   {order && <Fragment> <div style={{fontSize:'25px',textAlign:'left',width:'100%',margin:'20px 0px 0px 20px'}}>Thông tin đơn hàng</div>
    <div className ={styles.ContentWrapper}>
        <div className ={styles.leftCol}>
            <div className ={styles.descriptionCard}>
            <div style ={{display: 'flex', justifyContent:'space-between'}}>
            <div style={{fontSize:'18px',margin:'10px 0px'}}>{order.createdAt}</div>
            <div style={{fontSize:'18px',margin:'10px 0px',color:'black'}}>{order.status}</div>
            </div>
            <div className ={styles.descriptionCardHeader}>
                <div className={styles.item}>Sản phẩm</div>
                <div className={styles.quantity}>Số lượng</div>
                <div className={styles.subtotal}>Giá tiền</div>
            </div>
            {order.orderItem.map(item =>  <ItemCard itemInfo = {item}/>)}
            <div className={styles.productTotal}>
                <div  style ={{fontSize: '20px'}}>Total</div>
                <div  style ={{fontSize: '18px'}}>{covertCurrencyFormat(ptotal)}</div>
            </div>
            <div className={styles.buttons}>
            <div className={styles.backCartButton} onClick={()=>navigate('../orders')}>Trở về </div>
            <div className={styles.continueShoppingButton} onClick={()=>navigate('../shopping')}>Tiếp tục shopping</div>
            </div>
            </div>
        </div>
        <div className={styles.rightCol}>
            <div className={styles.sticky}>
        <AddressInfomation addressInfo ={order.shippingAddress} />
           
          { /*<div className ={styles.voucherWrapper}>
                <div className={styles.voucherInput}>
                 <input></input>
                </div>
                <div className={styles.voucherBtn}>
                    Mã Voucher
                </div>
</div>*/}

        <PaymentSummary handleCancel ={handleCancel} status ={order.status} productTotal={ptotal} deliveryFee ={deliveryFee} total={total}/>
        </div>
        </div>
    </div></Fragment>}
    </LoadingSpinner>
  )
}
