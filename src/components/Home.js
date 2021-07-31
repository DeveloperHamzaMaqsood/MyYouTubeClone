import React from 'react'
import { Grid , makeStyles } from '@material-ui/core';
import Header from './Header'
import Sidebar from './Sidebar'
import RightSideSec from './RightSideSec/Main'

const useStyle = makeStyles(theme => ({
    root: {
        padding: theme.spacing(1),
        backgroundColor: '#202020',
    },
    sidebar: {
        display: '250px',
    },

}))


const Home = () => {
    const classes = useStyle()
    return (
        <>
        <Header/>
            <Grid container className={classes.root}>
                <Grid item lg={2} >
                <div  className = {
                    classes.sidebar
                } >
                    <Sidebar/>
                </div>
                </Grid>
                <Grid item lg={10}>
                <div className={classes.right}>
                <RightSideSec/>
                </div>
                </Grid>
            </Grid>
        </>
    )
}

export default Home
