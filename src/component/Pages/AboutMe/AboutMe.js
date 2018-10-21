import React from 'react';
import classes from './AboutMe.css';
import Background from '../../UI/Background/Background';

const aboutMe = (props)=>(
    <section className={classes.AboutMe}>
    <Background/>
        <div className={classes.Content}>
            <h1>About me</h1>
            <article>
                <p>
                    I am constantly studying and improving my skills in compelling designs that spring to life using transition and animations.
                    Using the most sophisticated technologies available today for fully 
                    interactive and responsive websites and apps.
                </p>
                <p>
                    I’m passionate about the power of colours and shapes in developing a great new design, 
                    and JavaScript offers me endless fascinating possibilities in devising just the right solution.
                </p>
            </article>
        </div>
    </section>
);

export default aboutMe;