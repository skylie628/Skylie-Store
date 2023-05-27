import { createSlice } from "@reduxjs/toolkit";
import actionTypes  from "../actions/actionTypes"

const initialState = {
  action : null,
  errors: null,
  cartId:null,
  cartItems: [],
};
const cartItemSlice = createSlice({
    name: 'cartItem',
    initialState,
    reducers: {
      get :(state,action) =>{
        console.log('action payload',action.payload)
        return {
          ...state,
          cartId:action.payload.data
        }
      },
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
          cartItems: action.payload.data,
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
        errs: null,
        }},
      addFail: (state,action) =>{
          return {
            ...state,
            action: actionTypes.ADD_FAIL,
            errors: action.payload.data
          }
         },


        update: (state,action) =>{
          return {
            ...state,
            action: actionTypes.UPDATE,
            errors: null
          }
        },
      updateSuccess: (state,action) =>{
          const {id,quantity} = action.payload.data
          state.cartItems.forEach(item =>{
            if (item.id == id){
              item.quantity =quantity;
            }
          })
          state.action = actionTypes.UPDATE_SUCCESS
          state.errors = false;
         },
         updateFail: (state,action) =>{
          return {
            ...state,
            action: actionTypes.UPDATE_FAIL,
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
         const items =[];
         console.log("reducer drop là",action.payload)
          state.cartItems.forEach((item)=>{
            if(item.id !== action.payload){
              items.push(item)
            }
          })
          return {
            ...state,
            action: actionTypes.DELETE_SUCCESS,
            errors: false,
            cartItems: [...items]}
         },
         dropFail: (state,action) =>{
          return {
            ...state,
            action: actionTypes.DELETE_FAIL,
            errors: null
          }
        },
      resetcartItem:(state,action) =>{
        return {
          ...state,
          cartItem: {},
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

export const {get,getAll,getAllFail,getAllSuccess,add,addFail,addSuccess,update,updateSuccess,updateFail,drop,dropSuccess,dropFail,resetError,resetcartItem} = cartItemSlice.actions
export default cartItemSlice.reducer
