import {getAll,getAllFail,getAllSuccess,add,addFail,addSuccess,update,updateSuccess,updateFail, drop,dropSuccess,dropFail,resetError} from "../reducers/savedAlbumSlice";
import { apiGetSavedAlbums, apiAddSavedAlbum, apiUpdateSavedAlbum,apiDeleteSavedAlbum } from "../../services/savedAlbum";
export  const fetchSavedAlbums = (payload) => async(dispatch) =>{
        dispatch(getAll())
        apiGetSavedAlbums(payload)
        .then(response => dispatch(getAllSuccess(response)))
        .catch(response =>dispatch(getAllFail({data: 'Khong the get duoc'})))
    }
  

export  const addSavedAlbums = (payload) => async(dispatch) =>{
    dispatch(add())
    apiAddSavedAlbum(payload)
    .then(response => dispatch(addSuccess({data: {id : response.data.id,...payload}})))
    .catch(response =>dispatch(addFail({data: response.errors })))
}

export  const updateSavedAlbums = (payload) => async(dispatch) =>{
    dispatch(update())
    apiUpdateSavedAlbum(payload)
    .then(response => setTimeout(()=>dispatch(updateSuccess({data: {id : response.data.id,...payload}})),1000))
    .catch(response =>setTimeout(()=>dispatch(updateFail({data: response.errors })),1000))
}

export  const deleteSavedAlbums = (payload) => async(dispatch) =>{
    console.log(payload)
    dispatch(drop())
    apiDeleteSavedAlbum(payload)
    .then(response =>setTimeout(() => dispatch(dropSuccess(payload)),1000))
    .catch(response =>setTimeout(()=>dispatch(dropFail({data: response.errors })),1000))
}
export  const ResetError = ()=>(dispatch)=>{
    dispatch(resetError({data:null}))
}