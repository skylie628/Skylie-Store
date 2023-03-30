import { createSlice } from "@reduxjs/toolkit";
import React from 'react'

const initialState = {
    islogged: true,
    userToken: null, // for storing the JWT\
  }


  const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
  })
  
  export default authSlice.reducer;