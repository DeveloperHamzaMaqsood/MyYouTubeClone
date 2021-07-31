import React from "react";
import { Divider, Grid, makeStyles } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { Typography } from "@material-ui/core";
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {GoVerified} from 'react-icons/go'
import {
    Details,
    NewsDetails,
    SportNews,
    CommonNews
} from './Videosdetails'
import {Link} from 'react-router-dom'

const useStyles = makeStyles(theme => ({
    mainRoot : {
        marginTop: '140px',
        marginLeft : '10px',
        [theme.breakpoints.down('md')]: {
            marginLeft : '30px',
            marginTop : '120px',
            maxWidth : '990px',
            minWidth : '750px',
            overflow : 'hidden',
        },
        [theme.breakpoints.down('sm')]: {
            marginLeft : '25px',
            maxWidth : '700px',
            minWidth : '450px',
            overflow : 'hidden',

        },
        [theme.breakpoints.down('xs')]: {
            marginLeft: '50px',
            maxWidth: '450px',
            minWidth: '350px',
            overflow: 'hidden',
        },
    },

    divid: {
        minHeight: '4px',
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(1),
        backgroundColor: 'dimGrey',
        minWidth : '100%',
        [theme.breakpoints.down('xs')]: {
            display : 'none'
        },
    },
    covidText : {
        color : '#FFFFFF',
        display :'block',
        width : '100%',
        fontSize : '20px',
        marginTop : theme.spacing(2),
        marginBottom : '20px',
        marginLeft : '25px',
        [theme.breakpoints.down('md')]: {
            marginTop: '30px',
            marginLeft: '90px'
        },
        [theme.breakpoints.down('sm')]: {
            marginBottom : '25px',
            marginLeft : '90px'
        },
    },
    mainItem : {
        maxWidth : '270px',
        minWidth : '270px',
        [theme.breakpoints.down('md')]: {
            minWidth: '330px',
            maxWidth: '330px',
        },
        [theme.breakpoints.down('sm')]: {
            minWidth: '360px',
            maxWidth: '360px',
            overflow : 'hidden'
        },
        [theme.breakpoints.down('xs')]: {
            minWidth: '350px',
            maxWidth: '350px',
            overflow : 'hidden',
        },
    },
    secRoot : {
        display : 'flex',
        flexDirection : 'column',
    },
    root: {
        maxWidth: '250px',
        marginLeft : '20px',
        backgroundColor : '#181818',
        color : 'white',
        border : 'none',
        marginTop: '20px',
        marginBottom : '20px',
        maxHeight : '240px',
        minHeight : '240px',
        boxShadow: 'none',
        '&:hover' : {
            backgroundColor : '#181818'
        },
        [theme.breakpoints.down('md')]: {
            minWidth: '300px',
            maxWidth: '300px',
        },
        [theme.breakpoints.down('sm')]: {
            minWidth: '340px',
            maxWidth: '340px',
            marginTop : '2px',
            marginLeft : '2px',
            marginRight : '2px'
        }
    },
    media: {
        minHeight: 130,
        maxHeight : '130px',
        [theme.breakpoints.down('md')]: {
            minWidth: '310px',
            maxWidth: '310px',
        },
        [theme.breakpoints.down('sm')]: {
            minWidth: '340px',
            maxWidth: '340px',
        },
    },
    desc : {
        maxWidth : '100%',
        paddingLeft : '10px',
        paddingRight: '-10px',
        marginLeft :  '-20px',
        marginTop : '-5px',
        minHeight: '110px',
        maxHeight : '110px'
    },
    duration : {
        display : 'flex',
        flexDirection : 'column'
    },
    dura_span : {
        backgroundColor :'#181818',
        marginTop : '-25px',
        marginLeft : '195px',
        fontSize : '14px',
        fontWeight : '500',
        maxWidth : '40px',
        paddingLeft : '5px',
        marginBottom : '7px',
        [theme.breakpoints.down('md')]: {
            marginLeft : '255px'
        },
        [theme.breakpoints.down('sm')]: {
            marginLeft: '290px'
        }
    },
    textPart : {
        marginLeft : '20px',
        marginRight : '-55px',
    },
    text : {
        fontSize : '14px',
        overflow : 'hidden',
        maxWidth : '200px',
        maxHeight : '40px',
        [theme.breakpoints.down('sm')]: {
            fontSize :'14px'
        }
    },
    img : {
        borderRadius : '50px',
        width : '30px',
        height : '30px'
    },
    icon: {
        marginLeft : '60px',
        color : 'transparent',
        '&:hover' : {
            color : 'white'
        }
    },
    chanl : {
        marginTop : '5px',
        display : 'flex',
        flexDirection : 'column',
        fontSize : '7px',
    },
    chanlText : {
        fontSize : '11px',
        color : '#8B8B8B',
        fontWeight : '500',
        '&:hover': {
            color: 'white'
        },
        [theme.breakpoints.down('sm')]: {
            fontSize : '13px'
        }
    },
}));

