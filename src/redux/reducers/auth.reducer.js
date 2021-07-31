import {
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOG_OUT,
    LOGIN_REQUEST,
    LOAD_PROFILE
} from "../ActionTypes"

const initialState = {
    accessToken: sessionStorage.getItem('ytc-access-token') ? sessionStorage.getItem('ytc-access-token') : null,
    user: sessionStorage.getItem("ytc-user") ? JSON.stringify(sessionStorage.getItem("ytc-user")) : null,
    loading : false
}

const authReducer = (initial = initialState , action) => {

    switch(action.type){
        case LOGIN_REQUEST :
            return {
                ...initial,
                loading:true
            }

        case LOGIN_SUCCESS:
            return {
                ...initial,
                accessToken: action.payload,
                loading: false
            }

        case LOGIN_FAIL:
            return {
                ...initial,
                loading: false,
                accessToken:null,
                error : action.payload
            }

        case LOAD_PROFILE:
            return {
                ...initial,
                user : action.payload,
            }

        case LOG_OUT:
            return {
                ...initial,
                accessToken : null,
                user : null,
            }

        default  : return initial
    }
}

    export default authReducer