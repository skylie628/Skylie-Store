import { createSlice } from "@reduxjs/toolkit";
import actionTypes from "../actions/actionTypes";
const initialState = {
    action:'',
    islogged: false,
    userToken: null, // for storing the JWT\
    errors: null,
    
  }

  const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
      registerSuccess: (state,action) =>{
         return {
          ...state,
          islogged: true,
          userToken: action.payload.data
      }
      },
      registerFail: (state,action) =>{
        return {
         ...state,
         islogged: false,
         userToken: null,
         msg: action.payload.data
     }
     },
     login: (state,action) =>{
      return {
        ...state,
        isLoading: true,
        action: actionTypes.LOGIN,
        errors: null,
      }
     },
     loginSuccess: (state,action) =>{
       return {
        ...state,
        islogged: true,
        action: actionTypes.LOGIN_SUCCESS,
        userToken: action.payload.data,
        
    }
    },
    loginFail: (state,action) =>{
      return {
       ...state,
       islogged: false,
       action: actionTypes.LOGIN_FAIL,
       userToken: null,
       errors: action.payload.data
   }
   },
   logout: (state,action) =>{
    return {
     ...state,
     islogged: false,
     userToken: null,
     msg:''
 }
 },
    },
  })
  export const {registerSuccess,registerFail,login,loginSuccess,loginFail,logout} = authSlice.actions;
  export default authSlice.reducer;