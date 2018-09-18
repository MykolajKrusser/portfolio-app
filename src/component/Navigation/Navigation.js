import React from 'react';
import classes from './Navigation.css';
import NavigationItem from './NavigationItem/NavigationItem';

const nav = (props) => (
    <nav
        style={{
            transform: props.navShow ? 'translateX(0vw)' : 'translateX(100vw)',
            opacity: props.navShow ? '1' : '0'
        }}
        className={classes.Navigation}
    >
        <NavigationItem closeNav={props.clicked} link='/' exact>Home</NavigationItem>
        <NavigationItem closeNav={props.clicked} link='/about-me'>About me</NavigationItem>
        <a>Link 1</a>
        <a>Link 1</a>
    </nav>
);

export default nav