export default function MediaCard() {
const classes = useStyles()

return (
    <Grid container className={classes.mainRoot}>
        {
                Object.values(Details).map((det) => (
                <Grid item>
            <Card className={classes.root}>
                <CardActionArea >
                    <div className={classes.secRoot}>
                    <CardMedia component={Link} to={`/videos/${det.id}`}
                    className={classes.media}
                    image={`../../images/${det.img}`}
                    title="Contemplative Reptile"
                    />
                    <span className={classes.dura_span} >4.28</span>
                    </div>
                    <CardContent>
                        <Grid container className={classes.desc} row>
                            <Grid item xs={1} >
                                <img  src={`../../images/${det.logo}`}  alt="Logo" className={classes.img} />
                            </Grid>
                            <Grid item xs={10} className={classes.textPart}>
                                <Typography component="h6" className={classes.text}>
                                    {det.desc}
                                </Typography>
                                <div className={classes.chanl}>
                                    <Typography className={classes.chanlText} >
                                        {det.channelName} <GoVerified/>
                                    </Typography>
                                    <Typography className={classes.chanlText} >
                                        {det.views} views . {det.timeAgo} ago
                                    </Typography>
                                </div>
                            </Grid>
                            <Grid item xs={1}  >
                                <MoreVertIcon className={classes.icon} />
                            </Grid>
                        </Grid>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid>
            ))
        }

        <Divider className={classes.divid} />
        <Typography component="h6" className={classes.covidText} >COVID-19 News</Typography>
            {
            Object.values(NewsDetails).map((det) => (
                <Grid item  className={classes.mainItem}>
            <Card className={classes.root}>
                <CardActionArea >
                    <div className={classes.secRoot}>
                    <CardMedia
                    className={classes.media}
                    image={`../../images/${det.img}`}
                    title="Contemplative Reptile"
                    />
                    <span className={classes.dura_span} >4.28</span>
                    </div>
                    <CardContent>
                        <Grid container className={classes.desc} row>
                            <Grid item xs={1}>
                                <img  src={`../../images/${det.logo}`}  alt="Logo" className={classes.img} />
                            </Grid>
                            <Grid item xs={10} className={classes.textPart}>
                                <Typography component="h6" className={classes.text}>
                                    {det.desc}
                                </Typography>
                                <div className={classes.chanl}>
                                    <Typography className={classes.chanlText} >
                                        {det.channelName} <GoVerified/>
                                    </Typography>
                                    <Typography className={classes.chanlText} >
                                        {det.views} views . {det.timeAgo} ago
                                    </Typography>
                                </div>
                            </Grid>
                            <Grid item xs={1}  >
                                <MoreVertIcon className={classes.icon} />
                            </Grid>
                        </Grid>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid>

            ))
        }

        <Divider className={classes.divid} />
        <Typography component="h6" className={classes.covidText} >Sports  News</Typography>
            {
            Object.values(SportNews).map((det) => (
                <Grid item  className={classes.mainItem}>
            <Card className={classes.root}>
                <CardActionArea >
                    <div className={classes.secRoot}>
                    <CardMedia
                    className={classes.media}
                    image={`../../images/${det.img}`}
                    title="Contemplative Reptile"
                    />
                    <span className={classes.dura_span} >4.28</span>
                    </div>
                    <CardContent>
                        <Grid container className={classes.desc} row>
                            <Grid item xs={1}>
                                <img  src={`../../images/${det.logo}`}  alt="Logo" className={classes.img} />
                            </Grid>
                            <Grid item xs={10} className={classes.textPart}>
                                <Typography component="h6" className={classes.text}>
                                    {det.desc}
                                </Typography>
                                <div className={classes.chanl}>
                                    <Typography className={classes.chanlText} >
                                        {det.channelName} <GoVerified/>
                                    </Typography>
                                    <Typography className={classes.chanlText} >
                                        {det.views} views . {det.timeAgo} ago
                                    </Typography>
                                </div>
                            </Grid>
                            <Grid item xs={1}  >
                                <MoreVertIcon className={classes.icon} />
                            </Grid>
                        </Grid>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid>

            ))
        }

        <Divider className={classes.divid} />
        <Typography component="h6" className={classes.covidText} >Hot  News for Today</Typography>
            {
            Object.values(CommonNews).map((det) => (
                <Grid item  className={classes.mainItem}>
            <Card className={classes.root}>
                <CardActionArea >
                    <div className={classes.secRoot}>
                    <CardMedia
                    className={classes.media}
                    image={`../../images/${det.img}`}
                    title="Contemplative Reptile"
                    />
                    <span className={classes.dura_span} >4.28</span>
                    </div>
                    <CardContent>
                        <Grid container className={classes.desc} row>
                            <Grid item xs={1}>
                                <img  src={`../../images/${det.logo}`}  alt="Logo" className={classes.img} />
                            </Grid>
                            <Grid item xs={10} className={classes.textPart}>
                                <Typography component="h6" className={classes.text}>
                                    {det.desc}
                                </Typography>
                                <div className={classes.chanl}>
                                    <Typography className={classes.chanlText} >
                                        {det.channelName} <GoVerified/>
                                    </Typography>
                                    <Typography className={classes.chanlText} >
                                        {det.views} views . {det.timeAgo} ago
                                    </Typography>
                                </div>
                            </Grid>
                            <Grid item xs={1}  >
                                <MoreVertIcon className={classes.icon} />
                            </Grid>
                        </Grid>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid>

            ))
        }

        <Divider className={classes.divid} />
        {
            Object.values(Details).map((det) => (
                <Grid item>
            <Card className={classes.root}>
                <CardActionArea >
                    <div className={classes.secRoot}>
                    <CardMedia
                    className={classes.media}
                    image={`../../images/${det.img}`}
                    title="Contemplative Reptile"
                    />
                    <span className={classes.dura_span} >4.28</span>
                    </div>
                    <CardContent>
                        <Grid container className={classes.desc} row>
                            <Grid item xs={1}>
                                <img  src={`../../images/${det.logo}`}  alt="Logo" className={classes.img} />
                            </Grid>
                            <Grid item xs={10} className={classes.textPart}>
                                <Typography component="h6" className={classes.text}>
                                    {det.desc}
                                </Typography>
                                <div className={classes.chanl}>
                                    <Typography className={classes.chanlText} >
                                        {det.channelName} <GoVerified/>
                                    </Typography>
                                    <Typography className={classes.chanlText} >
                                        {det.views} views . {det.timeAgo} ago
                                    </Typography>
                                </div>
                            </Grid>
                            <Grid item xs={1}  >
                                <MoreVertIcon className={classes.icon} />
                            </Grid>
                        </Grid>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid>

            ))
        }
    </Grid>
);
}
