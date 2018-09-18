import React from 'react';
import {NavLink} from 'react-router-dom';
import classes from './NavigationItem.css';

const navigationItem = (props) => (
    <NavLink 
        to={props.link} 
        exact={props.exact} 
        activeClassName={classes.active}
        onClick={props.closeNav}
    >
    {props.children}
    </NavLink>
);
export default navigationItem;