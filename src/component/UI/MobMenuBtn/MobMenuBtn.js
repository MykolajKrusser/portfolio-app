import React from 'react'
import classes from './MobMenuBtn.css'

const mobMenuBtn = (props)=>{
    const cssSpan1 = [props.checked ? classes.Span1Active : classes.Span1];
    const cssSpan2 = [props.checked ? classes.Span2Active : classes.Span2];
    const cssSpan3 = [props.checked ? classes.Span3Active : classes.Span3];
    return(
        <div className={classes.MenuToggle} onClick={props.clicked}>
            <span className={cssSpan1}></span>
            <span className={cssSpan2}></span>
            <span className={cssSpan3}></span>
        </div>
    );
}

export default mobMenuBtn;