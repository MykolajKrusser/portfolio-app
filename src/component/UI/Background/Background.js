import React from 'react';
import classes from './Background.css';

const background = (props)=>(
        <div className={classes.Background}>
            <div className={classes.Container}>
                <div className={classes.Circle}></div>
                <div className={classes.Circle}></div>
                <div className={classes.Circle}></div>
            </div>
        </div>
);

export default background;