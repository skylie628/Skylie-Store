import { configureStore} from "@reduxjs/toolkit";
import React from 'react'
import storage from 'redux-persist/lib/storage';
import authReducer from '../store/reducers/authSlice';
import userReducer from '../store/reducers/userSlice';
import shippingAddressReducer from '../store/reducers/shippingAddressSlice'
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
          shippingAddress: shippingAddressReducer
        }
      });
    export const persistor  = persistStore(store);