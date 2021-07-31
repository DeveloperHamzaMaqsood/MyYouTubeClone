import { Typography } from '@material-ui/core';
import { Grid , makeStyles , Divider} from '@material-ui/core'
import Categories from './categories/Catgories'
import React from 'react'
import Video from './videos/MainVideos'

const useStyles = makeStyles(theme => ({
    root : {
        backgroundColor : '#181818',
    },
    leftSide : {
        backgroundColor : '#202020',
        color : '#C4BFAF',
        borderTop : '1px solid dimGrey',
        borderBottom: '1px solid dimGrey',
        minWidth : '100%'
    },
}))

const Main = () => {
    const classes = useStyles();
    return (
        <>
            <Grid  container className={classes.root}  >
                <div  className = {classes.leftSide} >
                    <Categories/>
                </div>
                <Video/>
            </Grid>
        </>
    )
}

export default Main
