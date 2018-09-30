import React, {Component} from 'react';
import classes from './MyWorks.css';
import Wrap from '../../hoc/Wrap/Wrap';

class MyWorks extends Component{
    state = {

    }
    render(){
        return(
        <Wrap>
            <section className={classes.MyWorks}>
                Work
            </section>
        </Wrap>
    );
    }
} 

export default MyWorks;