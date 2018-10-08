import React, {Component} from 'react';
import classes from './Contact.css';

class Contact extends Component{
    state = {

    }
    render(){
        return(
            <section className={classes.Contact}>
                <form className={classes.Container}>
                    <h2>Contact me</h2>
                    <ul>
                        <li>
                            <label htmlFor="input">Your name</label>
                            <input name="input" type="text" placeholder="Name"/>
                        </li>
                        <li>
                            <label htmlFor="input">Your e-mail</label>
                            <input name="input" type="text" placeholder="e-mail"/>
                        </li>
                        <li>
                            <label htmlFor="textarea">Label</label>
                            <textarea name="input" type="text" placeholder="Your messege"/>
                        </li>
                    </ul>
                    <input type="submit" name="submit" value="Send e-mail"/>
                </form>
            </section>
        );
    }
}

export default Contact;