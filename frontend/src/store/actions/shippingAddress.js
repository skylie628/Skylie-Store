import {getAll,getAllFail,getAllSuccess,add,addFail,addSuccess,update,updateSuccess,updateFail, drop,dropSuccess,dropFail,resetError} from "../reducers/shippingAddressSlice";
import { apiGetShippingAddresses, apiAddShippingAddress, apiUpdateShippingAddress,apiDeleteShippingAddress } from "../../services/shippingAddress";
export  const fetchShippingAddresses = (payload) => async(dispatch) =>{
        dispatch(getAll())
        apiGetShippingAddresses(payload)
        .then(response => dispatch(getAllSuccess(response)))
        .catch(response =>dispatch(getAllFail({data: 'Khong the get duoc'})))
    }
  

export  const addShippingAddresses = (payload) => async(dispatch) =>{
    dispatch(add())
    apiAddShippingAddress(payload)
    .then(response => dispatch(addSuccess({data: {id : response.data.id,...payload}})))
    .catch(response =>dispatch(addFail({data: response.errors })))
}

export  const updateShippingAddresses = (payload) => async(dispatch) =>{
    dispatch(update())
    apiUpdateShippingAddress(payload)
    .then(response => dispatch(updateSuccess({data: {id : response.data.id,...payload}})))
    .catch(response =>dispatch(updateFail({data: response.errors })))
}

export  const deleteShippingAddresses = (payload) => async(dispatch) =>{
    console.log(payload)
    dispatch(drop())
    apiDeleteShippingAddress(payload)
    .then(response => dispatch(dropSuccess(payload)))
    .catch(response =>dispatch(dropFail({data: response.errors })))
}
export  const ResetError = ()=>(dispatch)=>{
    dispatch(resetError({data:null}))
}