import React from 'react'
import {makeStyles , Typography} from '@material-ui/core'
import SortIcon from '@material-ui/icons/Sort';

const useStyles = makeStyles(theme => ({
    totComt : {
        marginTop : '15px',
        display : 'flex'
    },
    comments : {
        fontSize : '17px',
        marginRight : '35px',
        color : 'white'
    },
    sortCmt : {
        display : 'flex'
    },
    sortIcon : {
        fontSize : '30px',
        color : '#909090',
        marginRight : '5px'
    },
    sortText : {
        color : '#909090',
        fontSize : '17px',
        fontWeight :'500'
    }
}))

const TotComments = () => {
    const classes = useStyles()
    return (
        <>
            <div className={classes.totComt}>
                    <Typography className={classes.comments} >281,971 Comments</Typography>
                    <div className={classes.sortCmt}>
                    <SortIcon className={classes.sortIcon} />
                    <Typography className={classes.sortText}  >SORT BY</Typography>
                </div>
                </div>
        </>
    )
}

export default TotComments
