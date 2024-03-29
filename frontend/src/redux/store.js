import { configureStore} from "@reduxjs/toolkit";
import React from 'react'
import storage from 'redux-persist/lib/storage';
import authReducer from '../store/reducers/authSlice';
import userReducer from '../store/reducers/userSlice';
import shippingAddressReducer from '../store/reducers/shippingAddressSlice'
import productReducer from '../store/reducers/productSlice'
import productQueryReducer from '../store/reducers/productQuerySlice'
import productDetailReducer from '../store/reducers/productDetailSlice'
import cartItemReducer from '../store/reducers/cartSlice'
import orderReducer from '../store/reducers/orderSlice'
import commentReducer from '../store/reducers/commentSlice'
import savedAlbumReducer from '../store/reducers/savedAlbumSlice'
import savedProductReducer from '../store/reducers/savedProductSlice'
import { persistReducer, persistStore } from 'redux-persist';
    const AuthpersistConfig = {
        key: 'root',
        storage ,
        blacklist:['action','errors'],
      }

      const UserpersistConfig = {
        key: 'user',
        storage ,
      }

    const persistedAuthReducer = persistReducer(AuthpersistConfig,authReducer)
    const persistedUserReducer = persistReducer(UserpersistConfig,userReducer)
    export const store = configureStore({
        reducer: {
          auth: persistedAuthReducer,
          user: persistedUserReducer,
          shippingAddress: shippingAddressReducer,
          product: productReducer,
          productQuery: productQueryReducer,
          productDetail: productDetailReducer,
          cart: cartItemReducer,
          order: orderReducer,
          comment: commentReducer,
          savedAlbum: savedAlbumReducer,
          savedProduct: savedProductReducer
        }
      });
    export const persistor  = persistStore(store);