import React from 'react';
import classes from './HomePage.css';
import BackgroundHome from '../../UI/Background/BackgroundHome';

const homePage = (props)=>(
    <section className={classes.HomePage}>
        <BackgroundHome/>
        <div className={classes.Content}>
            <h1>Hello, my name is Mykolaj Krusser</h1>
            <article>
                <p>
                    And I am a front‑end developer
                </p>
                <p>
                    Engaged in the creation of modern WEB SITES and WEB APPLICATIONS.
                </p>
            </article>
        </div>
    </section>
);

export default homePage;