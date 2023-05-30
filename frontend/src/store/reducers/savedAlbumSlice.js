import { createSlice } from "@reduxjs/toolkit";
import actionTypes  from "../actions/actionTypes"

const initialState = {
  action : null,
  errors: null,
  savedAlbums: []
};
const savedAlbumSlice = createSlice({
    name: 'savedAlbum',
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
          savedAlbums: [...action.payload.data]
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
         savedAlbums:[...state.savedAlbums,
          action.payload.data]}
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
          const {name} = action.payload.data
          state.savedAlbums.forEach(savedAlbum =>{
            if (savedAlbum.id == action.payload.data.id){
                savedAlbum.name =name;
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
         const savedAlbums =[];
         console.log("reducer drop là",action.payload)
          state.savedAlbums.forEach((savedAlbum)=>{
            if(savedAlbum.id !== action.payload.id){
                savedAlbums.push(savedAlbum)
            }
          })
          return {
            ...state,
            action: actionTypes.DELETE_SUCCESS,
            errors: false,
            savedAlbums: [...savedAlbums]}
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

export const {getAll,getAllFail,getAllSuccess,add,addFail,addSuccess,update,updateSuccess,updateFail,drop,dropSuccess,dropFail,resetError} = savedAlbumSlice.actions
export default savedAlbumSlice.reducer


