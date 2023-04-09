import { apigetCurrent } from "../../services/user";

import {login,logout} from '../reducers/userSlice'
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

export  const LogoutCurrent = () => async(dispatch) =>{
            dispatch(logout())
} 