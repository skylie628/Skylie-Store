import { apiLogin, apiRegister } from '../../services/auth'
import {registerSuccess,registerFail,loginSuccess,loginFail,logout} from '../reducers/authSlice'
export  const Register = (payload) => async(dispatch) =>{

    try{
        const response = await apiRegister(payload);
        console.log("token la",response.data.token);
        if(response.data.err === 0){
            dispatch(registerSuccess({data: response.data.token}))
        }
        else {
            dispatch(registerFail({data:response.data.msg}))
        }
    }
    catch(err){
        dispatch(registerFail({data:null}))
    }
} 


export  const Login = (payload) => async(dispatch) =>{

    try{
        const response = await apiLogin(payload);
        console.log(response)
        if(response.data.err === 0){
            dispatch(loginSuccess({data: response.data.token}))
        }
        else {
            console.log("token la",response.data.token);
            console.log("err la",response.data.err );
            dispatch(loginFail({data:response.data.msg}))
        }
    }
    catch(err){
        dispatch(loginFail({data:null}))
    }
} 


export  const Logout = ()=>(dispatch)=>{
    dispatch(logout({data:null}))
}