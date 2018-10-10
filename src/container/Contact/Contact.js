import React, {Component} from 'react';
import axios from '../../axios';
import classes from './Contact.css';

class Contact extends Component{
    state = {
        nameData: '',
        emailData: '',
        textData: '',
        formSubmitBtnDisabled: true
    }

    ChangeFormName = (event) => {
        this.setState({nameData: event.target.value});
    }

    ChangeFormMail = (event) => {
        this.setState({emailData: event.target.value});
        const reg = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{1,3})+$/;
        if (reg.test(this.state.emailData) === true) {
            this.setState({formSubmitBtnDisabled: false});
        }
        else {
            this.setState({formSubmitBtnDisabled: true});
        }
    }

    ChangeFormText = (event) => {
        this.setState({textData: event.target.value});
    }
    orderHandler = (event)=>{
        event.preventDefault();
        const formData = {
            name : this.state.nameData,
            email : this.state.emailData,
            message : this.state.textData
        };
        axios.post('/contact.json', formData)
            .then(response=>{
                alert('Email sent')
            })
            .catch(
                error => {alert('NOT Email sent')}
            )
    }
    render(){
        return(
            <section className={classes.Contact}>
                <form className={classes.Container} onSubmit={this.orderHandler}>
                    <h2>Contact me</h2>
                    <ul>
                        <li>
                            <label htmlFor="input">Your name</label>
                            <input name="input" type="text" placeholder="Name" value={this.state.nameData} onChange={this.ChangeFormName}/>
                        </li>
                        <li>
                            <label htmlFor="input">Your e-mail</label>
                            <input name="input" type="text" placeholder="e-mail" value={this.state.emailData} onChange={this.ChangeFormMail}/>
                        </li>
                        <li>
                            <label htmlFor="textarea">Label</label>
                            <textarea name="input" type="text" placeholder="Your messege" value={this.state.textData} onChange={this.ChangeFormText}/>
                        </li>
                    </ul>
                    <input type="submit" name="submit" value="Send e-mail" disabled={this.state.formSubmitBtnDisabled}/>
                </form>
            </section>
        );
    }
}

export default Contact;