import React from 'react';
import classes from './HomePage.css';
import BackgroundHome from '../../UI/Background/BackgroundHome';

const homePage = (props)=>(
    <section className={classes.HomePage}>
        <BackgroundHome/>
        <div className={classes.Content}>
            <h1>I am Mykolaj Krusser</h1>
            <article>
                <p>
                    I am a creative front‑end developer.
                </p>
                <p>
                    I develop compelling designs that spring to life using transition and animations.
                using the most sophisticated technologies available today for fully 
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

export default homePage;