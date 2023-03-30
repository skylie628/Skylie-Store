import { configureStore} from "@reduxjs/toolkit";
import React from 'react'
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import authReducer from "../store/reducers/authSlice";
    const persistConfig = {
        key: 'root',
        storage ,
      }

    const persistedReducer = persistReducer(persistConfig,authReducer)
    export const store = configureStore({
        reducer: {
          auth: persistedReducer
        }
      });
    export const persistor  = persistStore(store);