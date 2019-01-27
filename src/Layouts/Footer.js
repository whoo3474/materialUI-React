import React from 'react';
import { AppBar, Tabs, Tab } from '@material-ui/core';
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';

const Footer = ({muscles, onSelect, category, width}) => {
    // width 에서 sm, xs 등의 화면 크기를 알수 있다.
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
        </div>
    );
};

export default withWidth()(Footer);