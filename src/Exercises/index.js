import React from 'react';
import { Grid, Paper, Typography, List, ListItem, ListItemText, ListItemSecondaryAction, IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Form from './Form';

const index = ({
    onEdit,
    muscles,
    exercises, 
    category,
    editMode, 
    onSelect, 
    exercise,
    onDelete,
    onSelectEdit
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
                                    <ListItemSecondaryAction>
                                    <IconButton>
                                        <EditIcon onClick={()=>onSelectEdit(id)}/>
                                    </IconButton>
                                    <IconButton>
                                        <DeleteIcon onClick={()=>onDelete(id)}/>
                                    </IconButton>
                                    </ListItemSecondaryAction>
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
                {editMode
                ? <Form
                muscles={muscles}
                onSubmit={onEdit}/>
                : <>
                    <Typography
                        variant="display1">
                    {exercise?exercise.title:'Welcome'}
                    </Typography>
                    <Typography
                        variant="subheading"
                        style={{marginTop:20}}
                    >
                    {exercise?exercise.description:'어서오세요! 이 웹사이트는 material-ui와 react를 이용해서 운동하는 방법에 대해서 적어놓은 사이트입니다. 저장과 삭제가 가능합니다.'}
                    </Typography> 
                </>
                }

                </Paper>
            </Grid>
        </Grid>
    );
};

export default index;