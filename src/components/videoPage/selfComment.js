import React from 'react'
import {Grid , TextField , makeStyles} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    selfComt : {
        marginTop : '20px',
        display : 'flex'
    },
    first : {
        maxWidth : '40px',
        minWidth: '40px',
        maxHeight : '40px',
        minHeight : '40px',
    },
    input :  {
        color: '#909090',
        marginBottom : '10px'
    },
    textField : {
        width: '670px',
        marginLeft: '20px',
        marginTop: '-10px',
        paddingBottom: 0,
        fontWeight: 500,
        [theme.breakpoints.down('md')]: {
            maxWidth : '480px'
        },
        [theme.breakpoints.down('md')]: {
            maxWidth: '550px'
        },
        [theme.breakpoints.down('md')]: {
            maxWidth: '380px'
        },
    }
}))

const SelfComment = () => {
    const classes = useStyles();
    return (
        <>
            <div className={classes.selfComt} >
                    <Grid item className={classes.first}>
                        <img src="../../images/samaa.jpg" alt="Owner Logo" width="100%" height="100%" style={{borderRadius : '50%'}} />
                    </Grid>
                    <Grid item>
                        <TextField id="standard-basic"  className={classes.textField} InputLabelProps={{className : classes.input}} label="Add a public comment..." />
                    </Grid>
                </div>
        </>
    )
}

export default SelfComment
