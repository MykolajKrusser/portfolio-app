import React from 'react';
import classes from './Loader.css';

const loader = (props)=>(
    <div className={classes.CssloadLoader}>
        <div className={[classes.CssloadInner, classes.Cssloadone].join(' ')}></div>
        <div className={[classes.CssloadInner, classes.Cssloadtwo].join(' ')}></div>
        <div className={[classes.CssloadInner, classes.Cssloadthree].join(' ')}></div>
    </div>
);

export default loader;