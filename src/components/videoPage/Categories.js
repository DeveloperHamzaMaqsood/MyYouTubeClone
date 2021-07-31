import React from 'react'
import {shortDetails} from '../RightSideSec/categories/Details'
import {makeStyles , Typography} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    categories: {
        minHeight: '55px',
        paddingLeft : '15px',
        display: 'flex',
        marginTop : '60px',
        marginTop : '0px',
        backgroundColor: '#181818',
        color: '#FFFFFF',
        width : '100%',
        marginLeft : '20px',
        [theme.breakpoints.down('md')]: {
            marginLeft: '28px',
            marginRight : '35px',
            maxWidth : '410px'
        },
        [theme.breakpoints.down('sm')]: {
            marginTop : '20px',
            marginBottom : '10px'
        },
        [theme.breakpoints.down('md')]: {
            marginLeft: '0px',
            marginTop: '20px',
                marginBottom: '10px'
        },
        /*
        [theme.breakpoints.down('sm')]: {
            marginLeft: '55px',
            marginRight: '150px',
            maxWidth: '740px',
            minWidth: '740px'
        },
        [theme.breakpoints.down('xs')]: {
            marginLeft: '-8px',
            paddingTop : '-5px'
        }, */
    },
    cateName: {
        marginTop: '15px',
        backgroundColor: 'white',
        color: 'black',
        minWidth: '40px',
        paddingLeft: '10px',
        paddingRight: '10px',
        paddingTop: '5px',
        borderRadius: '50px',
        minHeight: '15px',
        alignText: 'center',
        marginRight: '10px',
        marginBottom: '10px',
        paddingBottom: '5px',
        fontSize: '15px',
        [theme.breakpoints.down('md')]: {
            fontSize: '13px',
            maxHeight: '35px',
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '15px',
            maxHeight: '35px'
        }
        /* ,
        [theme.breakpoints.down('sm')]: {
            fontSize: '9.5px',
            maxHeight: '22px',
            overflowX: 'hidden',
            overflowY: 'hidden',
            paddingLeft: '-10px'
        }, */
    },
    cateOthers: {
        backgroundColor: '#4D4D4D',
        marginTop: '15px',
        color: 'white',
        minWidth: '40px',
        paddingLeft: '10px',
        paddingRight: '10px',
        paddingTop: '5px',
        borderRadius: '50px',
        minHeight: '15px',
        alignText: 'center',
        marginRight: '10px',
        marginBottom: '10px',
        fontSize: '14px',
        cursor : 'pointer',
        '& .makeStyles-cateOthers-28 ' : {
            display : 'none'
        },
        '&:hover' : {
            backgroundColor : 'dimGrey'
        },
        [theme.breakpoints.down('md')]: {
            fontSize: '13px',
            maxHeight: '35px'
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '15px',
            maxHeight: '35px'
        }
        /* [theme.breakpoints.down('md')]: {
            fontSize: '13px',
            maxHeight: '28px',
            overflow : 'hidden'
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '9.5px',
            maxHeight: '22px',
            overflowX: 'hidden',
            overflowY : 'hidden',
            paddingLeft : '-10px'
        }, */
    },


}))

const Categories = () => {
    const classes = useStyles();
    return (
        <>
            <div className={classes.categories} position="fixed">
                <Typography component="h6" className={classes.cateName}>
                    All
                </Typography>
                {
                    Object.values(shortDetails).map((det) => (
                        <Typography  component = "h6" key={det.id}
                            className = {
                                classes.cateOthers
                            } >
                                {det.name}
                        </Typography>
                    ))
                }
            </div>
        </>
    )
}

export default Categories
