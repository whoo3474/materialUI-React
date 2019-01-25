import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import { Toolbar, IconButton, Typography } from '@material-ui/core';

const Header = () => {
    return (
        <div>
       <AppBar position="static">
            <Toolbar>
                <Typography variant="headline" color="inherit">
                    Hello
                </Typography>
                <IconButton>
                    
                </IconButton>
            </Toolbar>
      </AppBar>
        </div>
    );
};

export default Header;