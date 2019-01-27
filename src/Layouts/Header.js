import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import { Toolbar, IconButton, Typography, withStyles } from '@material-ui/core';
import CreateDialog from '../Exercises/Dialogs/Create';

const styles = {
    flex: {
        flex:1
    }
}

const Header = ({onExerciseCreate, classes}) => {
    return (
        <div>
       <AppBar position="static">
            <Toolbar>
                <Typography variant="headline" color="inherit" className={classes.flex}>
                    운동 데이터베이스
                </Typography>
                <CreateDialog />
            </Toolbar>
      </AppBar>
        </div>
    );
};

export default withStyles(styles)(Header);