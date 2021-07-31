import React from 'react'
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {  makeStyles  , Typography , Divider} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    RightSec : {
        display : 'flex',
        paddingTop : '02px',
        backgroundColor : '#0F0F0F',
        minWidth : '730px',
        maxWidth : '730px',
        maxHeight : '120px',
        marginTop : '07px',
        borderBottom : '1px solid #909090',
        paddingBottom : '20px',
        paddingLeft : '10px',
        [theme.breakpoints.down("md")]: {
            minWidth: '500px',
            maxWidth: '500px',
            marginLeft : '20px',
        },
        [theme.breakpoints.down("sm")]: {
            minWidth: '300px',
            maxWidth: '300px',
            marginLeft: '20px',
            overflow: 'hidden'
        },
        [theme.breakpoints.down("xs")]: {
            minWidth: '100px',
            maxWidth: '100px',
            maxHeight : '60px',
            minHeight : '60px',
            marginLeft: '20px',
            overflow: 'hidden',
            paddingTop : '01px',
            paddingLeft : '0px'
        },
    },
    dual : {
        display : 'flex',
        flexDirection : 'column',
    },
    span : {
        marginTop : '-25px',
        marginLeft : '110px',
        backgroundColor : 'black',
        fontSize : '12px',
        color : '#fff',
        fontWeight : '500',
        paddingLeft : '5px',
        [theme.breakpoints.down("xs")]: {
            marginLeft: '70px',
            marginTop: '-40px',
            paddingLeft: '2px',
            fontSize: '10px',
        },
    },
    RightImage : {
        minWidth : "150px",
        maxHeight : '80px'
    },
    desc : {
        display : 'flex',
        flexDirection : 'column',
        minWidth : '480px',
        maxWidth : '480px',
        marginLeft : '15px',
        [theme.breakpoints.down("md")]: {
            minWidth : '280px',
            maxWidth : '280px',
            marginLeft : '15px',
        },
    },
    descFirst : {
        fontSize : '17px',
        color : '#fff',
        fontWeight : '500'
    },
    descSec : {
        fontSize : '14px',
        color : '#909090',
        fontWeight : '400',
        marginTop : '8px'
    },
    moreIcon : {
        fontSize : '25px',
        marginTop : '20px',
        color : '#fff',
        marginLeft : '20px',
        [theme.breakpoints.down("md")]: {
            marginLeft : '0px'
        },

    },
    divide: {
        backgroundColor: 'red',
        minHeight: '10px',
    },
    mainRight : {
        display : 'flex',
        flexDirection : 'column'
    }
}))

const MainLikedVideos = () => {
    const classes = useStyles();
    return (
        <>
            <div className={classes.mainRight}>
                        <div className={classes.RightSec}>
                            <div className={classes.dual}>
                                <img src="../../images/common1.jpg" alt="Video Photo" className={classes.RightImage} />
                                <span className={classes.span}>15.56</span>
                            </div>
                            <div className={classes.desc}>
                                <Typography component="h6" className={classes.descFirst}>Sar e Aam | Iqrar  ur Hassan | Ary News | 16 July 2021</Typography>
                                <Typography component="h6" className={classes.descSec}>Ary News</Typography>
                            </div>
                            <MoreVertIcon className={classes.moreIcon} />
                        </div>
                        
                        <div className={classes.RightSec}>
                            <div className={classes.dual}>
                                <img src="../../images/common1.jpg" alt="Video Photo" className={classes.RightImage} />
                                <span className={classes.span}>15.56</span>
                            </div>
                            <div className={classes.desc}>
                                <Typography component="h6" className={classes.descFirst}>Sar e Aam | Iqrar  ur Hassan | Ary News | 16 July 2021</Typography>
                                <Typography component="h6" className={classes.descSec}>Ary News</Typography>
                            </div>
                            <MoreVertIcon className={classes.moreIcon} />
                        </div>

                        <div className={classes.RightSec}>
                            <div className={classes.dual}>
                                <img src="../../images/common1.jpg" alt="Video Photo" className={classes.RightImage} />
                                <span className={classes.span}>15.56</span>
                            </div>
                            <div className={classes.desc}>
                                <Typography component="h6" className={classes.descFirst}>Sar e Aam | Iqrar  ur Hassan | Ary News | 16 July 2021</Typography>
                                <Typography component="h6" className={classes.descSec}>Ary News</Typography>
                            </div>
                            <MoreVertIcon className={classes.moreIcon} />
                        </div>


                        <div className={classes.RightSec}>
                            <div className={classes.dual}>
                                <img src="../../images/common1.jpg" alt="Video Photo" className={classes.RightImage} />
                                <span className={classes.span}>15.56</span>
                            </div>
                            <div className={classes.desc}>
                                <Typography component="h6" className={classes.descFirst}>Sar e Aam | Iqrar  ur Hassan | Ary News | 16 July 2021</Typography>
                                <Typography component="h6" className={classes.descSec}>Ary News</Typography>
                            </div>
                            <MoreVertIcon className={classes.moreIcon} />
                        </div>


                        <div className={classes.RightSec}>
                            <div className={classes.dual}>
                                <img src="../../images/common1.jpg" alt="Video Photo" className={classes.RightImage} />
                                <span className={classes.span}>15.56</span>
                            </div>
                            <div className={classes.desc}>
                                <Typography component="h6" className={classes.descFirst}>Sar e Aam | Iqrar  ur Hassan | Ary News | 16 July 2021</Typography>
                                <Typography component="h6" className={classes.descSec}>Ary News</Typography>
                            </div>
                            <MoreVertIcon className={classes.moreIcon} />
                        </div>
                    </div>

        </>
    )
}

export default MainLikedVideos
