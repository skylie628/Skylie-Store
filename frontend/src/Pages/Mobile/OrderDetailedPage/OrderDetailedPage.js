import styles from './OrderDetailedPage.module.css'
import React from 'react'
import PaymentSummary from './PaymentSummary'
import AddressInfomation from './AddressInfomation'
import ItemCard from './ItemCard'
import { Fragment } from 'react'
import { useEffect,useState } from 'react'
import { cancleOrder} from '../../../store/actions/order'
import { useDispatch,useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import LoadingSpinner from '../../../Components/LoadingSpinner/LoadingSpinner'
import { ResetError, addOrder } from '../../../store/actions/order'
import { covertCurrencyFormat } from '../../../utils/currencyFortmat'
import { apiGetOrder } from '../../../services/order'
export default function OrderDetailedPage() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [order,setOrder] = useState(null);
    const {order_id} = useParams();

    const getOrderInfo = async (order_id) =>{
        const orderInfo = await apiGetOrder(order_id).catch(
            err => navigate('../notfound')
        );
        console.log('orderInfo',orderInfo);
        setOrder(orderInfo.data);
    }
    const handleCancel =()=>{
        dispatch(cancleOrder(order_id));
        setOrder(prev => ({...prev,status: 'Cancel'}))
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
            {order.orderItem.map(item =>  <ItemCard itemInfo = {item}/>)}
            <div className={styles.productTotal}>
                <div  style ={{fontSize: '20px'}}>Total</div>
                <div  style ={{fontSize: '18px'}}>{covertCurrencyFormat(order.total_price - order.shipping_fee)}</div>
            </div>
            <div className={styles.buttons}>
            <div className={styles.backCartButton} onClick={()=>navigate('../orders')}>Giỏ hàng </div>
            <div className={styles.continueShoppingButton} onClick={()=>navigate('../shopping')}>Shopping</div>
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

        <PaymentSummary handleCancel ={handleCancel} status ={order.status} productTotal={order.total_price - order.shipping_fee} deliveryFee ={order.shipping_fee} total={order.total_price}/>
        </div>
        </div>
    </div></Fragment>}
    </LoadingSpinner>
  )
}
