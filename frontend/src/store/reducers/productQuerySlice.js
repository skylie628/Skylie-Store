import { createSlice } from "@reduxjs/toolkit";
import actionTypes  from "../actions/actionTypes"

const initialState = {
  collection: null,
  searchName : null,
  order: 0,
  colors:[],
  price:null,
};
const productQuerySlice = createSlice({
    name: 'productQuery',
    initialState,
    reducers: {
      filterByName: (state,action) =>{
        console.log('aaaa');
        console.log('getAllSuccess',action.payload);
        return {
          ...state,
          searchName: action.payload,
        }
      },
      filterByColors: (state,action) =>{
        return {
          ...state,
          colors:action.payload,
        }
      },
      filterByPrice: (state,action) =>{
        return {
          ...state,
          price: action.payload
        }
      },
      filterByCollection: (state,action) =>{
        console.log('redux state',action.payload);
        return {
          ...state,
          collection: action.payload
        }
      },
      sort: (state,action) =>{
        return {
          ...state,
          order: action.payload
        }
      },
  }})

export const {filterByName,filterByColors,filterByCollection,filterByPrice,sort} = productQuerySlice.actions
export default productQuerySlice.reducer
