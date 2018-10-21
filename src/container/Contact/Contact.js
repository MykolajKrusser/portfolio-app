import React, {Component} from 'react';
import axios from '../../axios';
import classes from './Contact.css';
import Modal from '../../component/UI//Modal/Modal';

class Contact extends Component{
    state = {
        nameData: '',
        emailData: '',
        textData: '',
        formSubmitBtnDisabled: true,
        messageCondition: false,
        messageConditionSuccess: 'Your message sent!',
        error: null
    }

    changeFormName = (event) => {
        this.setState({nameData: event.target.value});
    }

    changeFormMail = (event) => {
        this.setState({emailData: event.target.value});
        const reg = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{1,6})+$/;
        if (reg.test(this.state.emailData) === true) {
            this.setState({formSubmitBtnDisabled: false});
        }
        else {
            this.setState({formSubmitBtnDisabled: true});
        }
    }

    changeFormText = (event) => {
        this.setState({textData: event.target.value});
    }

    formDataHandler = (event)=>{
        event.preventDefault();
        const formData = {
            name : this.state.nameData,
            email : this.state.emailData,
            message : this.state.textData
        };
        axios.post('/contact.json', formData)
            .then(response=>{
                this.setState({messageCondition: true})
            })
            .catch(
                error => {
                    this.setState({error: error})
                }
            )
    }

    modalConfirm = ()=>{
        this.setState({
            nameData: '',
            emailData: '',
            textData: '',
            formSubmitBtnDisabled: true,
            messageCondition: false,
            error: null
        })
    }

    render(){
        return(
            <section className={classes.Contact}>
                <Modal 
                    show={this.state.messageCondition}
                    modalClosed= {this.modalConfirm}>
                        {this.state.nameData}, {this.state.messageConditionSuccess}
                        {this.state.error ? this.state.error.message : null}
                </Modal>
                <form onSubmit={this.formDataHandler}>
                    <h2>Contact me</h2>
                    <ul>
                        <li>
                            <label htmlFor="input">Your name</label>
                            <input title="Enter Your name" name="input" type="text" placeholder="Your name" required value={this.state.nameData} onChange={this.changeFormName}/>
                        </li>
                        <li>
                            <label htmlFor="input">Your e-mail</label>
                            <input title="Enter Your e-mail" name="input" type="email" placeholder="e-mail" required value={this.state.emailData} onChange={this.changeFormMail}/>
                        </li>
                        <li>
                            <label htmlFor="textarea">Your message</label>
                            <textarea title="Enter Your message" name="input" type="text" placeholder="Your message" required value={this.state.textData} onChange={this.changeFormText}/>
                        </li>
                    </ul>
                    <input type="submit" name="submit" value="Send e-mail" disabled={this.state.formSubmitBtnDisabled}/>
                </form>
            </section>
        );
    }
}

export default Contact;