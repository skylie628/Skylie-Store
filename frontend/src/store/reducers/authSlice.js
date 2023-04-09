import { createSlice } from "@reduxjs/toolkit";
import actionTypes  from "../actions/actionTypes"

const initialState = {
    islogged: false,
    userToken: null, // for storing the JWT\
    msg: '',
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
     loginSuccess: (state,action) =>{
       return {
        ...state,
        islogged: true,
        userToken: action.payload.data
    }
    },
    loginFail: (state,action) =>{
      return {
       ...state,
       islogged: false,
       userToken: null,
       msg: action.payload.data
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
  export const {registerSuccess,registerFail,loginSuccess,loginFail,logout} = authSlice.actions;
  export default authSlice.reducer;