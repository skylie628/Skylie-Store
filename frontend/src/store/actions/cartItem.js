import {get,getAll,getAllFail,getAllSuccess,add,addFail,addSuccess,update,updateSuccess,updateFail, drop,dropSuccess,dropFail,resetError} from "../reducers/cartSlice";
import { apiGetCartId,apiGetCartItems, apiAddCartItem, apiUpdateCartItem,apiDeleteCartItem } from "../../services/cartItem";
export  const getCartId = (payload) => async(dispatch) =>{
    apiGetCartId(payload)
    .then(response => dispatch(get(response)))
    .catch(response =>{})
}
export  const fetchCartItem = (payload) => async(dispatch) =>{
    console.log('fetchCartItem là',payload)
        dispatch(getAll())
        apiGetCartItems(payload)
        .then(response => dispatch(getAllSuccess(response)))
        .catch(response =>dispatch(getAllFail({data: 'Khong the get duoc'})))
    }
    export  const addCartItem = (payload) => async(dispatch) =>{
    dispatch(add())
    apiAddCartItem(payload)
    .then(response => {dispatch(fetchCartItem(payload.cart_id));dispatch(addSuccess({}));})
    .catch(response =>dispatch(addFail({data: response.errors })))
}
export  const updateCartItem = (payload) => async(dispatch) =>{
    dispatch(update())
    apiUpdateCartItem(payload)
    .then(response => setTimeout(()=>dispatch(updateSuccess({data: {id : response.data.id,...payload}})),1000))
    .catch(response =>setTimeout(()=>dispatch(updateFail({data: response.errors })),1000))
}

export  const deleteCartItem = (payload) => async(dispatch) =>{
    console.log(payload)
    dispatch(drop())
    apiDeleteCartItem(payload)
    .then(response => dispatch(dropSuccess(payload)))
    .catch(response =>dispatch(dropFail({data: response.errors })))
}
export  const ResetError = ()=>(dispatch)=>{
    dispatch(resetError({data:null}))
}