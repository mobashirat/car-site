import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';

import List from '@mui/material/List';

import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';



import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,

    useRouteMatch
} from "react-router-dom";
import { Button } from '@mui/material';

import MyOrders from '../MyOrders/MyOrders';
import Payment from '../Payment/Payment';
import useAuth from '../../hooks/useAuth';
import ManageProduct from '../ManageProduct/ManageProduct';
import ManageOrders from '../ManageOrders/ManageOrders';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import AddProducts from '../AddProducts/AddProducts';
import Review from '../Review/Review';


const drawerWidth = 150;


function Dashboard(props) {
    const { logOut, admin } = useAuth()

    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

  

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    let { path, url } = useRouteMatch();
    const drawer = (
        <div>


            <Toolbar />
            <Divider />

            <List>

                {!admin ? <Box>
                    <Link style={{ textDecoration: 'none', color: 'black', fontSize: '30px' }} to={`${url}/myOrders`}><Button color="inherit">My Orders</Button></Link>

                    <Link style={{ textDecoration: 'none', color: 'black', fontSize: '30px' }} to={`${url}/payment`}><Button color="inherit">Payment</Button></Link>
                    <Link style={{ textDecoration: 'none', color: 'black', fontSize: '30px' }} to={`${url}/reviews`}><Button color="inherit">Reviews</Button></Link>
                </Box> : < Box >

                    <Link style={{ textDecoration: 'none', color: 'black', fontSize: '50px' }} to={`${url}/manageProducts`}><Button color="inherit">Manage Products</Button></Link>
                    <Link style={{ textDecoration: 'none', color: 'black', fontSize: '50px' }} to={`${url}/manageOrders`}><Button color="inherit">Manage all Orders</Button></Link>

                    <Link style={{ textDecoration: 'none', color: 'black', fontSize: '50px' }} to={`${url}/addProducts`}><Button color="inherit">Add a Product</Button></Link>


                    <Link style={{ textDecoration: 'none', color: 'black', fontSize: '50px' }} to={`${url}/makeAdmin`}><Button color="inherit">Make Admin</Button></Link>
                </Box>}



                <Button onClick={logOut} color="inherit">Log out</Button>

            </List>

        </div >
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>

                    <Typography variant="h6" noWrap component="div">
                        Dashboard
                    </Typography>

                </Toolbar>

            </AppBar>

            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                <Switch>

                    <Route path={`${path}/myOrders`}>
                        <MyOrders></MyOrders>
                    </Route>
                    <Route path={`${path}/payment`}>
                        <Payment></Payment>
                    </Route>
                    <Route path={`${path}/reviews`}>
                        <Review></Review>
                    </Route>

                    {/* for admin */}
                    <Route path={`${path}/manageProducts`}>
                        <ManageProduct></ManageProduct>
                    </Route>
                    <Route path={`${path}/manageOrders`}>
                        <ManageOrders></ManageOrders>
                    </Route>
                    <Route path={`${path}/makeAdmin`}>
                        <MakeAdmin></MakeAdmin>
                    </Route>
                    <Route path={`${path}/addProducts`}>
                        <AddProducts></AddProducts>
                    </Route>

                </Switch>

            </Box>
        </Box>
    );
}

Dashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Dashboard;