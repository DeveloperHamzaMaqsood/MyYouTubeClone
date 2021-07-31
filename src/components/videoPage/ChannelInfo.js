import React from 'react'
import {  Button , makeStyles , Grid , Typography } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    channel : {
        display : 'flex',
        marginTop : '15px',
        
    },
    first : {
        maxWidth : '55px',
        maxWidth : '55px',
        minHeight : '55px',
        maxHeight : '55px',
        [theme.breakpoints.down('md')]: {
            maxWidth : '35px',
            minWidth : '35px',
            minHeight : '35px',
            maxHeight : '35px',
        },
    },
    sec : {
        display :'flex',
        flexDirection : 'column',
        color : 'white',
        marginLeft : '15px',
        marginTop : '7px',
        minWidth : '550px',
        [theme.breakpoints.down('md')]: {
            minWidth : '380px',
        },
        [theme.breakpoints.down('sm')]: {
            minWidth: '620px',
        },
        [theme.breakpoints.down('xs')]: {
            minWidth : '280px',
        },
    },
    sec1 : {
        fontSize :'16px',
        fontWeight : '500',
    },
    sec2 : {
        fontSize : '12px',
        color : '#909090'
    },
    third : {
        marginTop: '12px'
    },
    thirdBtn : {
        backgroundColor : '#CC0000',
        color : 'white'
    }
}))

const ChannelInfo = () => {
    const classes = useStyles()
    return (
        <>
            <div className={classes.channel}>
                <Grid item className={classes.first}>
                    <img  src="../../images/samaa.jpg" width="100%" height="100%" style={{borderRadius : '50%'}} />
                </Grid>
                <Grid item className={classes.sec}>
                    <Typography component="h3" className={classes.sec1}>Indie Music Label</Typography>
                    <Typography component="h6" className={classes.sec2}>188M subscribers</Typography>
                </Grid>
                <Grid item className={classes.third}>
                    <Button variant="contained" className={classes.thirdBtn}>
                        SUBSCRIBE
                    </Button>
                </Grid>
            </div>
        </>
    )
}

export default ChannelInfo
