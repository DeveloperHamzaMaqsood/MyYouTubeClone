import React from 'react'
import Details from './Details'
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {GoVerified} from 'react-icons/go'
import {makeStyles , Typography} from '@material-ui/core'
import {Link} from 'react-router-dom'

const useStyles = makeStyles(theme => ({
        root : {
        marginLeft : '30px',
        marginTop : '7px',
        marginRight : '10px',
        maxHeight : '105px',
        minHeight : '105px',
        backgroundColor : '#181818',
        color : 'white',
        boxShadow : 'none',
        [theme.breakpoints.down('sm')]: {
            minWidth : '550px'
        },
        [theme.breakpoints.down('xs')]: {
            marginLeft: '-50px',
        },
    },
    cardAction : {
        display : 'flex',
        marginLeft : '-10px',
        marginTop : '0px'

    },
    media : {
        maxWidth : '0px',
        minWidth : '170px',
        maxHeight : '120px',
        minHeight : '120px',
        [theme.breakpoints.down("md")] : {
            maxWidth : '140px',
            minWidth : '140px',
        },
        [theme.breakpoints.down('xs')]: {
            minWidth : '170px'
        },
    },
    secRoot : {
        display : 'flex',
        flexDirection : 'column',
        [theme.breakpoints.down('sm')]: {
            minWidth : '150px',
            paddingLeft : '20px'
        },
    },
    secRight: {
        display: 'flex',
        flexDirection: 'column',
        marginLeft: '2px',
        marginTop : '-0px',
        minHeight : '110px',
        maxHeight : '110px',
        [theme.breakpoints.down('sm')]: {
            minWidth : '250px',
            maxWidth : '250px',
        },
        [theme.breakpoints.down('xs')]: {
        },
    },
    desc : {
        marginTop : '-5px',
        marginBottom: '-20px',
        marginLeft : '03px',
        marginRight : '-15px',
        [theme.breakpoints.down('sm')]: {
            minWidth: '200px',
            marginLeft : '5px'
        },
        [theme.breakpoints.down('xs')]: {
        },
    },
    dura_span : {
        backgroundColor :'#202020',
        marginTop : '-50px',
        minHeight : '20px',
        marginLeft : '132px',
        fontSize : '13px',
        paddingLeft :'4px',
        fontWeight : '500',
        minWidth : '35px',
        color : 'white',
        [theme.breakpoints.down('md')]: {
            marginLeft: '105px',
        },
        [theme.breakpoints.down('sm')]: {
            marginLeft: '130px',
        },
    },
    text : {
        fontSize : '14px',
        marginBottom : '5px',
        fontWeight :'500',
        minHeight: '45px',
        maxHeight: '45px',
        overflow :'hidden',
        color : 'white',
        marginLeft: '-10px',
        [theme.breakpoints.down('md')]: {
            fontSize : '13px',
            marginLeft: '-10px',
        },
        [theme.breakpoints.down('sm')]: {
            fontSize : '17px'
        },
        [theme.breakpoints.down('sm')]: {
            fontSize : '12px'
        },
    },
    chanlText : {
        fontSize : '13px',
        color : 'grey',
        marginLeft : '-7px',
        [theme.breakpoints.down('md')]: {
            fontSize: '10px'
        },
        [theme.breakpoints.down('md')]: {
            fontSize: '12px'
        },
    },
    iconMore : {
        marginTop : '-55px',
        paddingLeft : '0px',
    },
    linkName : {
        color : '#fff',
        textDecoration : 'none',
        '&:hover' : {
            color :'#fff'
        }
    }
}))

const MainVid = () => {
    const classes = useStyles();
    return (
        <>
            {
                Object.values(Details).map((det) => ((
                    <>
                    <Card className={classes.root}>
                            <CardActionArea className={classes.cardAction} >
                                <div className={classes.secRoot}>
                                    <img src={`../../images/${det.img}`} className={classes.media}  />
                                    <span className={classes.dura_span} >4.28</span>
                                </div>
                                <CardContent className={classes.secRight}>
                                    <div  className = { classes.desc } >
                                            <Typography  component="h6"
                                                className = {classes.text} >
                                                    <Link to={`/videos/${det.id}`} className={classes.linkName}>{det.desc}</Link>
                                            </Typography>
                                            <Typography className={classes.chanlText} >
                                                {det.channelName} <GoVerified/>
                                            </Typography>
                                            <Typography className={classes.chanlText} >
                                                {det.views} views . {det.timeAgo} ago
                                            </Typography>
                                    </div>
                                </CardContent>
                                <div className={classes.iconMore}>
                                    <MoreVertIcon className={classes.icon} />
                                </div>
                            </CardActionArea>
                        </Card>
                        
                        
                        </>
                )))
            }
        </>
    )
}

export default MainVid
