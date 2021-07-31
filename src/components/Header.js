import React, { useState } from "react";
import { alpha, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import MoreIcon from "@material-ui/icons/MoreVert";
import { ListItemText } from "@material-ui/core";
import { Drawer, List, ListItem  , InputAdornment} from "@material-ui/core";
import SettingsVoiceIcon from '@material-ui/icons/SettingsVoice';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import ViewModuleIcon from '@material-ui/icons/ViewModule';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import YouTubeIcon from '@material-ui/icons/YouTube';
import Sidebar from './Sidebar'
import {
    logout
} from '../redux/actions/auth.actions'
import {useDispatch} from 'react-redux'

    const useStyles = makeStyles((theme) => ({
        grow: {
            flexGrow: 1,
            position : 'static',
            top : '0'
        },
        root :{
            backgroundColor: '#202020',
            color: '#FFFFFF',
            maxHeight :'60px',
        },
        menuButton: {
            marginRight: theme.spacing(0),
        },
        youTubeLogo : {
            fontSize : '35px',
            marginLeft : '5px',
            color : 'red',
        },
        search: {
            display : 'flex',
            position: "relative",
            borderRadius: theme.shape.borderRadius,
            backgroundColor: alpha(theme.palette.common.white, 0.15),
            "&:hover": {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
            },
            maxHeight : '30px',
            marginTop : '-10px',
            backgroundColor : '#121212',
            minWidth: '640px',
            [theme.breakpoints.up('md')]: {
                marginLeft: theme.spacing(18),
            },
            [theme.breakpoints.down('sm')]: {
                marginLeft: theme.spacing(5),
                minWidth : '200px'
            },
            [theme.breakpoints.down('xs')]: {
                backgroundColor: 'yellow',
                display : 'none'
            },
        },
        searchIcon: {
            height: "100%",
            position: "absolute",
            pointerEvents: "none",
            display: "flex",
            alignItems: "center",
            paddingLeft : theme.spacing(1),
            justifyContent: "center",
        },
        inputRoot: {
            color: "inherit",
            
        },
        inputInput: {
            padding: theme.spacing(1, 1, 1, 0),
            // vertical padding + font size from searchIcon
            paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
            transition: theme.transitions.create("width"),
            width: "100%",
            [theme.breakpoints.up("md")]: {
            width: "20ch",
            },
        },
        mike : {
            marginLeft : '10px',
            marginBottom : '10px',
            [theme.breakpoints.down('sm')] : {
                marginLeft : '40px',
                fontSize : '25px'
            }
        },
        sectionDesktop: {
            display: "flex",
            '& .MuiButtonBase-root' : {
                marginRight: '2px',
                marginBottom : '3px',
            },
            '& .MuiSvgIcon-root': {
                fontSize : '25px'
            },
            
            [theme.breakpoints.down("sm")]: {
                display: "flex",
                '& .MuiButtonBase-root': {
                    marginRight: '0px',
                    marginBottom: '3px',
                },
                '& .MuiSvgIcon-root': {
                    fontSize: '25px'
                },
            },
        },
        sectionMobile: {
            display: "flex",
            [theme.breakpoints.up("md")]: {
            display: "none",
            },
        },
        drawerSec : {
            '& .MuiPaper-root': {
                minWidth:'230px',
                paddingTop : theme.spacing(2)
            }
        }
        }));

    export default function Header() {
        const dispatch = useDispatch()
    const handleLogOut = () => {
        dispatch(logout())
    }

    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    const isMenuOpen = Boolean(anchorEl);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const menuId = "primary-search-account-menu";
    const renderMenu = (
        <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        id={menuId}
        keepMounted
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        open={isMenuOpen}
        onClose={handleMenuClose}
        >
        <MenuItem onClick={handleLogOut}>Logout</MenuItem>
        </Menu>
    );

    const mobileMenuId = "primary-search-account-menu-mobile";

    const [openDrawer, setOpen] = useState(false);
    return (
        <>
        <Drawer open={openDrawer} onClose={() => setOpen(false)} className={classes.drawerSec , classes.root} >
            <Sidebar/>
        </Drawer>

        <div className={classes.grow , classes.root}>
            <AppBar position="fixed" className={classes.root}>
            <Toolbar>
                <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="open drawer"
                onClick={() => setOpen(true)}
                >
                    <MenuIcon />
                </IconButton>
                <IconButton
                    edge="start"
                    aria-label="account of current user"
                    aria-controls={menuId}
                    aria-haspopup="true"
                    onClick={handleProfileMenuOpen}
                    color="inherit"
                >
                    <YouTubeIcon  className={classes.youTubeLogo} />
                    <Typography className={classes.menuButton} variant="h6" >
                        Youtube
                    </Typography>
                </IconButton>
                <div className={classes.search}>
                    <div className={classes.searchIcon}>
                        <SearchIcon />
                    </div>
                    <InputBase
                        placeholder="Search…"
                        classes={{
                        root: classes.inputRoot,
                        input: classes.inputInput,
                        }}
                        inputProps={{ "aria-label": "search" }}
                    />
                </div>
                <div>
                    <SettingsVoiceIcon className={classes.mike} />
                </div>
                <div className={classes.grow} />
                <div className={classes.sectionDesktop}>
                <IconButton aria-label="show 4 new mails" color="inherit">
                    <VideoCallIcon/>
                </IconButton>
                <IconButton
                    aria-label="show 17 new notifications"
                    color="inherit"
                >
                    <ViewModuleIcon/>
                </IconButton>
                <IconButton
                    edge="start"
                    aria-label="account of current user"
                    aria-controls={menuId}
                    aria-haspopup="true"
                    onClick={handleProfileMenuOpen}
                    color="inherit"
                >
                    <NotificationsActiveIcon />
                </IconButton>
                <IconButton
                    edge="end"
                    aria-label="account of current user"
                    aria-controls={menuId}
                    aria-haspopup="true"
                    onClick={handleProfileMenuOpen}
                    color="inherit"
                >
                    <AccountCircleIcon />
                </IconButton>
                </div>
                <div className={classes.sectionMobile}>
                <IconButton
                    aria-label="show more"
                    aria-controls={mobileMenuId}
                    aria-haspopup="true"
                    onClick={handleMobileMenuOpen}
                    color="inherit"
                >
                    <MoreIcon />
                </IconButton>
                </div>
            </Toolbar>
            </AppBar>

            {renderMenu}
        </div>
        </>
    );
    }
