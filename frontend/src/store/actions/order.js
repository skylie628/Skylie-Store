import {getAll,getAllFail,getAllSuccess,add,addFail,addSuccess,drop,dropFail,dropSuccess,resetError} from "../reducers/orderSlice";
import { apiGetOrders,apiAddOrder, apiCancelOrder } from "../../services/order";
export  const fetchOrders = (payload) => async(dispatch) =>{
    dispatch(getAll())
    apiGetOrders(payload)
    .then(response => dispatch(getAllSuccess(response)))
    .catch(response =>dispatch(getAllFail({data: 'Khong the get duoc'})))
}


export  const addOrder = (payload) => async(dispatch) =>{
dispatch(add())
apiAddOrder(payload)
.then(response => setTimeout(()=>dispatch(addSuccess({data: {id : response.data.id,...payload}})),1000))
.catch(response =>setTimeout(()=>dispatch(addFail({data: response.errors })),1000))
}
export  const cancleOrder = (payload) => async(dispatch) =>{
    console.log(payload)
    dispatch(drop())
    apiCancelOrder(payload)
    .then(response => dispatch(dropSuccess(payload)))
    .catch(response =>dispatch(dropFail({data: response.errors })))
}
export  const ResetError = ()=>(dispatch)=>{
    dispatch(resetError({data:null}))
}