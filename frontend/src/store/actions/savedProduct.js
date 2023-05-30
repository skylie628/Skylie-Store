import {getAll,getAllFail,getAllSuccess,add,addFail,addSuccess,update,updateSuccess,updateFail, drop,dropSuccess,dropFail,resetError} from "../reducers/savedProductSlice";
import { apiGetSavedProducts, apiAddSavedProduct, apiUpdateSavedProduct,apiDeleteSavedProduct } from "../../services/savedProduct";
import { apiGetSavedAlbum } from "../../services/savedAlbum";
export  const fetchSavedProducts = (payload) => async(dispatch) =>{
        dispatch(getAll())
        apiGetSavedAlbum(payload)
        .then(response => dispatch(getAllSuccess(response)))
        .catch(response =>dispatch(getAllFail({data: 'Khong the get duoc'})))
    }
  

export  const addSavedProducts = (payload) => async(dispatch) =>{
    dispatch(add())
    apiAddSavedProduct(payload)
    .then(response => { console.log(response);return dispatch(addSuccess({data: {id : response.data.id,...payload}}))})
    .catch(response =>{ console.log(response); return dispatch(addFail({data: response.errors }))})
}

export  const updateSavedProducts = (payload) => async(dispatch) =>{
    dispatch(update())
    apiUpdateSavedProduct(payload)
    .then(response => setTimeout(()=>dispatch(updateSuccess({data: {id : response.data.id,...payload}})),1000))
    .catch(response =>setTimeout(()=>dispatch(updateFail({data: response.errors })),1000))
}

export  const deleteSavedProducts = (payload) => async(dispatch) =>{
    console.log(payload)
    dispatch(drop())
    apiDeleteSavedProduct(payload)
    .then(response => dispatch(dropSuccess(payload)))
    .catch(response =>dispatch(dropFail({data: response.errors })))
}
export  const ResetError = ()=>(dispatch)=>{
    dispatch(resetError({data:null}))
}