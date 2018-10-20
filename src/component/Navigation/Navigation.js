import React from 'react';
import classes from './Navigation.css';
import NavigationItem from '../UI/NavigationItem/NavigationItem';
import SocialsBlock from '../UI/SocialsBlock/SocialsBlock';

const nav = (props) => {
    
    const cssClasses = [classes.Navigation, props.navShow ? classes.NavigationOpen : classes.NavigationClose];
    
    return(
        <nav
        className={cssClasses.join(' ')}
    >
        <NavigationItem closeNav={props.clicked} link='/' exact>Home</NavigationItem>
        <NavigationItem closeNav={props.clicked} link='/about-me'>About me</NavigationItem>
        <NavigationItem closeNav={props.clicked} link='/my-works'>My works</NavigationItem>
        <NavigationItem closeNav={props.clicked} link='/contact'>Contact me</NavigationItem>
        <SocialsBlock/>
    </nav>
    );
}

export default nav