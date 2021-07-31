import { Grid , makeStyles  , Typography , Divider} from '@material-ui/core'
import React from 'react'
import Header from '../Header'
import LeftSide from '../Sidebar'
import LeftMiddle from './LeftMiddleSide'
import RightLast from './MainWatchedVideos'


const useStyles = makeStyles(theme => ({
    rootMain : {
        display  : 'flex',
        backgroundColor : '#181818',
        paddingTop : '60px',
        minHeight : '201vh',
        [theme.breakpoints.down("md")] : {
            paddingTop : '-100px',
            minHeight : '150vh'
        },
    },
    leftside: {
        maxWidth : '240px',
        minWidth : '240px',
        marginTop : '-50px',
        [theme.breakpoints.down("md")]: {
            maxWidth : '55px',
            minWidth : '55px',
            maxHeight : '100vh',
            minHeight : '100vh'
        },
        [theme.breakpoints.down("sm")]: {
            display : 'none'
        },
    },
    Right : {
        display : 'flex',
    },
    color : {
        backgroundColor: '#0F0F0F',
    }
}))

const MainLiked = () => {
    const classes = useStyles();
    return (
        <>
        <Header/>
            <Grid container className={classes.rootMain}>
                <Grid item className={classes.leftside}>
                    <LeftSide/>
                </Grid>
                <Grid item className={classes.Right}>
                    <LeftMiddle/>
                    <div className={classes.color}>
                        <RightLast/>
                    </div>
                </Grid>
            </Grid>
        </>
    )
}

export default MainLiked
