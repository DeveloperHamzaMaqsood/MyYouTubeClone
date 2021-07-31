import React from 'react'
import {Grid , Typography , makeStyles} from '@material-ui/core'
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';

const useStyles = makeStyles(theme => ({
    usersComments : {
        display :'flex',
        marginTop : '45px'
    },
    first : {
        maxWidth : '40px',
        minWidth : '40px',
        maxHeight : '40px',
        minHeight : '40px'
    },
    sec : {
        display: 'flex',
        flexDirection : 'column',
        marginLeft : '15px'
    },
    secFirst : {
        display : 'flex'
    },
    userName : {
        fontSize : '14px',
        fontWeight : '700',
        color : '#fff'
    },
    userDate : {
        fontSize : '13px',
        marginLeft : '7px',
        color : '#909090'
    },
    comment : {
        fontSize : '14px',
        color : '#fff',
        [theme.breakpoints.down('md')]: {
            maxWidth: '380px'
        },
    },
    likes : {
        display : 'flex',
        marginTop : '10px'
    },
    likeIcon : {
        fontSize : '17px',
        marginRight : '7px',
        color : '#909090'
    },
    likeIconText : {
        fontSize : '12px',
        color : '#909090',
        fontWeight :'500'
    },
    dislikeIcon : {
        marginLeft : '25px',
        fontSize: '17px',
        marginRight: '7px',
        color: '#909090'
    },
    reply : {
        fontSize : '14px',
        marginLeft : '20px',
        color : '#909090',
        fontWeight : '500'
    }
}))

const UsersComments = () => {
    const classes = useStyles()
    return (
        <>
            <div className={classes.usersComments}>
                    <Grid item className={classes.first}>
                        <img src="../../images/samaa.jpg" width="100%" height="100%"  style={{borderRadius : '50%'}} alt="User  Profile"/>
                    </Grid>
                    <Grid item className={classes.sec}>
                        <div className={classes.secFirst}>
                            <Typography component="h6" className={classes.userName}>Arishfa Dz</Typography>
                            <Typography component="h6" className={classes.userDate}>4 days ago</Typography>
                        </div>
                        <Typography component = "h6"
                        className = {
                            classes.comment
                        } > Can 't believe the song completed 1 year.... It litteraly feels like it was released yesterday </Typography>
                        <div className={classes.likes}>
                            <ThumbUpAltIcon className={classes.likeIcon}/> <Typography className={classes.likeIconText}>112</Typography>
                            <ThumbDownIcon className={classes.dislikeIcon}/> <Typography className={classes.likeIconText}>112</Typography>
                            <Typography className={classes.reply}>Reply</Typography>
                        </div>
                    </Grid>
                </div>

                <div className={classes.usersComments}>
                    <Grid item className={classes.first}>
                        <img src="../../images/samaa.jpg" width="100%" height="100%"  style={{borderRadius : '50%'}} alt="User  Profile"/>
                    </Grid>
                    <Grid item className={classes.sec}>
                        <div className={classes.secFirst}>
                            <Typography component="h6" className={classes.userName}>Arishfa Dz</Typography>
                            <Typography component="h6" className={classes.userDate}>4 days ago</Typography>
                        </div>
                        <Typography component = "h6"
                        className = {
                            classes.comment
                        } > Can 't believe the song completed 1 year.... It litteraly feels like it was released yesterday </Typography>
                        <div className={classes.likes}>
                            <ThumbUpAltIcon className={classes.likeIcon}/> <Typography className={classes.likeIconText}>112</Typography>
                            <ThumbDownIcon className={classes.dislikeIcon}/> <Typography className={classes.likeIconText}>112</Typography>
                            <Typography className={classes.reply}>Reply</Typography>
                        </div>
                    </Grid>
                </div>



                <div className={classes.usersComments}>
                    <Grid item className={classes.first}>
                        <img src="../../images/samaa.jpg" width="100%" height="100%"  style={{borderRadius : '50%'}} alt="User  Profile"/>
                    </Grid>
                    <Grid item className={classes.sec}>
                        <div className={classes.secFirst}>
                            <Typography component="h6" className={classes.userName}>Arishfa Dz</Typography>
                            <Typography component="h6" className={classes.userDate}>4 days ago</Typography>
                        </div>
                        <Typography component = "h6"
                        className = {
                            classes.comment
                        } > Can 't believe the song completed 1 year.... It litteraly feels like it was released yesterday </Typography>
                        <div className={classes.likes}>
                            <ThumbUpAltIcon className={classes.likeIcon}/> <Typography className={classes.likeIconText}>112</Typography>
                            <ThumbDownIcon className={classes.dislikeIcon}/> <Typography className={classes.likeIconText}>112</Typography>
                            <Typography className={classes.reply}>Reply</Typography>
                        </div>
                    </Grid>
                </div>



                <div className={classes.usersComments}>
                    <Grid item className={classes.first}>
                        <img src="../../images/samaa.jpg" width="100%" height="100%"  style={{borderRadius : '50%'}} alt="User  Profile"/>
                    </Grid>
                    <Grid item className={classes.sec}>
                        <div className={classes.secFirst}>
                            <Typography component="h6" className={classes.userName}>Arishfa Dz</Typography>
                            <Typography component="h6" className={classes.userDate}>4 days ago</Typography>
                        </div>
                        <Typography component = "h6"
                        className = {
                            classes.comment
                        } > Can 't believe the song completed 1 year.... It litteraly feels like it was released yesterday </Typography>
                        <div className={classes.likes}>
                            <ThumbUpAltIcon className={classes.likeIcon}/> <Typography className={classes.likeIconText}>112</Typography>
                            <ThumbDownIcon className={classes.dislikeIcon}/> <Typography className={classes.likeIconText}>112</Typography>
                            <Typography className={classes.reply}>Reply</Typography>
                        </div>
                    </Grid>
                </div>
        </>
    )
}

export default UsersComments
