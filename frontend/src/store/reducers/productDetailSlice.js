import { createSlice } from "@reduxjs/toolkit";
import actionTypes  from "../actions/actionTypes"

const initialState = {
  action : null,
  errors: null,
  productDetail: {
    name:null,
    options:[],
  },
};
const productDetailSlice = createSlice({
    name: 'productDetail',
    initialState,
    reducers: {
      getAll: (state,action) =>{
        console.log('aaaa');
        console.log('getAllSuccess',action.payload);
        return {
          ...state,
          action: actionTypes.GET_ALL,
          errors: null
        }
      },
      getAllFail: (state,action) =>{
        return {
          ...state,
          action: actionTypes.GET_ALL_FAIL,
          errors: action.payload.data
        }
      },
      getAllSuccess: (state,action) =>{
        console.log('aaaa');
        console.log('getAllSuccess',action.payload);
        return {
          ...state,
          errors: null,
          action: actionTypes.GET_ALL_SUCCESS,
          productDetail: action.payload.data,
        }
      },
      resetproductDetail:(state,action) =>{
        return {
          ...state,
          productDetail: {},
        }
      }
      ,
         resetError: (state,action) =>{
         return {
           ...state,
           errors:null,
           action: null,
         }}
  }})

export const {getAll,getAllFail,getAllSuccess,resetError,resetproductDetail} = productDetailSlice.actions
export default productDetailSlice.reducer
