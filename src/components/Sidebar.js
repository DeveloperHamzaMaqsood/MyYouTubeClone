import React from 'react'
import {Grid  , ListItem , List  , ListItemText , ListItemIcon ,makeStyles, Typography } from '@material-ui/core'
import HomeIcon from '@material-ui/icons/Home';
import { Divider } from '@material-ui/core';
import ExploreIcon from '@material-ui/icons/Explore';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import HistoryIcon from '@material-ui/icons/History';
import LibraryAddIcon from '@material-ui/icons/LibraryAdd';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import LiveTvIcon from '@material-ui/icons/LiveTv';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import SportsCricketIcon from '@material-ui/icons/SportsCricket';
import SettingsIcon from '@material-ui/icons/Settings';
import HelpIcon from '@material-ui/icons/Help';
import FeedbackIcon from '@material-ui/icons/Feedback';
import {Link} from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow : '1',
        backgroundColor : '#202020',
        color : '#C4BFAF',
        position: 'sticky',
        top : '60px',
        minWidth : '220px',
        paddingTop : '60px',
        [theme.breakpoints.down('md')]: {
            minWidth: '55px',
        },
        [theme.breakpoints.down('xs')]: {
            display : 'none'
        },

    },
    demo: {
        '& .MuiTypography-root' : {
            fontWeight : 'bold'
        },
        [theme.breakpoints.down('md')]: {
            marginTop : '0px',
            minHeight : '450vh'
        }
    },
    item : {
        maxHeight : '40px',
        paddingBottom : '-5px',
        '& .MuiTypography-root' : {
            fontSize : '15px'
        },
        [theme.breakpoints.down('md')]: {
            minWidth: '55px',
            maxWidth : '55px',
            minHeight : '55px',
        },
        '&:hover' : {
            color : '#fff',
            backgroundColor : '#383838'
        },
    },
    divid : {
        minHeight : '1px',
        marginTop : theme.spacing(2),
        marginBottom : theme.spacing(1),
        backgroundColor: '#C4BFAF',
        marginRight : '15px',
        [theme.breakpoints.down('md')]: {
            display: 'none'
        }
    },
    icon : {
        color: '#C4BFAF',
        [theme.breakpoints.down('md')]: {
            minHeight : '100%',
            maxHeight : '100%',
        }
    },
    subs : {
        marginLeft : '-20px',
    },
    subsLivelLogo : {
        paddingLeft : '50px',
        color : 'red',
        [theme.breakpoints.down('md')]: {
            display: 'none'
        }
    },
    subsHead : {
        marginLeft :'15px',
        marginBottom : '15px',
        marginTop : '10px',
        [theme.breakpoints.down('md')]: {
            display: 'none'
        }
    },
    copyWrites : {
        fontSize :'12px',
        textAlign: 'center'
    },
    name : {
        display : 'block',
        [theme.breakpoints.down('md')] : {
            display : 'none'
        },
        '&:hover': {
            color: '#fff',
            backgroundColor: '#383838'
        },
    },
    liveImg : {
        [theme.breakpoints.down('md')]: {
            display: 'none'
        },
        '&:hover': {
            color: '#fff',
            backgroundColor: '#383838'
        },
    }
}));

