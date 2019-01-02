import React from 'react';
import classes from './AboutMe.css';
import Background from '../../UI/Background/Background';
import NavigationItem from '../../UI/NavigationItem/NavigationItem';

const aboutMe = (props)=>(
    <section className={classes.AboutMe}>
        <Background/>
        <div className={classes.Content}>
            <h1>About me</h1>
            <article>
                <p>
                    I'm a Front End WEB developer: writing
                    front-end part of web pages and applications, 
                    also able to establish front-end and back-end 
                    interaction through <strong>AJAX</strong>. Familiar with <strong>FireBase</strong>, <strong>MongoDB</strong>, <strong>Express.js</strong>.
                </p>
                <p>
                    I create various interfaces by means of <strong>semantic HTML</strong>,
                    <strong> CSS3, SCSS, SASS</strong> for animation and <strong>RWD</strong>. To build projects I use <strong>Webpack 4</strong>.
                    I’m passionate about the power of colors and shapes in developing a great new design, 
                    and <strong>JavaScript ES5 and ES6</strong> offers me endless fascinating possibilities in devising just the right solution.
                    No secret <strong>jQuery</strong> is not enough today, so I use <strong>ReactJS</strong> with <strong>Redux</strong>.
                    I am familiar with testing methodologies <strong>JEST</strong>. I work only using <strong>GIT</strong> with terminal every day. I am fluent in bothe  spoken and written English.
                </p>
                <p>
                    My goal is to help you to create elegant and efficient web applications.
                    I will be glad to cooperate with like-minded people.
                </p>
                <p>
                    I was born in Ukraine into a family of engineers. I drive a green Peugeot.
                    On an inteview you will see that I don't have paws :)
                </p>
            </article>
            <NavigationItem link='/my-works'>My works</NavigationItem>
        </div>
    </section>
);

export default aboutMe;