import React , {useEffect} from 'react'
import { makeStyles, Button , Typography } from '@material-ui/core'
import {useDispatch , useSelector} from 'react-redux'
import {login} from '../../redux/actions/auth.actions'
import {useHistory} from 'react-router-dom'

const useStyles = makeStyles(theme => ({
    mainDiv : {
        backgroundColor : 'black',
        width : '400px',
        height : '400px',
        display : 'flex',
        flexDirection : 'column'
    },
    btn : {
        backgroundColor : 'red',
        color : '#fff'
    }
}))

const LoginScreen = () => {
    const classes = useStyles()
    const dispatch = useDispatch()
    const accessToken = useSelector(state => state.auth.accessToken)
    const handleLogin = () => {
        dispatch(login())
    }

    const history = useHistory()

    useEffect (() => {
        if(accessToken) {
            history.push("/")
        }
    } , [accessToken ,history ])

    return (
        <>
            <div className={classes.mainDiv}>
                <Typography component="h6">YouTube Clone</Typography>
                <img src="../../images/logo.png" width="100px" height="100px" />
                <Button className={classes.btn} onClick={handleLogin}>Login With Google</Button>
                <Typography component="h6">This Product is made by using YouTube Data Api</Typography>
            </div>
        </>
    )
}

export default LoginScreen
