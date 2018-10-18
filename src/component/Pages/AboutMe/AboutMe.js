import React from 'react';
import classes from './AboutMe.css';
import Background from '../../UI/Background/Background';

const aboutMe = (props)=>(
    <section className={classes.AboutMe}>
    <Background/>
        <div className={classes.Content}>
            <h1>About me</h1>
            <article>
                Lorem Ipsum is simply dummy text of the printing 
                and typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown printer 
                took a galley of type and scrambled it to make a type specimen book.
            </article>
        </div>
    </section>
);

export default aboutMe;