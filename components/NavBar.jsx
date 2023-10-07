"use client"
import React, { useState } from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

import MenuIcon from '@mui/icons-material/Menu';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';

import ThemeSwitcher from '@components/ThemeSwitcher';


/**
 *
 *
 * @export
 * @return {*} 
 */
export default function NavBar() {
    const [drawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = () => {
        setDrawerOpen(!drawerOpen);
    };

    const list = (
        <Box
            sx={{
                width: 250,
                padding: '16px',
            }}
            role="presentation"
            onClick={toggleDrawer}
            onKeyDown={toggleDrawer}
        >
            <List>
                <ListItemButton>
                    <ListItemText primary="Link 1" />
                </ListItemButton>
                <ListItemButton>
                    <ListItemText primary="Link 2" />
                </ListItemButton>
                <ListItemButton>
                    <ListItemText primary="Link 3" />
                </ListItemButton>
                <ListItemButton>
                    <ListItemText primary="Link 4" />
                </ListItemButton>
            </List>
        </Box>
    );

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" color="primary" enableColorOnDark sx={{}}>
                <Toolbar>
                    <IconButton
                        size="large"
                        color="inherit"
                        aria-label="logo"
                        sx={{ mx: 2 }}
                    >
                        <IntegrationInstructionsIcon />
                    </IconButton>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                    >
                        MD3 Next.js Template
                    </Typography>
                    <ThemeSwitcher />
                    <IconButton
                        size="large"
                        color="inherit"
                        aria-label="open drawer"
                        sx={{ mr: 2 }}
                        onClick={toggleDrawer}
                    >
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer}>
                {list}
            </Drawer>
        </Box>
    );
}
