import { createSlice } from "@reduxjs/toolkit";
import actionTypes  from "../actions/actionTypes"

const initialState = {
    userInfo:null ,
    action:null,
  }

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
      login: (state,action) =>{
        console.log('login userslice',)
         return {
          ...state,
          userInfo: action.payload.data}
        },
      logout: (state,action) =>{
        console.log('logout userslice')
        return {
         ...state,
         userInfo: null}
        }
  }})
export const {login,logout} = userSlice.actions
export default userSlice.reducer


