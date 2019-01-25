import React from 'react';
import { AppBar, Tabs, Tab } from '@material-ui/core';

const Footer = () => {
    return (
        <div>
            <AppBar position="static">
                    <Tabs
                        value={0}
                        indicatorColor="primary"
                        textColor="primary"
                        variant="fullWidth">
                    <Tab value="one" label="New Arrivals in the Longest Text of Nonfiction" />
                    <Tab value="two" label="Item Two" />
                    <Tab value="three" label="Item Three" />
                </Tabs>
            </AppBar>
        </div>
    );
};

export default Footer;