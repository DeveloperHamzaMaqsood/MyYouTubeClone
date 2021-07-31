import React from 'react'
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import LockIcon from '@material-ui/icons/Lock';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { Grid , makeStyles , IconButton , Typography , Divider} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    RightFirst : {
        minWidth : '360px',
        marginTop : '25px',
        paddingLeft : '25px',
        display : 'flex',
        flexDirection : 'column',
        position : 'sticky',
        top : '0',
        [theme.breakpoints.down("md")]: {
            minWidth : '300px',
            maxWidth: '300px',
            paddingLeft : '10px'
        },
        [theme.breakpoints.down("sm")]: {
            minWidth: '350px',
            maxWidth: '350px',
            paddingLeft: '10px'
        },
    },
    LikedImage : {
        maxWidth : '100%',
        height : '180px'
    },
    midd : {
        display : 'flex',
        justifyContent : 'center',
        backgroundColor : '#030406',
        marginTop : '-50px',
        maxWidth: '100%',
    },
    IconPlay : {
        color : '#fff',
        fontSize : '25px'
    },
    IconPlayText : {
        fontSize : '20px',
        fontWeight : '400',
        color: '#fff',
        paddingLeft : '10px'
    },
    Likedtext : {
        fontSize : '22px',
        fontWeight : '500',
        marginTop : '10px',
        color : '#fff'
    },
    LikedDim : {
        color : '#909090',
        fontSize : '14px',
        fontWeight : '400',
        [theme.breakpoints.down("md")]: {
           fontSize :'12px'
        },
    },
    LockIconMain : {
        backgroundColor : '#202020',
        maxWidth : '80px',
        maxHeight : '30px',
        marginTop : '25px',
        justifyContent : 'center'
    },
    lockIcon : {
        fontSize : '13px',
        marginTop: '-8px',
        color : '#909090'
    },
    LockPlayText : {
        fontSize : '13px',
        marginTop: '-8px',
        color: '#909090'
    },
    shuffle : {
        display : 'flex',
        marginTop : '20px'
    },
    shuleFirst : {
        fontSize : '27px',
        color : '#909090',
        marginRight : '20px'
    },
    shuleSec: {
        fontSize: '27px',
        color: '#909090',
    },
    divid : {
        marginTop : '20px',
        backgroundColor : '#909090',
        minHeight : '1px',
    },
    User : {
        display : 'flex',
        marginTop : '20px'
    },
    userName : {
        fontSize : '17px',
        color : '#fff',
        marginLeft :'20px',
        marginTop : '10px'
    }
}))

const LeftMiddleSide = () => {
    const classes = useStyles()
    return (
        <>
            <div className={classes.RightFirst}>
                <img src="../../images/common1.jpg" alt="Liked Image" className={classes.LikedImage} />
                <div className={classes.midd}>
                    <IconButton>
                        <PlayArrowIcon className={classes.IconPlay}/>
                        <Typography component="h6" className={classes.IconPlayText}>Play All</Typography>
                    </IconButton>
                </div>
                <Typography component="h6" className={classes.Likedtext} >Watch Later </Typography>
                <Typography component="h6" className={classes.LikedDim} >80 videos . Updated today</Typography>
                <div  className = {
                    classes.LockIconMain
                } >
                    <IconButton  >
                    <LockIcon className={classes.lockIcon}/>
                    <Typography component="h6" className={classes.LockPlayText}>Private</Typography>
                </IconButton>
                </div>
                <div className={classes.shuffle}>
                    <ShuffleIcon  className={classes.shuleFirst}/>
                    <MoreHorizIcon className={classes.shuleSec} />
                </div>
                <Divider className={classes.divid}/>
                <div className={classes.User}>
                    <img src="../../images/samaa.jpg" width="50" height="50" style={{borderRadius:'50%' }} alt="User Profile"/>
                    <Typography component="h6" className={classes.userName}>Hamza  Maqsood</Typography>
                </div>
            </div>
        </>
    )
}

export default LeftMiddleSide
