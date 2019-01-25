import React,{Component} from 'react';
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button, Icon, TextField, FormControl, InputLabel, Select, MenuItem, withStyles } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

const styles = theme => ({
    FormControl : {
        width: 500
    },
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    formControl: {
        margin: theme.spacing.unit,
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing.unit * 2,
    },
});

class Create extends Component {
    state ={
        open:false,
        exercise : {
            title: '',
            description: '',
            muscles: ''
        }
    }

    handleToggle = () => {
        this.setState({
            open: !this.state.open
        })
    }
    
    handleChange = name => ({ target: {value}}) => {
        this.setState({
            exercise: {
                ...this.state.exercise,
                [name]: value
            }
        });
      };
    handleSubmit = () => {
        const { exercise } = this.state
        this.props.onCreate({
            ...exercise,
            id:exercise.title.toLocaleLowerCase().replace(/ /g,'-'),
        })
        this.setState({
            open:false,
            exercise: {
                title:'',
                description:'',
                muscles:''
            }
        })
    }
    
    render() {
        const { open, exercise: {title, description, muscles} } = this.state,
              { classes, muscles: categories} = this.props;
        return (
            <>
                <Button variant="fab" onClick={this.handleToggle} mini>
                    <AddIcon/>
                </Button>
                <Dialog
                    open={open}
                    onClose={this.handleToggle}>
                    <DialogTitle id="form-dialog-title">
                        다이어로그 연습
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            다이어로그 텍스트
                        </DialogContentText>
                        <form>
                        <TextField
                            label="Title"
                            value={title}
                            onChange={this.handleChange('title')}
                            margin="normal"
                            className={classes.FormControl}
                            />
                            <br/>

                            <FormControl>
                                <InputLabel htmlFor="muscles">Muscles</InputLabel>
                                <Select
                                    value={muscles}
                                    onChange={this.handleChange('muscles')}
                                    inputProps={{
                                    name: 'age',
                                    id: 'age-simple',
                                    }}
                                > 
                                    {categories.map(category => 
                                    <MenuItem value={category}>{category}</MenuItem>
                                    )}
                                </Select>
                            </FormControl>
                            <br/>

                        <TextField
                            label="Description"
                            value={description}
                            multiline
                            rows="4"
                            onChange={this.handleChange('description')}
                            margin="normal"
                            />
                        </form>
                    </DialogContent>
                    <DialogActions>
                        <Button
                         color="primary"
                         variant="raised"
                         onClick={this.handleSubmit}>
                            생성하기
                        </Button>
                    </DialogActions>

                </Dialog>
            </>
        );
    }
}

export default withStyles(styles)(Create);