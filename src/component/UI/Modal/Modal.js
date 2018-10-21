import React, {Component} from 'react';
import classes from './Modal.css';
import Wrap from '../../../hoc/Wrap/Wrap';
import Backdrop from '../BackDrop/BackDrop';

class Modal extends Component {
    render(){
        return (
            <Wrap>
                <Backdrop show={this.props.show} clicked={this.props.modalClosed}/>
                <div className={classes.Modal}
                    style={{
                        transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity: this.props.show ? '1' : '0'
                    }}>
                    <p>{this.props.children}</p>
                </div>
            </Wrap>
        );
    }
    
}

export default Modal;