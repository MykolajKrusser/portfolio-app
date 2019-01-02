import React from 'react';
import classes from './SocialsBlock.css';

const socialBlock = (props)=>(
    <ul className={classes.Socials}>
        <li><a href="https://web.facebook.com/mykolaj.krusser" target="_blank" rel="noopener noreferrer"><i className={[classes.Icon, 'fab fa-facebook'].join(' ')} aria-hidden="true"></i>{props.children}</a></li>
        <li><a href="https://www.linkedin.com/in/mykolaj-krusser" target="_blank" rel="noopener noreferrer"><i className={[classes.Icon, 'fab fa-linkedin-in'].join(' ')} aria-hidden="true"></i>{props.children}</a></li>
        <li><a href="https://github.com/MykolajKrusser" target="_blank" rel="noopener noreferrer"><i className={[classes.Icon, 'fab fa-github'].join(' ')} aria-hidden="true"></i>{props.children}</a></li>
        <li><a href="mailto:nicolaskrusser@gmail.com" ><i className={[classes.Icon, 'fa fa-envelope'].join(' ')} aria-hidden="true"></i>{props.children}</a></li>
    </ul>
);
export default socialBlock;
