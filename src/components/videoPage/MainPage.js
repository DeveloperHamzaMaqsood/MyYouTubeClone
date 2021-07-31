import { Grid , makeStyles , Typography  , Divider , TextField} from '@material-ui/core'
import React from 'react'
import ReactPlayer from 'react-player'
import Categories from './Categories'
import RelatedVideos from './relatedVideos/MainVid'
import LikeAndShare from './LikeandShare'
import ChannelInfo from './ChannelInfo'
import SongDetail from './Videodesc'
import TotComments from './TotComments'
import SelfComment from './selfComment'
import UsersComments from './Commentsusers/UsersComments'
import Header from '../Header'
import {useParams} from 'react-router-dom'
import {
    Details,
    NewsDetails,
    SportNews,
    CommonNews
} from '../RightSideSec/videos/Videosdetails'


const useStyles = makeStyles (theme => ({
    MainRoot : {
        paddingLeft : '90px',
        paddingTop : '90px',
        overflow : 'hidden',
        height : '100%',
        backgroundColor : '#181818',
        [theme.breakpoints.down("md")] : {
            paddingLeft: '20px',
        },
        [theme.breakpoints.down("sm")]: {
        },
    },
    playerWrapper : {
        minHeight : '400px',
        [theme.breakpoints.down("sm")]: {
            paddingLeft : '120px',
            paddingRight : '120px'
        },
        [theme.breakpoints.down("xs")]: {
            paddingLeft: '0px',
            paddingRight: '0px',
            maxWidth : '450px'
        },
    },
    rightSide : {
        marginRight : '120px',
        [theme.breakpoints.down("md")] : {
            backgroundColor: 'red',
            marginRight: '60px',
        },
        [theme.breakpoints.down("md")]: {
            marginRight: '20px',
        },
    },
    divid : {
        marginTop : '15px',
        minHeight : '1px',
        backgroundColor : '#909090'
    },
    
}));

const MainPage = () => {
    const classes = useStyles();
    const {id} = useParams()
    console.log(id)
    let check = false
    const data = Object.values(Details).map((det) => {
        if(id == det.id){
            check = true
            return det.url
        }
    })
    console.log(data)
    return (
        <>
        <Header/>
            <Grid container className={classes.MainRoot}>
                <Grid item md={7}>
                <div className={classes.playerWrapper}>
                    <ReactPlayer
                        className={classes.reactPlayer}
                        url = {`${data}`}
                        width= '100%'
                        height= '400px'
                        controls = "true"
                    />
                </div>
                <LikeAndShare/>
                <Divider className={classes.divid} />
                <ChannelInfo/>
                <SongDetail/>
                <Divider className={classes.divid} />
                <TotComments/>
                <SelfComment/>
                <UsersComments/>
                </Grid>

                <Grid item md={5} >
                    <div className={classes.rightSide}>
                        <Categories/>
                        <RelatedVideos/>
                    </div>
                </Grid>
            </Grid>
        </>
    )
}

export default MainPage
