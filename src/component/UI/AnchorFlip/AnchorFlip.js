import React from 'react';
import classes from './AnchorFlip.css';

const AnchorFlip = (props) => (
    <a
        className={classes.Btnflip}
        href={[props.git, props.live].join(' ')}
        target="_blank"
        rel="noopener noreferrer"
    >
        <span className={[classes.BtnflipItem, classes.Btnflip__front].join(' ')}>{props.children}</span>
		<span className={[classes.BtnflipItem, classes.Btnflip__center].join(' ')}></span>
		<span className={[classes.BtnflipItem, classes.Btnflip__back].join(' ')}>{props.children}</span>
    </a>
);
export default AnchorFlip;