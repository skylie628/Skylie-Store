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
    .then(response => setTimeout(()=>dispatch(addSuccess({data: {id : response.data.id,...payload,account}})),1000))
    .catch(response =>setTimeout(()=>dispatch(addFail({data: response.errors })),1000))
}

export  const updateComment = (payload) => async(dispatch) =>{
    dispatch(update())
    apiUpdateComment(payload)
    .then(response => setTimeout(()=>dispatch(updateSuccess({data: {id : response.data.id,...payload}})),1000))
    .catch(response =>setTimeout(()=>dispatch(updateFail({data: response.errors })),1000))
}

export  const deleteComment = (payload) => async(dispatch) =>{
    console.log('deleted payload là',payload)
    dispatch(drop())
    apiDeleteComment(payload)
    .then(response => setTimeout(()=>dispatch(dropSuccess(payload)),1000))
    .catch(response =>setTimeout(()=>dispatch(dropFail({data: response.errors })),1000))
}
export  const ResetError = ()=>(dispatch)=>{
    dispatch(resetError({data:null}))
}

export  const ResetState = ()=>(dispatch)=>{
    dispatch(resetState({data:null}))
}