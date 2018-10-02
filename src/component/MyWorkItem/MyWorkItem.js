import React from 'react';
import classes from './MyWorkItem.css';

const mywork = (props)=>(
        <div className={classes.Col} onTouchStart="this.classList.toggle('hover');">
            <div className={classes.Container}>
                <div className={classes.Front} style={{backgroundImage: "url(https://unsplash.it/500/500/)"}}>
                    <div className={classes.Inner}>
                        <p>Diligord</p>
          <span>Lorem ipsum</span>
                    </div>
                </div>
                <div className={classes.Back}>
                    <div className={classes.Inner}>
                      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat velit quae suscipit c.</p>
                    </div>
                </div>
            </div>
        </div>
);
export default mywork;