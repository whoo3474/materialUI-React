import React,{Component} from 'react';
import { Dialog, DialogTitle, DialogContent, DialogContentText, Button, Icon, TextField, FormControl, InputLabel, Select, MenuItem, withStyles } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import Form from '../Form';


class Create extends Component {
    state ={
        open:false
    }

    handleToggle = () => {
        this.setState({
            open: !this.state.open
        })
    }
  
    
    render() {
        const { open } = this.state,
        {muscles, onCreate} = this.props
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
                        <Form
                        muscles={muscles}
                        onSubmit={onCreate}/>
                    </DialogContent>

                </Dialog>
            </>
        );
    }
}

export default Create;