import { createSlice } from "@reduxjs/toolkit";
import actionTypes  from "../actions/actionTypes"

const initialState = {
  action : null,
  errors: null,
  orders: [],
};
const orderSlice = createSlice({
    name: 'order',
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
          orders: action.payload.data,
        }
      },
      add: (state,action) =>{
        return {
          ...state,
          action: actionTypes.ADD,
          errors: null
        }
      },
      addSuccess: (state,action) =>{
         return {
          ...state,
        action: actionTypes.ADD_SUCCESS,
        orders:[...state.orders,action.payload.data],
        errors: null,
        }},
      addFail: (state,action) =>{
          return {
            ...state,
            action: actionTypes.ADD_FAIL,
            errors: action.payload.data
          }
         },

         drop: (state,action) =>{
          return {
            ...state,
            action: actionTypes.DELETE,
            errors: null
          }
        },

        dropSuccess: (state,action) =>{
         const addresses =[];
         console.log("reducer drop là",action.payload)
         state.orders.forEach(order =>{
          if (order.id == action.payload){
            order.status = 'Cancel'
          }})
          state.action = actionTypes.DELETE_SUCCESS;
          state.errors = false;
         },
         dropFail: (state,action) =>{
          return {
            ...state,
            action: actionTypes.DELETE_FAIL,
            errors: null
          }
        },

         resetError: (state,action) =>{
         return {
           ...state,
           errors:null,
           action: null,
         }}
  }})

export const {get,getAll,getAllFail,getAllSuccess,add,addFail,addSuccess,drop,dropFail,dropSuccess,resetError} = orderSlice.actions
export default orderSlice.reducer
