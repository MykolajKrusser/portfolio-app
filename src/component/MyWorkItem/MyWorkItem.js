import React from 'react';
import classes from './MyWorkItem.css';
import AnchorFlip from '../UI/AnchorFlip/AnchorFlip';

const mywork = (props)=>(
    <section className={classes.WorkWrap}>
        <div className={classes.Col}>
            <div className={classes.Container}>
                <div className={classes.Front} style={{backgroundImage: "url(" + props.background + ")"}}>
                    <div className={classes.Inner}>
                        <h2 className={classes.Title}>{props.title}</h2>
                    </div>
                </div>
                <div className={classes.Back} style={{backgroundImage: "url(" + props.background2 + ")"}}>
                    <div className={classes.Inner}>
                      <div>
                          <AnchorFlip live={props.live}>LIVE!</AnchorFlip>
                          <AnchorFlip git={props.git}>GitHub</AnchorFlip>
                      </div>
                    </div>
                </div>
            </div>
        </div>
        <div className={classes.Descript}>
            <h3>{props.prevTitle}</h3>
            <article >{props.description}</article>
        </div>
    </section>
);
export default mywork;