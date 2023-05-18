import { apigetCurrent,apiupdateCurrent } from "../../services/user";

import {login,logout,update,updateSuccess,updateFail,resetError} from '../reducers/userSlice'
export  const GetUserCurrent = () => async(dispatch) =>{

    try{
        const response = await apigetCurrent();
        console.log("userinfo đã get",response);
        if(response.err === 0){
            dispatch(login({data: response.data}))
        }
        else {
            dispatch(login({data: null}))
        }
    }
    catch(err){
        dispatch(login({data: null}))
    }
} 
export  const UpdateUserCurrent = (payload) => async(dispatch) =>{
    dispatch(update())
    apiupdateCurrent(payload)
    .then((response)=>{
        console.log('controller response',payload)
        dispatch(updateSuccess({data: payload}))
    })
    .catch((err)=>{
        console.log('controller error',err)
        dispatch(updateFail({data: err.errors}))
    })
} 
export  const LogoutCurrent = () => async(dispatch) =>{
            dispatch(logout())
} 
export  const ResetError = ()=>(dispatch)=>{
    dispatch(resetError({data:null}))
}