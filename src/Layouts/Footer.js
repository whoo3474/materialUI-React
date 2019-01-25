import React from 'react';
import { AppBar, Tabs, Tab } from '@material-ui/core';

const Footer = ({muscles, onSelect, category}) => {
    const index = category
        ?   muscles.findIndex(group => group === category) + 1
        : 0

    const onIndexSelect =(e,index) => {
            onSelect(index === 0 ? '' : muscles[index-1])
        }
    return (
        <div>
            <AppBar position="static">
                    <Tabs
                        value={index}
                        onChange={onIndexSelect}
                        indicatorColor="primary"
                        textColor="primary"
                        centered>

                        <Tab label="All"/>
                        {muscles.map(group => 
                            <Tab 
                                key={group}
                                label={group}/>
                        )}
                </Tabs>
            </AppBar>
        </div>
    );
};

export default Footer;