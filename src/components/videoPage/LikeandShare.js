import React from 'react'
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import {IoMdShareAlt} from 'react-icons/io'
import {MdWatchLater} from 'react-icons/md'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import{makeStyles , Typography} from '@material-ui/core'
import {useParams} from 'react-router-dom'
import {
    Details,
    NewsDetails,
    SportNews,
    CommonNews
} from '../RightSideSec/videos/Videosdetails'


const useStyles = makeStyles(theme => ({
    BelowVideo : {
        display : 'flex',
        flexDirection : 'column',
        [theme.breakpoints.down("xs")]: {
            paddingLeft: '0px',
            paddingRight: '0px',
            maxWidth: '450px'
        },
    },
    tags : {
        color: '#1E90FF',
        marginTop : '10px',
        fontSize : '13px'
    },
    singName : {
        color : 'white',
        marginTop : '10px',
        fontSize : '18px'
    },
    likeAndshare : {
        display : 'flex',
        marginTop : '10px'
    },
    LikeViews : {
        color : '#909090 ',
        [theme.breakpoints.down("xs")]: {
            display : 'none'
        },
    },
    likeText : {
        fontSize : '14px',
        [theme.breakpoints.down('md')]: {
            fontSize: '11px'
        },
        [theme.breakpoints.down('sm')]: {
            fontSize : '14px'
        },
        [theme.breakpoints.down("xs")]: {
            fontSize : '12px'
        },
    },
    space : {
        backgroundColor : '#181818',
        minWidth : '155px',
        [theme.breakpoints.only('sm')]: {
            minWidth: '250px',
        },
        [theme.breakpoints.only('md')]: {
            minWidth: '80px'
        },
        [theme.breakpoints.down("xs")]: {
            display : 'none'
        },
    },
    likeRight : {
        color : '#909090',
        fontWeight : '700',
        fontSize : '15px',
        marginRight : '20px',
        [theme.breakpoints.down('md')]: {
            fontSize: '13px',
            marginRight: '15px',
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: '15px',
            marginRight: '30px',
        },
    },
    likeBtn : {
        color : '#909090'
    },
    share : {
        fontSize : '30px',
        [theme.breakpoints.down('md')]: {
            marginTop: '-7px',
        },
    },
    save : {
        fontSize : '20px'
    },
    more : {
        fontSize : '25px'
    }
}))

const LikeandShare = () => {
    const classes = useStyles()
    const {
        id
    } = useParams()
    console.log(id)
    let check = false
    const title = Object.values(Details).map((det) => {
        if (id == det.id) {
            check = true
            return det.desc
        }
    })
    console.log(title)
    return (
        <>
            <div className={classes.BelowVideo}>
                <Typography component="h6" className={classes.tags}>
                    #IshHai #AryDigital #RahatFatehAliKhan
                </Typography>
                <Typography component="h6" className={classes.singName}>
                    {title}
                </Typography>
                <div className={classes.likeAndshare}>
                    <div className={classes.LikeViews} >
                        <Typography className={classes.likeText}>29,014,402 views. 22 Dec 2021</Typography>
                    </div>
                    <div className={classes.space }>
                    </div>
                    <div className={classes.likeRight}>
                        <ThumbUpAltIcon className={classes.likeBtn} /> 2.4M
                    </div>
                    <div className={classes.likeRight}>
                        <ThumbDownIcon className={classes.likeBtn} /> 122k
                    </div>
                    <div className={classes.likeRight}>
                        <IoMdShareAlt className={classes.likeBtn, classes.share} /> Share
                    </div>
                    <div className={classes.likeRight}>
                        <MdWatchLater className={classes.likeBtn , classes.save} /> Save
                    </div>
                    <div className={classes.likeRight}>
                        <MoreHorizIcon className={classes.more} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default LikeandShare
