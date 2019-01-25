import React from 'react';
import { Grid, Paper, Typography, List, ListItem, ListItemText } from '@material-ui/core';

const index = ({
    exercises, 
    category, 
    onSelect, 
    exercise
}) => {
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
                    !category || category === group
                    ? 
                    <>
                        <Typography
                        variant="headline"
                        style={{textTransform:'capitalize'}}>
                            {group}
                        </Typography>
                        <List component="nav">
                            {exercises.map(({id,title})=>(
                                <ListItem
                                 key={id}
                                 button
                                 onClick={()=>onSelect(id)}>
                                    <ListItemText primary={title}/>
                                </ListItem>
                                ))}
                        </List>
                    </>
                    :null
                    )}
                </Paper>
            </Grid>
            <Grid item sm>
                <Paper style={styles.Paper} >
                    <Typography
                        variant="display1">
                    {exercise?exercise.title:'Welcome'}
                    </Typography>
                    <Typography
                        variant="subheading"
                        style={{marginTop:20}}
                    >
                    {exercise?exercise.description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in aliquet sapien. Aenean condimentum iaculis mi ac facilisis. Vestibulum sit amet consectetur odio. Donec ut cursus risus. Duis vulputate, risus et tincidunt commodo, erat odio vestibulum velit, ac posuere lorem augue non erat. Mauris porta, ex sit amet accumsan viverra, mauris sem dictum erat, eu commodo lorem massa ac velit. Curabitur quis odio vel velit volutpat consequat. Nulla aliquet hendrerit convallis. Pellentesque et eros eu nulla congue gravida at hendrerit lectus. Etiam eget magna nec odio volutpat elementum. Mauris eu imperdiet purus. In blandit dui quam, vitae dictum tortor pulvinar a. Suspendisse eget dignissim urna, et aliquam nibh. Aliquam sit amet neque nec ex suscipit posuere. Nulla facilisi.'}
                    </Typography>
                </Paper>
            </Grid>
        </Grid>
    );
};

export default index;