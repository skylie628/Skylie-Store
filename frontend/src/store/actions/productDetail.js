import {getAll,getAllFail,getAllSuccess,resetError,resetProduct} from "../reducers/productDetailSlice";
import { apiGetProductDetail } from "../../services/productDetail";
export  const getProductDetail = (payload) => async(dispatch) =>{
    console.log('fetching with query',payload)
    dispatch(getAll())
    apiGetProductDetail(payload)
    .then(response => {console.log("response là",response);dispatch(getAllSuccess(response));})
    .catch(response =>{console.log("response lỗi là",response);dispatch(getAllFail({data: 'Khong the get duoc'}));})
}
export  const ResetError = ()=>(dispatch)=>{
    dispatch(resetError({data:null}))
}
export  const ResetProduct = ()=>(dispatch)=>{
    dispatch(resetProduct({data:null}))
}