import React from 'react';
import Wrap from '../../../hoc/Wrap/Wrap';
import classes from './Background.css';

const background = (props)=>(
    <Wrap>
    <div className={classes.BgImage} style={{width:"100%", height:"100%"}}></div>
                <svg className={classes.BlobCont}>
                    <image href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARwAAACxCAMAAAAh3/JWAAAAA1BMVEUkniE7lWQsAAAASElEQVR4nO3BMQEAAADCoPVPbQ0PoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIALA8UNAAFusnLHAAAAAElFTkSuQmCC" mask="url(#mask)" style={{width:"100%", height:"100%"}} preserveAspectRatio="xMidYMid slice" />
                        <mask id="mask" x="0" y="0">
                            <g style={{filter: "url(#gooey)"}}>
                                <circle className={classes.Blob} cx="10%" cy="10%" r="160" fill="white" stroke="white"/>
                                <circle className={classes.Blob} cx="50%" cy="10%" r="80" fill="white" stroke="white"/>
                                <circle className={classes.Blob} cx="17%" cy="15%" r="140" fill="white" stroke="white"/>
                                <circle className={classes.Blob} cx="90%" cy="20%" r="120" fill="white" stroke="white"/>
                                <circle className={classes.Blob} cx="30%" cy="25%" r="30" fill="white" stroke="white"/>
                                <circle className={classes.Blob} cx="50%" cy="60%" r="80" fill="white" stroke="white"/>
                                <circle className={classes.Blob} cx="70%" cy="90%" r="10" fill="white" stroke="white"/>
                                <circle className={classes.Blob} cx="90%" cy="60%" r="90" fill="white" stroke="white"/>
                                <circle className={classes.Blob} cx="30%" cy="90%" r="80" fill="white" stroke="white"/>
                                <circle className={classes.Blob} cx="10%" cy="10%" r="80" fill="white" stroke="white"/>
                                <circle className={classes.Blob} cx="50%" cy="10%" r="20" fill="white" stroke="white"/>
                                <circle className={classes.Blob} cx="17%" cy="15%" r="70" fill="white" stroke="white"/>
                                <circle className={classes.Blob} cx="40%" cy="20%" r="120" fill="white" stroke="white"/>
                                <circle className={classes.Blob} cx="30%" cy="25%" r="30" fill="white" stroke="white"/>
                                <circle className={classes.Blob} cx="80%" cy="60%" r="80" fill="white" stroke="white"/>
                                <circle className={classes.Blob} cx="17%" cy="10%" r="100" fill="white" stroke="white"/>
                                <circle className={classes.Blob} cx="40%" cy="60%" r="90" fill="white" stroke="white"/>
                                {/*<circle className={classes.Blob} cx="10%" cy="50%" r="80" fill="white" stroke="white"/> */}
                            </g>
                        </mask>
                        <filter id="gooey" style={{height:"130%"}}>
                            <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur" />
                            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
                        </filter>
                </svg>
            </Wrap>
);

export default background;