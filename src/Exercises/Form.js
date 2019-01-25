import React, { Component } from 'react';
import { TextField, FormControl, InputLabel, Select, MenuItem, withStyles, Button } from '@material-ui/core';

const styles = theme => ({
    FormControl : {
        width: 300
    }
})
class Form extends Component {
    state = {
            title: '',
            description: '',
            muscles: ''
    }
      
    handleChange = name => ({ target: {value}}) => {
        this.setState({
                [name]: value
        });
      };
    handleSubmit = () => {
        const { exercise } = this.state
        this.props.onSubmit({
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
        const {title, description, muscles} = this.state,
        { classes, muscles: categories} = this.props;
        return (
            <form>
            <TextField
                label="Title"
                value={title}
                onChange={this.handleChange('title')}
                margin="normal"
                className={classes.FormControl}
                />
                <br/>

                <FormControl
                className={classes.FormControl}>
                    <InputLabel htmlFor="muscles">Muscles</InputLabel>
                    <Select
                        value={muscles}
                        onChange={this.handleChange('muscles')}
                    > 
                        {categories.map(category => 
                        <MenuItem key={category} value={category}>{category}</MenuItem>
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
                className={classes.FormControl}
                />
                <br />
                <Button
                    color="primary"
                    variant="raised"
                    onClick={this.handleSubmit}>
                    생성하기
                </Button>
            </form>
       
        );
    }
}

export default withStyles(styles)(Form);