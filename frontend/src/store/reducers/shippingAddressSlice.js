import { createSlice } from "@reduxjs/toolkit";
import actionTypes  from "../actions/actionTypes"

const initialState = {
  action : null,
  errors: null,
  addresses: []
};
const shippingAddressSlice = createSlice({
    name: 'shippingAddress',
    initialState,
    reducers: {
      getAll: (state,action) =>{
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
        console.log('getAllSuccess',action.payload)
        return {
          ...state,
          errors: null,
          action: actionTypes.GET_ALL_SUCCESS,
          addresses: [...action.payload.data]
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
        action: actionTypes.ADD_SUCCESS,
        errs: null,
         addresses:[...state.addresses,
          {...action.payload.data,default:state.addresses.length ==0? 1:0}]}
        },
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
          const {firstname,lastname,phonenum,homenum,district,province,ward} = action.payload.data
          state.addresses.forEach(address =>{
            if (address.id == action.payload.data.id){
              address.firstname =firstname;
              address.lastname =lastname;
              address.default = action.payload.data.default;
              address.phonenum = phonenum;
              address.homenum= homenum;
              address.province = province;
              address.district = district;
              address.ward = ward;
              address.address = action.payload.data.address;
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
         const addresses =[];
         console.log("reducer drop là",action.payload)
          state.addresses.forEach((address)=>{
            if(address.id !== action.payload){
              addresses.push(address)
            }
          })
          return {
            ...state,
            action: actionTypes.DELETE_SUCCESS,
            errors: false,
            addresses: [...addresses]}
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
           action: null
         }}
  }})

export const {getAll,getAllFail,getAllSuccess,add,addFail,addSuccess,update,updateSuccess,updateFail,drop,dropSuccess,dropFail,resetError} = shippingAddressSlice.actions
export default shippingAddressSlice.reducer


