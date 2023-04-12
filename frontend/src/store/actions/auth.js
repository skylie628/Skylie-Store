import { apiLogin, apiRegister } from '../../services/auth'
import {registerSuccess,registerFail,loginSuccess,loginFail,login,logout} from '../reducers/authSlice'
export  const Register = (payload) => async(dispatch) =>{
    try{
        const response = await apiRegister(payload);
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
    dispatch(login());
    apiLogin(payload).then(response =>{
    dispatch(loginSuccess({data:response.token}))
    })
    .catch(response => {
        dispatch(loginFail({data: response.errors}))
    })
} 


export  const Logout = ()=>(dispatch)=>{
    dispatch(logout({data:null}))
}