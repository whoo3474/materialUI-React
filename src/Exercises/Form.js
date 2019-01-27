import React, { Component } from 'react';
import { TextField, FormControl, InputLabel, Select, MenuItem,  Button } from '@material-ui/core';


class Form extends Component {
    state = this.getInitState()

    getInitState() {
        const { exercise } = this.props;

        return exercise ? exercise : {
            title: '',
            description: '',
            muscles: ''
        }
    }
      
    handleChange = name => ({ target: {value}}) => {
        this.setState({
                [name]: value
        });
      };
    handleSubmit = () => {
        this.props.onSubmit({
            id:this.state.title.replace(/ /g,'-'),
            ...this.state
        })
        this.setState({
            open:false,
            exercise: {
                title:'',
                description:'',
                muscles:''
            }
        })
        // this.setState(this.getInitState())
    }

    render() {
        const {title, description, muscles} = this.state,
        { exercise, muscles: categories} = this.props;
        return (
            <form>
            <TextField
                label="Title"
                value={title}
                onChange={this.handleChange('title')}
                margin="normal"
                fullWidth
                />
                <br/>

                <FormControl
                fullWidth>
                    <InputLabel htmlFor="muscles">Muscles</InputLabel>
                    <Select
                        value={muscles}
                        onChange={this.handleChange('muscles')}> 

                        {categories.map(category => 
                        <MenuItem key={category} value={category}>
                        {category}</MenuItem>
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
                fullWidth
                />
                <br />
                <Button
                    color="primary"
                    variant="raised"
                    onClick={this.handleSubmit}
                    disabled={!title||!muscles}>
                    {/* title이나 muscles를 안받아오면 사용할수없다 */}
                    {exercise ? '수정하기' : '생성하기'}
                </Button>
            </form>
       
        );
    }
}

export default Form;