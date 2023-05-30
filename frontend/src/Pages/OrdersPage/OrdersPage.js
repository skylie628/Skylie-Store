import React from 'react'
import OrderCard from './OrderCard'
import styles from './OrderPage.module.css'
import actionTypes from '../../store/actions/actionTypes'
import HeaderNofify from '../../Components/MultipleNotify/HeaderNotify'
import LoadingSpinner from '../../Components/LoadingSpinner/LoadingSpinner'
import { useEffect } from 'react'
import { cancleOrder, fetchOrders } from '../../store/actions/order'
import { useSelector,useDispatch } from 'react-redux'
export default function OrdersPage() {
  const orders = useSelector(state => state.order).orders;
  const orderAction = useSelector(state => state.order).action;
  const userInfo = useSelector(state => state.user).userInfo;
  const dispatch = useDispatch();
  const getOrders = async (account_id) =>{
    dispatch(fetchOrders(account_id));
  }
  const deleteOrder = async (order_id)=>{
    dispatch(cancleOrder(order_id));
  } 
  useEffect(()=>{
    getOrders(userInfo.id);
  },[])
  return (
    <div>
              <div className ={styles.header}>
        <div style={{fontSize: '35px', textAlign:'left', fontWeight:'600'}}>Track & Take.</div>
        <div style={{fontSize: '20px', textAlign:'left',color:'gray',fontWeight:'100'}}>Thư giãn đi! Đơn hàng của bạn đang được bọn mình xử lý sớm nhất có thể.</div>
        </div>
       {(orderAction == actionTypes.DELETE_SUCCESS) && <HeaderNofify style = {{width: '100%'}} severity ='' msg={'Cancle đơn đặt hàng thành công thành công'} ></HeaderNofify>}
      <LoadingSpinner style ={{backgroundColor:'white',height:'500px'}} isLoading={orderAction == actionTypes.GET_ALL}>
      {orders.length >0 && orders.map(order =>
      <OrderCard order ={order} deleteOrder={deleteOrder}></OrderCard>
      )}
      </LoadingSpinner>
    </div>
  )
}
