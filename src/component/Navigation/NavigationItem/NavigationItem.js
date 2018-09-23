import React from 'react';
import {NavLink} from 'react-router-dom';
import classes from './NavigationItem.css';

const navigationItem = (props) => (
    <NavLink
        className={classes.Btnflip}
        to={props.link} 
        exact={props.exact} 
        onClick={props.closeNav}
    >
        <span className={[classes.BtnflipItem, classes.Btnflip__front].join(' ')}>{props.children}</span>
		<span className={[classes.BtnflipItem, classes.Btnflip__center].join(' ')}></span>
		<span className={[classes.BtnflipItem, classes.Btnflip__back].join(' ')}>{props.children}</span>
    </NavLink>
);
export default navigationItem;