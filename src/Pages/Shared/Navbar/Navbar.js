import React from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { makeStyles } from '@mui/styles';
import { useTheme } from '@mui/material'

import Drawer from '@mui/material/Drawer';

import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';

import ListItemText from '@mui/material/ListItemText';




const Navbar = () => {
    const { user, logOut } = useAuth()
    const theme = useTheme()
    const useStyle = makeStyles({
        navIcon: {
            [theme.breakpoints.up('sm')]: {
                display: 'none !important'
            },
        },
        navItemContainer: {
            [theme.breakpoints.down('sm')]: {
                display: 'none'
            },
        },
        navLogo: {
            [theme.breakpoints.down('sm')]: {
                textAlign: 'right'
            },

        },



    })
    const { navIcon, navItemContainer, navLogo } = useStyle()

    const [state, setState] = React.useState(false);

    const list = (
        <Box
            sx={{ width: 250 }}
            role="presentation"

        >
            <List>

                <ListItem button>

                    <ListItemText>
                        <Link style={{ textDecoration: 'none', color: 'black', fontWeight: 700 }} to="/home">Home</Link>
                    </ListItemText>
                </ListItem>
                <ListItem button>

                    <ListItemText>
                        <Link style={{ textDecoration: 'none', color: 'black', fontWeight: 700 }} to="/products">Explore</Link>
                    </ListItemText>
                </ListItem>
                <Divider />
                {user?.email ? <Box sx={{ ms: 3 }}>
                    <ListItem button>

                        <ListItemText> <Link style={{ textDecoration: 'none', color: 'black', fontWeight: 700 }} to="/dashboard">Dashboard</Link></ListItemText>
                    </ListItem>
                    <Divider />

                    <Divider />
                    <ListItem button>

                        <ListItemText>  <Button sx={{ color: 'red' }} onClick={logOut} >LogOut</Button></ListItemText>
                    </ListItem>
                </Box> : <Box>

                    <ListItem button>

                        <ListItemText> <Link style={{ textDecoration: 'none', color: 'black', fontWeight: 700 }} to="/login">login</Link></ListItemText>
                    </ListItem></Box>}


            </List>


        </Box>
    );

    return (


        <>
            <Box>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}

                            className={navIcon}

                            onClick={() => setState(true)}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography className={navLogo} variant="h6" component="div" sx={{ flexGrow: 1, fontSize: 28 }}>
                            Royal Motors
                        </Typography>
                        <Box className={navItemContainer} >
                            <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/home"> Home</NavLink>
                            <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/products">  Explore</NavLink>



                            {user?.email ?
                                <Box sx={{ display: 'inline', px: 3, fontSize: 18 }}>

                                    <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/dashboard">  Dashboard</NavLink>

                                    <Button sx={{ color: 'yellow' }} onClick={logOut} >LogOut</Button>
                                </Box> :

                                <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/login">  <Button color="inherit">Login</Button></NavLink>}

                        </Box>
                    </Toolbar>
                </AppBar>
            </Box>
            <div>
                {['left'].map((anchor) => (
                    <React.Fragment >

                        <Drawer

                            open={state}
                            onClose={() => setState(false)}
                        >
                            {list}
                        </Drawer>
                    </React.Fragment>
                ))}
            </div>

        </>

    );
};

export default Navbar;