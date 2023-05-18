import {getAll,getAllFail,getAllSuccess,resetError} from "../reducers/productSlice";
import { apiGetProducts } from "../../services/product";
export  const getProducts = (payload) => async(dispatch) =>{
    console.log('fetching with query',payload)
    dispatch(getAll())
    apiGetProducts(payload)
    .then(response => dispatch(getAllSuccess(response)))
    .catch(response =>dispatch(getAllFail({data: 'Khong the get duoc'})))
}
export  const ResetError = ()=>(dispatch)=>{
    dispatch(resetError({data:null}))
}