// import React from 'react';
// import { AppBar, Tabs, Tab } from '@material-ui/core';
// import withWidth, { isWidthUp } from '@material-ui/core/withWidth';

// const Footer = ({muscles, onSelect, category, width}) => {

//     return (
//         <div>

//         </div>
//     );
// };


import React, { Component } from 'react';
import { AppBar, Tabs, Tab } from '@material-ui/core';
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';
import { withContext }from '../context';

class Footer extends Component {
        // width 에서 sm, xs 등의 화면 크기를 알수 있다.
    getIndex =() => {
    const { category, muscles } = this.props;
    return category
     ?   muscles.findIndex(group => group === category) + 1
     : 0
    }

    onIndexSelect =(e,index) => {
        const {onCategorySelect, muscles} = this.props
        onCategorySelect(index === 0 ? '' : muscles[index-1])
        }
    render() {
        const { width,muscles } = this.props
        return (
            <AppBar position="static">
                    <Tabs
                        value={this.getIndex()}
                        onChange={this.onIndexSelect}
                        indicatorColor="secondary"
                        textColor="secondary"
                        centered={width !== 'xs'}
                        scrollable={width === 'xs'}>

                        <Tab label="All"/>
                        {muscles.map(group => 
                            <Tab 
                                key={group}
                                label={group}/>
                        )}
                </Tabs>
            </AppBar>
        );
    }
}

export default withContext(withWidth()(Footer));