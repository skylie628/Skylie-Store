import { createSlice } from "@reduxjs/toolkit";
import actionTypes  from "../actions/actionTypes"

const initialState = {
  action : null,
  errors: null,
  maxCount: 100,
  products: []
};
const productSlice = createSlice({
    name: 'product',
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
          products: [...state.products,...action.payload.data.products],
          maxCount: action.payload.data.maxCount
        }
      },
      resetProducts:(state,action) =>{
        return {
          ...state,
          products: [],
        }
      }
      ,
         resetError: (state,action) =>{
         return {
           ...state,
           errors:null,
           action: null
         }}
  }})

export const {getAll,getAllFail,getAllSuccess,resetError,resetProducts} = productSlice.actions
export default productSlice.reducer
