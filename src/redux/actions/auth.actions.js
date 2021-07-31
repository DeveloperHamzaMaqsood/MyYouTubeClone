import firebase from 'firebase/app'
import auth from '../../Firebase'
import {
    LOGIN_FAIL,
    LOGIN_SUCCESS,
    LOGIN_REQUEST,
    LOAD_PROFILE,
    LOG_OUT
} from '../ActionTypes'

export const login = () => async dispatch => {
    try {
        dispatch({
            type : LOGIN_REQUEST,
        })

        const provider = new firebase.auth.GoogleAuthProvider()
        provider.addScope("https://www.googleapis.com/auth/youtube.force-ssl")
        const res = await auth.signInWithPopup(provider)
        console.log(res)

        const accessToken =res.credential.accessToken

        const profile = {
            name : res.additionalUserInfo.profile.displayName,
            photoURL : res.additionalUserInfo.profile.picture,
        }

        sessionStorage.setItem("ytc-access-token", accessToken)
        sessionStorage.setItem("ytc-user", JSON.stringify(profile))

        dispatch({
            type: LOGIN_SUCCESS,
            payload : accessToken,
        })

        dispatch({
            type : LOAD_PROFILE,
            payload : profile,
        })

    } catch (error) {
        dispatch({
            type : LOGIN_FAIL,
            payload : error.message
        })
    }
}


export const logout = () => async dispatch => {
    await auth.signOut()
    dispatch ({
        type : LOG_OUT
    })

    sessionStorage.removeItem("ytc-access-token")
    sessionStorage.removeItem("ytc-user")
}