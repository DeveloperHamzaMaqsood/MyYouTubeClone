import { HOME_VIDEOS_FAIL, HOME_VIDEOS_REQUEST, HOME_VIDEOS_SUCCESS } from "../ActionTypes"

const initial = {
    videos: [],
    loading : false,
    nextPageToken : null
}

const homeVideosReducer = (state = initial, action) => {
    switch(action.type){
        case HOME_VIDEOS_SUCCESS :
            return {
                ...state,
                videos : action.payload.video,
                loading : false,
                nextPageToken: action.payload.nextPageToken
            }

        case HOME_VIDEOS_FAIL:
            return {
                ...state,
                loading: false,
                error : action.payload
            }

        case HOME_VIDEOS_REQUEST:
            return {
                ...state,
                loading: true
            }

        default : return state
    }
}

    export default homeVideosReducer