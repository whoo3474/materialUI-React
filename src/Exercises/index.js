import React from 'react';
import { Grid, Paper, Typography, List, ListItem, ListItemText, ListItemSecondaryAction, IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Form from './Form';
import { withStyles } from '@material-ui/core/styles';
import { withContext } from '../context';
    
const styles = theme => ({
    paper : {
        padding:20,
        [theme.breakpoints.up('sm')]:{
            marginTop:5,
            height:'calc(100% - 10px)'
        },
        [theme.breakpoints.down('xs')]:{
            height:'100%'
        },
        overflowY: 'auto'
    },
    '@global' : {
        'html,body,#root' : {
            height: '100%'
        }
    },
    container: {
        [theme.breakpoints.up('sm')]:{
            height: 'calc(100% - 64px - 48px)'
        },
        [theme.breakpoints.down('xs')]:{
            height: 'calc(100% - 56px - 48px)'
        }
    },
    item : {
        [theme.breakpoints.down('xs')]: {
            height:'50%'
        }
    }
})

const index = ({
    classes,
    onEdit,
    muscles,
    exercisesByMuscles, 
    category,
    editMode, 
    onSelect, 
    exercise,
    exercise: {
        id,
        title =" 반갑습니다! ",
        description= '이 사이트는 material-UI와 react의 연습을 위한 사이트입니다. 리스트의 운동을 선택하시면 설명이 나옵니다. 생성과 삭제, 수정이 가능합니다.'
    },
    onDelete,
    onSelectEdit
}) => {

    return (
        <Grid container className={classes.container}>
            <Grid item className={classes.item} xs={12} sm={6}>
                <Paper className={classes.paper} >
                    {exercisesByMuscles.map(([group,exercises]) =>
                    !category || category === group
                    ? 
                    <>
                        <Typography
                        color="secondary"
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
                                    <IconButton color="primary">
                                        <EditIcon onClick={()=>onSelectEdit(id)}/>
                                    </IconButton>
                                    <IconButton color="primary">
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
            <Grid item className={classes.item} xs={12} sm={6}>
                <Paper className={classes.paper} >
                <Typography
                        variant="display1"
                        color="secondary"
                        gutterBottom>
                    {title}
                    </Typography>
                {editMode
                ? <Form
                    key={id}
                    exercise={exercise}    
                    muscles={muscles}
                    onSubmit={onEdit}/>
                :
                    <Typography
                        variant="subheading"
                    >
                    {description}
                    </Typography> 
                }

                </Paper>
            </Grid>
        </Grid>
    );
};

export default withContext(withStyles(styles)(index));