import React from 'react';
import classes from './MyWorkItem.css';

const mywork = (props)=>(
        <div className={classes.Col} onTouchStart="this.classList.toggle('hover');">
            <div className={classes.Container}>
                <div className={classes.Front} style={{backgroundImage: "url(https://firebasestorage.googleapis.com/v0/b/myportfolio-42a16.appspot.com/o/works_img%2F%D0%91%D0%B5%D0%B7%20%D0%BD%D0%B0%D0%B7%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F.jpg?alt=media&token=80cc731d-2f65-4147-9a07-f1101aee54e2)"}}>
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