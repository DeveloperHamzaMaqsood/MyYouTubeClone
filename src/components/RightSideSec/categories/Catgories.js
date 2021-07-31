import React , {useState} from 'react'
import {makeStyles , Typography } from '@material-ui/core'
import Details from './Details'

const useStyles = makeStyles(theme => ({
    categories: {
        minHeight: '55px',
        paddingLeft : '15px',
        display: 'flex',
        marginTop : '60px',
        position : 'fixed',
        top : '0px',
        zIndex : '200',
        backgroundColor: '#202020',
        color: '#FFFFFF',
        width : '100%',
        [theme.breakpoints.down('md')]: {
            marginLeft: '55px',
            marginRight : '100px',
            maxWidth: '990px',
            minWidth: '990px'
        },
        [theme.breakpoints.down('sm')]: {
            marginLeft: '55px',
            marginRight: '150px',
            maxWidth: '740px',
            minWidth: '740px'
        },
        [theme.breakpoints.down('xs')]: {
            marginLeft: '-8px',
            paddingTop : '-5px'
        },
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
            fontSize : '15px',
            maxHeight : '35px'
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '9.5px',
            maxHeight: '22px',
            overflowX: 'hidden',
            overflowY: 'hidden',
            paddingLeft: '-10px'
        },
    },
    cateOthers: {
        backgroundColor: '#4D4D4D',
        marginTop: '15px',
        color: 'white',
        marginRight : '10px',
        minWidth: '40px',
        paddingLeft: '10px',
        paddingRight: '10px',
        paddingTop: '5px',
        borderRadius: '50px',
        minHeight: '15px',
        alignText: 'center',
        marginBottom: '10px',
        fontSize: '14px',
        cursor : 'pointer',
        '& .makeStyles-cateOthers-28 ' : {
            display : 'none'
        },
        '&:hover' : {
            backgroundColor : '#374a59'
        },
        '&:active': {
            color : '#fff',
            backgroundColor: '#374a59'
        },
        [theme.breakpoints.down('md')]: {
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
        },
    },
}))


const Catgories = () => {
    const classes = useStyles();
    const [activeElement , setActiveElement] = useState('All');
    const HandleClick = value => {
        setActiveElement(value)
    }
    return (
        <>
            <div className={classes.categories} position="fixed">
                <Typography component="h6" className={classes.cateName}>
                    All
                </Typography>
                {
                    Object.values(Details).map((det) => (
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

export default Catgories
