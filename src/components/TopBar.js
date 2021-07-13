import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MoreIcon from '@material-ui/icons/MoreVert';
import AccountCircle from '@material-ui/icons/AccountCircle';

function TopBar() {
    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton aria-label="display more actions" edge="start" color="inherit">
                    <AccountCircle />
                </IconButton>
                <IconButton aria-label="display more actions" edge="end" color="inherit">
                    <MoreIcon />
                </IconButton>
            </Toolbar>
        </AppBar>
    );
}

export default TopBar;