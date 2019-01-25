import React from 'react';
import { AppBar, Tabs, Tab } from '@material-ui/core';

const Footer = ({muscles, onSelect, category}) => {
    const index = category
        ?   muscles.findIndex(group => group === category) + 1
        : 0
    return (
        <div>
            <AppBar position="static">
                    <Tabs
                        value={index}
                        // onChange={}
                        indicatorColor="primary"
                        textColor="primary"
                        centered>

                        <Tab label="All"/>
                        {muscles.map(group => 
                            <Tab label={group}/>
                        )}
                </Tabs>
            </AppBar>
        </div>
    );
};

export default Footer;