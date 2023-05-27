import { createSlice } from "@reduxjs/toolkit";
import actionTypes  from "../actions/actionTypes"

const initialState = {
  action : null,
  errors: null,
  enableComment: 0,
  comments: []
};
const commentSlice = createSlice({
    name: 'comment',
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
          comments: [...action.payload.data.comments],
          enableComment: action.payload.data.enableComment
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
        enableComment:0,
         comments:[
          action.payload.data,
          ...state.comments,]}
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
          const {rating,content} = action.payload.data
          state.comments.forEach(comment =>{
            if (comment.id == action.payload.data.id){
              comment.rating =rating;
              comment.content =content;
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
         const comments =[];
         console.log("reducer drop là",action.payload)
          state.comments.forEach((comment)=>{
            if(comment.id !== action.payload){
              comments.push(comment)
            }
          })
          return {
            ...state,
            enableComment:1,
            action: actionTypes.DELETE_SUCCESS,
            errors: false,
            comments: [...comments]}
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
         }},

         resetState: (state,action) =>{
            return initialState}
  }})

export const {getAll,getAllFail,getAllSuccess,add,addFail,addSuccess,update,updateSuccess,updateFail,drop,dropSuccess,dropFail,resetError,resetState} = commentSlice.actions
export default commentSlice.reducer


