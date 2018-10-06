import React from 'react';
import classes from './Navigation.css';
import NavigationItem from '../UI/NavigationItem/NavigationItem';

const nav = (props) => (
    <nav
        style={{
            transform: props.navShow ? 'translateX(0vw) scale(1)' : 'translateX(100vw) scale(0.5)',
            opacity: props.navShow ? '1' : '0'
        }}
        className={classes.Navigation}
    >
        <NavigationItem closeNav={props.clicked} link='/' exact>Home</NavigationItem>
        <NavigationItem closeNav={props.clicked} link='/about-me'>About me</NavigationItem>
        <NavigationItem closeNav={props.clicked} link='/my-works'>My works</NavigationItem>
        <NavigationItem closeNav={props.clicked} link='/contact'>Contact me</NavigationItem>
    </nav>
);

export default nav