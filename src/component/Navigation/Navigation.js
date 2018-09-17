import React from 'react'
import classes from './Navigation.css'

const nav = (props) => (
    <nav
        style={{
            transform: props.navShow ? 'translateX(0vw)' : 'translateX(100vw)',
            opacity: props.navShow ? '1' : '0'
        }}
        className={classes.Navigation}>
        <a>Link 1</a>
        <a>Link 1</a>
        <a>Link 1</a>
        <a>Link 1</a>
    </nav>
);

export default nav