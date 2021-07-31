import React from 'react'
import {Grid , Typography , makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    songDesc : {
        marginTop : '10px',
        display : 'flex',
        [theme.breakpoints.down("xs")]: {
            paddingLeft: '0px',
            paddingRight: '0px',
            maxWidth: '600px'
        },
    },
    first : {
        minWidth : '55px'
    },
    sec : {
        marginRight : '50px',
        [theme.breakpoints.down('sm')]: {
            marginRight : '150px'
        },
    },
    desc : {
        fontSize : '14px',
        color: 'white',
    }
}))

const Videodesc = () => {
    const classes = useStyles()
    return (
        <>
            <div className={classes.songDesc}>
                    <Grid item className={classes.first}>

                    </Grid>
                    <Grid item className={classes.sec}>
                        <Typography component="p" className={classes.desc}>
                            True love is never about possession. Unrequited love is definitely killing yourself without dying. Most of us have gone through this despair some time in life. Darshan Raval lives this experience with his latest single “ EK Tarfa”
                            An E Positive Entertainment Production.
                            <br/>
                            <br/>
                            Song name: Ek Tarfa<br/>
                            Singer & Composer - Darshan Raval<br/>
                            Lyrics: Youngveer<br/>
                            Music Production - Anmol Daniel<br/>
                            Drums - Sunit Borkar<br/>
                            Guitars - Ishan Das<br/>
                            DholakPercussions - Babloo Kumar<br/>
                            Strings - Rudra Oza<br/>
                            Mixed and Mastered by Eric Pillai(Future Sound of Bombay)<br/>
                            Asst mix engineer - Michael Edwin Pillai<br/>
                            Vocals Recorded - DZ Studio<br/>
                            All Guitars Recorded by Partha Protim Das, Euphony Studio<br/>
                            <br/><br/>
                            Video Credits
                            <br/><br/>
                            Director & DOP: Dhruwal Patel<br/>
                            Cast: Darshan Raval, Siddharth Bhavsar, Arbaz Khan, Harshit Mishra<br/>
                            Assistant Director: Avish Patel, Deep Panchal<br/>
                            Editor: Pankaj Sharma<br/>
                            Colourist: Rahil Merchant<br/>
                            Still Photography: Deep Panchal<br/>
                            <br/><br/>
                            Digital Distribution: KGV Kiran Kumar & Team(Believe India)
                        </Typography>
                    </Grid>
                </div>
        </>
    )
}

export default Videodesc
