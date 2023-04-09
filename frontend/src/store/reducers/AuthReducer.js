import actionTypes  from "../actions/actionTypes"

const initialState = {
    islogged: true,
    userToken: null, // for storing the JWT\
    msg: '',
  }
const authReducer = (state = initialState, action) =>{
    switch(action.type) {
        case actionTypes.REGISTER_SUCCESS :
            return {
                ...state,
                islogged: true,
                userToken: action.data
            }
        case actionTypes.REGISTER_FAIL:
            return{
                ...state,
                islogged: false,
                userToken: null,
                msg: action.data
            }

    }
}
export default authReducer