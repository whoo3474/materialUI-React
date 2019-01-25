import React from 'react';
import { Grid, Paper, Typography, List, ListItem, ListItemText } from '@material-ui/core';
import LeftPane from './LeftPane';
import RightPane from './RightPane';

const index = ({exercises}) => {
    const styles = {
        Paper : {
            padding:20,
            marginTop:10,
            marginBottom:10, 
            height:500, 
            overflowY: 'auto'
        }
    }
    return (
        <Grid container>
            <Grid item sm>
                <Paper style={styles.Paper} >
                    {exercises.map(([group,exercises]) =>
                    <>
                        <Typography
                        variant="headline"
                        style={{textTransform:'capitalize'}}>
                            {group}
                        </Typography>
                        <List component="nav">
                            {exercises.map(({title})=>(
                                <ListItem button>
                                    <ListItemText primary={title}/>
                                </ListItem>
                                ))}
                        </List>
                    </>
                    )}
                </Paper>
            </Grid>
            <Grid item sm>
                <Paper style={styles.Paper} >
                    <Typography>
                        
                    </Typography>
                    <Typography
                        variant="subheading"
                        style={{marginTop:20}}
                    >
                        Please select an exercise from this list on the left.
                    </Typography>
                </Paper>
            </Grid>
        </Grid>
    );
};

export default index;