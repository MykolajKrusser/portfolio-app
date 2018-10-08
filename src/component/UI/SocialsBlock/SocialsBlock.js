import React from 'react';
import classes from './SocialsBlock.css';

const socialBlock = (props)=>(
    <ul className={classes.Socials}>
        <li><a href="https://github.com/MykolajKrusser" target="_blank" rel="noopener noreferrer"><i className={[classes.Icon, 'fab fa-facebook'].join(' ')} aria-hidden="true"></i>{props.children}</a></li>
        <li><a href="https://github.com/MykolajKrusser" target="_blank" rel="noopener noreferrer"><i className={[classes.Icon, 'fab fa-linkedin-in'].join(' ')} aria-hidden="true"></i>{props.children}</a></li>
        <li><a href="https://github.com/MykolajKrusser" target="_blank" rel="noopener noreferrer"><i className={[classes.Icon, 'fab fa-github'].join(' ')} aria-hidden="true"></i>{props.children}</a></li>
    </ul>
);
export default socialBlock;
