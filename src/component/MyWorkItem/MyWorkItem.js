import React from 'react';
import classes from './MyWorkItem.css';

const mywork = (props)=>(
        <div className={classes.Col}>
            <div className={classes.Container}>
                <div className={classes.Front} style={{backgroundImage: "url(" + props.background + ")"}}>
                    <div className={classes.Inner}>
                        <h2>{props.title}</h2>
                        <span>{props.prevTitle}</span>
                    </div>
                </div>
                <div className={classes.Back}>
                    <div className={classes.Inner}>
                      <p>{props.description}</p>
                    </div>
                </div>
            </div>
        </div>
);
export default mywork;