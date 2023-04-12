import { fetchSuccess,addSuccess,updateSuccess,dropSuccess } from "../reducers/shippingAddressSlice";
import { apiGetShippingAddresses, apiAddShippingAddress, apiUpdateShippingAddress,apiDeleteShippingAddress } from "../../services/shippingAddress";
export  const fetchShippingAddresses = (payload) => async(dispatch) =>{
    try {
        const response = await apiGetShippingAddresses(payload);
        dispatch(fetchSuccess({data: response.data}))
    }
    catch(err){
        dispatch(fetchSuccess({data: null}))
    }
}

export  const addShippingAddresses = (payload) => async(dispatch) =>{
    try {
        const response = await apiAddShippingAddress(payload);
        dispatch(addSuccess({data: {id : response.data.id,...payload}}))
    }
    catch(err){
        dispatch(addSuccess({data: null}))
    }
}

export  const updateShippingAddresses = (payload) => async(dispatch) =>{
    try {
        const response = await apiUpdateShippingAddress(payload);
        dispatch(updateSuccess({data: payload}))
    }
    catch(err){
        dispatch(updateSuccess({data: null}))
    }
}

export  const deleteShippingAddresses = (payload) => async(dispatch) =>{
    try {
        const response = await apiDeleteShippingAddress(payload);
        dispatch(dropSuccess({data: payload}))
    }
    catch(err){
        dispatch(dropSuccess({data: null}))
    }
}