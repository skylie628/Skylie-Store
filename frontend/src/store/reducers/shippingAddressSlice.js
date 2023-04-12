import { createSlice } from "@reduxjs/toolkit";
import actionTypes  from "../actions/actionTypes"

const initialState = {
  isloading : false,
  status : '',
  addresses: []};
const shippingAddressSlice = createSlice({
    name: 'shippingAddress',
    initialState,
    reducers: {
      Requesting: (state,action) =>{
        return {
          ...state,
          isloading: true,
        }
      },
      RequestFail: (state,action) =>{
        return {
          ...state,
          isloading: false,
          err: true,
        }
      },
      fetchSuccess: (state,action) =>{
        return {
          ...state,
          isloading: false,
          err: false,
          addresses: [...action.payload.data.data]
        }
      },
      addSuccess: (state,action) =>{
         return {
        isloading: false,
        err: false,
         addresses:[...state.addresses,
          action.payload.data]}
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
          state.isloading= false;
          state.err = false;
         },
        
      dropSuccess: (state,action) =>{
         const addresses =[];
          state.addresses.forEach((address)=>{
            if(address.id !== action.payload.data){
              addresses.push(address)
            }
          })
          console.log(addresses);
          return {
            ...state,
            isloading: false,
            err: false,
            addresses: [...addresses]}
         },
  }})

export const {fetchSuccess,addSuccess,updateSuccess,dropSuccess} = shippingAddressSlice.actions
export default shippingAddressSlice.reducer


