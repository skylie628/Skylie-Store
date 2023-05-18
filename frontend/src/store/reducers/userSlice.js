import { createSlice } from "@reduxjs/toolkit";
import actionTypes  from "../actions/actionTypes"

const initialState = {
    userInfo:null ,
    action:null,
    errors:null,
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
        },
        update: (state,action) =>{
          console.log(state)
          return {
            ...state,
            action: actionTypes.UPDATE,
            errors: null
          }
        },
        updateSuccess: (state,action) =>{
          console.log(action.payload,"reducer là")
          const {id,firstname,lastname,dob,sex,email,phonenum} =action.payload.data
          state.userInfo.id = id;
          state.userInfo.firstname = firstname;
          state.userInfo.lastname = lastname;
          state.userInfo.dob = dob;
          state.userInfo.sex = sex;
          state.userInfo.email = email;
          state.userInfo.phonenum = phonenum;
          state.action = actionTypes.UPDATE_SUCCESS;
          state.errors = null;
         },
         updateFail: (state,action) =>{
          return {
            ...state,
            action: actionTypes.UPDATE_FAIL,
            errors: null
          }
        },


         resetError: (state,action) =>{
         return {
           ...state,
           errors:null,
           action: null
         }}

      
  }})
export const {login,logout,update,updateSuccess,updateFail,resetError} = userSlice.actions
export default userSlice.reducer