const Sidebar = () => {
    const classes = useStyles();

    return (
        <>
            <div className = {classes.root}>
                <Grid item >
                    <div className={classes.demo}>
                        <List >
                            <ListItem button className={classes.item} component={Link} to="/" >
                                <ListItemIcon className={classes.icon} >
                                    <HomeIcon />
                                </ListItemIcon>
                                <ListItemText className={classes.name} 
                                primary="Home"
                                />
                            </ListItem>
                            <ListItem button className={classes.item}>
                                <ListItemIcon className={classes.icon}>
                                    <ExploreIcon />
                                </ListItemIcon>
                                <ListItemText className={classes.name}
                                primary="Explore"
                                />
                            </ListItem>
                            <ListItem button className={classes.item}  >
                                <ListItemIcon className={classes.icon}>
                                    <SubscriptionsIcon />
                                </ListItemIcon>
                                <ListItemText className={classes.name}
                                primary="Subscription"
                                />
                            </ListItem>

                            <Divider className={classes.divid} />

                            <ListItem button className={classes.item}  >
                                <ListItemIcon className={classes.icon}>
                                    <LibraryAddIcon />
                                </ListItemIcon>
                                <ListItemText className={classes.name}
                                primary="Library"
                                />
                            </ListItem>
                            <ListItem button className={classes.item , classes.liveImg}  >
                                <ListItemIcon className={classes.icon}>
                                    <HistoryIcon />
                                </ListItemIcon>
                                <ListItemText className={classes.name}
                                primary="History"
                                />
                            </ListItem>
                            <ListItem button className={classes.item , classes.liveImg}  >
                                <ListItemIcon className={classes.icon}>
                                    <VideoLibraryIcon />
                                </ListItemIcon>
                                <ListItemText className={classes.name}
                                primary="Your Videos"
                                />
                            </ListItem>
                            <ListItem button className={classes.item , classes.liveImg}  component={Link} to="/watchLater">
                                <ListItemIcon className={classes.icon}>
                                    <WatchLaterIcon />
                                </ListItemIcon>
                                <ListItemText className={classes.name}
                                primary="Watch Later"
                                />
                            </ListItem>
                            <ListItem button className={classes.item , classes.liveImg} component={Link} to="/likeVideos"  >
                                <ListItemIcon className={classes.icon}>
                                    <ThumbUpAltIcon />
                                </ListItemIcon>
                                <ListItemText className={classes.name}
                                primary="Liked Videos"
                                />
                            </ListItem>
                            <ListItem button className={classes.item , classes.liveImg}  >
                                <ListItemIcon className={classes.icon}>
                                    <ExpandMoreIcon />
                                </ListItemIcon>
                                <ListItemText className={classes.name}
                                primary="See more"
                                />
                            </ListItem>

                            <Divider className={classes.divid} />

                            <Typography  component = "h6"
                            className = {
                                classes.subsHead
                            } >
                                Subscriptions
                            </Typography>

                            <ListItem button className={classes.item  , classes.liveImg}  >
                                <ListItemIcon >
                                    <img src="../images/t-series.png" width="20" height="20" alt="Channel Logo" />
                                </ListItemIcon>
                                <ListItemText className={classes.name , classes.subs}
                                primary="T-series"
                                />
                                <ListItemIcon  className = {
                                    classes.subsLivelLogo
                                } >
                                    <LiveTvIcon />
                                </ListItemIcon>
                            </ListItem>
                            <ListItem  button className = {
                                classes.item , classes.liveImg
                            } >
                                <ListItemIcon>
                                    <img src="../images/z-news.jpg" width="20" height="20" alt="Channel Logo" />
                                </ListItemIcon>
                                <ListItemText className={classes.name ,classes.subs}
                                primary="Zee Cine"
                                />
                                <ListItemIcon className = {
                                    classes.subsLivelLogo
                                } >
                                    <LiveTvIcon />
                                </ListItemIcon>
                            </ListItem>
                            <ListItem button className={classes.item , classes.liveImg }  >
                                <ListItemIcon>
                                    <img src="../images/ary-news.jpg" width="20" height="20" alt="Channel Logo" />
                                </ListItemIcon>
                                <ListItemText className={classes.name , classes.subs}
                                primary="Ary News"
                                />
                                <ListItemIcon className = {
                                    classes.subsLivelLogo
                                } >
                                    <LiveTvIcon />
                                </ListItemIcon>
                            </ListItem>
                            <ListItem  button className = {
                                classes.item,
                                classes.liveImg
                            } >
                                <ListItemIcon>
                                    <img src="../images/samaa.jpg" width="20" height="20" alt="Channel Logo" />
                                </ListItemIcon>
                                <ListItemText className={classes.name , classes.subs}
                                primary="Samaa Tv"
                                />
                                <ListItemIcon className = {
                                    classes.subsLivelLogo
                                } >
                                    <LiveTvIcon />
                                </ListItemIcon>
                            </ListItem>
                            <ListItem button className={classes.item , classes.liveImg}  >
                                <ListItemIcon>
                                    <img src="../images/trap.jpg" width="20" height="20" alt="Channel Logo" />
                                </ListItemIcon>
                                <ListItemText className={classes.name , classes.subs}
                                primary="Trap"
                                />
                                <ListItemIcon className = {
                                    classes.subsLivelLogo
                                } >
                                    <LiveTvIcon />
                                </ListItemIcon>
                            </ListItem>
                            <ListItem button className={classes.item , classes.liveImg}  >
                                <ListItemIcon>
                                    <img src="../images/92.png" width="20" height="20" alt="Channel Logo" />
                                </ListItemIcon>
                                <ListItemText className={classes.name , classes.subs}
                                primary="92 News"
                                />
                                <ListItemIcon className = {
                                    classes.subsLivelLogo
                                } >
                                    <LiveTvIcon />
                                </ListItemIcon>
                            </ListItem>

                            <Divider className={classes.divid} />

                            <Typography component="h6" className={classes.subsHead} >
                                More From Youtube
                            </Typography>

                            <ListItem button className={classes.item,  classes.liveImg}  >
                                <ListItemIcon className={classes.icon} >
                                    <SportsEsportsIcon />
                                </ListItemIcon>
                                <ListItemText className={classes.name}
                                primary="Gaming"
                                />
                            </ListItem>
                            <ListItem button className={classes.item , classes.liveImg}  >
                                <ListItemIcon className={classes.icon} >
                                    <LiveTvIcon />
                                </ListItemIcon>
                                <ListItemText className={classes.name}
                                primary="Live"
                                />
                            </ListItem>
                            <ListItem button className={classes.item , classes.liveImg}  >
                                <ListItemIcon className={classes.icon} >
                                    <SportsCricketIcon />
                                </ListItemIcon>
                                <ListItemText className={classes.name}
                                primary="Sports"
                                />
                            </ListItem>

                            <Divider className={classes.divid} />

                            <ListItem button className={classes.item , classes.liveImg}  >
                                <ListItemIcon className={classes.icon} >
                                    <SettingsIcon />
                                </ListItemIcon>
                                <ListItemText className={classes.name}
                                primary="Setting"
                                />
                            </ListItem>
                            <ListItem button className={classes.item , classes.liveImg}  >
                                <ListItemIcon className={classes.icon} >
                                    <HelpIcon />
                                </ListItemIcon>
                                <ListItemText className={classes.name}
                                primary="Help"
                                />
                            </ListItem>
                            <ListItem button className={classes.item , classes.liveImg}  >
                                <ListItemIcon className={classes.icon} >
                                    <FeedbackIcon />
                                </ListItemIcon>
                                <ListItemText className={classes.name}
                                primary="Send Feedback"
                                />
                            </ListItem>

                        </List>
                        <Typography component="p" className={classes.copyWrites , classes.liveImg} >
                            @ 2021 Google LLC
                        </Typography>
                    </div>
                </Grid>
            </div>
        </>
    )
}

export default Sidebar
