import { apiLogin, apiRegister } from '../../services/auth'
import {registerSuccess,registerFail,loginSuccess,loginFail,login,logout, register,resetError} from '../reducers/authSlice'
export  const Register = (payload) => async(dispatch) =>{
    dispatch(register());
    apiRegister(payload).then(response =>{
    dispatch(registerSuccess({data: response.token}))
    })
    .catch(response => {
        dispatch(registerFail({data: response.errors}))
    })
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


export  const ResetError = ()=>(dispatch)=>{
    dispatch(resetError({data:null}))
}

export  const Logout = ()=>(dispatch)=>{
    dispatch(logout({data:null}))
}