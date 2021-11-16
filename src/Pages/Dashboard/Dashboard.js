import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Services from '../Home/Services/Services';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";
import { Button } from '@mui/material';
import MakeAdmin from './MakeAdmin/MakeAdmin';
import AddNewServices from '../AddNewService/AddNewServices';
import ManageAllOrder from '../MangeAllOrder/ManageAllOrder';
import useAuth from '../../hooks/useAuth';
import AddReview from './AddReview/AddReview';
import MyOrder from '../MyOrder/MyOrder';
import Pay from './Pay/Pay';


const drawerWidth = 200;

function Dashboard(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const { admin, user, logOut } = useAuth();

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    let { path, url } = useRouteMatch();

    const drawer = (
        <div>
            <Toolbar />
            <Divider />
            <Link style={{ textDecoration: 'none' }} to='/home'>
                <Button color="inherit">Home</Button>
            </Link>
            <br />

            {
                !admin && <Box>
                    <Link style={{ textDecoration: 'none' }} to={`${url}/pay`}>
                        <Button color="inherit">Pay Now</Button>
                    </Link> <br />
                    <Link style={{ textDecoration: 'none' }} to={`${url}/myOrder`}>
                        <Button color="inherit">My Orders</Button>
                    </Link><br />
                    <Link style={{ textDecoration: 'none' }} to={`${url}/addReview`}>
                        <Button color="inherit">Add Review</Button>
                    </Link><br />
                    <Link style={{ textDecoration: 'none' }} to={`${url}/logOut`}>
                        <Button onClick={logOut} color="inherit">LogOut</Button>
                    </Link>
                </Box>
            }


            {
                admin && <Box>
                    <Link style={{ textDecoration: 'none' }} to={`${url}/manageOrder`}>
                        <Button color="inherit">Manage All Order</Button>
                    </Link>
                    <Link style={{ textDecoration: 'none' }} to={`${url}/addNewService`}>
                        <Button color="inherit">Add New Product</Button>
                    </Link>
                    <Link style={{ textDecoration: 'none' }} to={`${url}/makeAdmin`}>
                        <Button color="inherit">Make Admin</Button>
                    </Link>
                    <br />
                    <Link style={{ textDecoration: 'none' }} to={`${url}/logOut`}>
                        <Button onClick={logOut} color="inherit">LogOut</Button>
                    </Link>
                </Box>
            }

        </div>
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
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
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
                    <Route exact path={path}>
                        <Services></Services>
                    </Route>
                    <Route path={`${path}/makeAdmin`}>
                        <MakeAdmin></MakeAdmin>
                    </Route>
                    <Route path={`${path}/manageOrder`}>
                        <ManageAllOrder></ManageAllOrder>
                    </Route>
                    <Route path={`${path}/myOrder`}>
                        <MyOrder></MyOrder>
                    </Route>
                    <Route path={`${path}/pay`}>
                        <Pay></Pay>
                    </Route>
                    <Route path={`${path}/addNewService`}>
                        <AddNewServices></AddNewServices>
                    </Route>
                    <Route path={`${path}/addReview`}>
                        <AddReview></AddReview>
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
