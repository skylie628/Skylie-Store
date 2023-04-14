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
      register: (state,action) =>{
        return {
          ...state,
          action: actionTypes.REGISTER,
          errors: null,
        }
       },
      registerSuccess: (state,action) =>{
         return {
          ...state,
          action: actionTypes.REGISTER_SUCCESS,
          islogged: true,
          userToken: action.payload.data
      }
      },
      registerFail: (state,action) =>{
        return {
         ...state,
         islogged: false,
         action: actionTypes.REGISTER_FAIL,
         errors: action.payload.data,
         userToken: null,
     }
     },
     login: (state,action) =>{
      return {
        ...state,
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
     errors:null,
     action: null,
 }},
    resetError: (state,action) =>{
    return {
      ...state,
      errors:null,
      action: null
    }}

  }})
  export const {registerSuccess,registerFail,loginSuccess,loginFail,login,logout, register,resetError} = authSlice.actions;
  export default authSlice.reducer;