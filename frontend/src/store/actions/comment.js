import {getAll,getAllFail,getAllSuccess,add,addFail,addSuccess,update,updateSuccess,updateFail, drop,dropSuccess,dropFail,resetError, resetState} from "../reducers/commentSlice";
import { apiGetComments, apiAddComment, apiUpdateComment,apiDeleteComment } from "../../services/comment";
export  const fetchComments = (payload) => async(dispatch) =>{
        dispatch(getAll())
        apiGetComments(payload)
        .then(response => dispatch(getAllSuccess(response)))
        .catch(response =>dispatch(getAllFail({data: 'Khong the get duoc'})))
    }
  

export  const addComment = ({account,...payload}) => async(dispatch) =>{
    dispatch(add())
    apiAddComment(payload)
    .then(response => dispatch(addSuccess({data: {id : response.data.id,...payload,account}})))
    .catch(response =>dispatch(addFail({data: response.errors })))
}

export  const updateComment = (payload) => async(dispatch) =>{
    dispatch(update())
    apiUpdateComment(payload)
    .then(response => setTimeout(()=>dispatch(updateSuccess({data: {id : response.data.id,...payload}})),2000))
    .catch(response =>setTimeout(()=>dispatch(updateFail({data: response.errors })),1000))
}

export  const deleteComment = (payload) => async(dispatch) =>{
    console.log('deleted payload là',payload)
    dispatch(drop())
    apiDeleteComment(payload)
    .then(response => dispatch(dropSuccess(payload)))
    .catch(response =>dispatch(dropFail({data: response.errors })))
}
export  const ResetError = ()=>(dispatch)=>{
    dispatch(resetError({data:null}))
}

export  const ResetState = ()=>(dispatch)=>{
    dispatch(resetState({data:null}))
}