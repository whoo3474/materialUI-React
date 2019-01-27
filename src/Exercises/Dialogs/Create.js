import React,{Component} from 'react';
import { Dialog, DialogTitle, DialogContent, DialogContentText, Button, Icon, TextField, FormControl, InputLabel, Select, MenuItem, withStyles } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import Form from '../Form';
import { Consumer, withContext } from '../../context'


class Create extends Component {
    state ={
        open:false
    }

    handleToggle = () => {
        this.setState({
            open: !this.state.open
        })
    }

    handleFormSubmit= exercise => {
        this.handleToggle()

        this.props.onCreate(exercise)
    }
  
    
    render() {
        const { open } = this.state,
        {muscles} = this.props
        return (
                     <>
                     <Button
                     variant="fab"
                     onClick={this.handleToggle} 
                     color='secondary' 
                     mini>
                         <AddIcon/>
                     </Button>
                     <Dialog
                         open={open}
                         onClose={this.handleToggle}
                         fullWidth
                         maxWidth='xs'>
                         <DialogTitle>
                             새로운 운동방법 추가하기
                         </DialogTitle>
                         <DialogContent>
                             <DialogContentText>
                                 빈칸을 채워주세요.
                             </DialogContentText>
                             <Form
                             muscles={muscles}
                             onSubmit={this.handleFormSubmit}/>
                         </DialogContent>
 
                     </Dialog>
                 </>
        );
    }
}

export default withContext(Create);