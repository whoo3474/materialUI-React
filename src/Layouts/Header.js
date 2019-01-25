import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import { Toolbar, IconButton, Typography } from '@material-ui/core';
import CreateDialog from '../Exercises/Dialogs/Create';

const Header = ({muscles,onExerciseCreate}) => {
    return (
        <div>
       <AppBar position="static">
            <Toolbar>
                <Typography variant="headline" color="inherit" style={{flex:1}}>
                    material-Ui
                </Typography>
                <CreateDialog 
                muscles={muscles}
                onCreate={onExerciseCreate}
                />
            </Toolbar>
      </AppBar>
        </div>
    );
};

export default Header;