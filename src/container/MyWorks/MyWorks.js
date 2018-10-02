import React, {Component} from 'react';
import classes from './MyWorks.css';
import MyWorkItem from '../../component/MyWorkItem/MyWorkItem';

class MyWorks extends Component{
    state = {
        works: [
            { id: 1, title: 'Burger-builder', prevTitle: 'React app to create a burger.',
                links: 'www',
                description:'an app to create a burger from individual ingredients, send an order to the server, and view a list of orders.',
                category: ['react'],   
            },
            { id: 2, title: 'html page', prevTitle: 'Layout html, css, adaptive.',
                links: 'www',
                description:'Default layout use only css html.',
                category: ['css'],
            }
        ],
    }
    render(){
        return(
            <section className={classes.Cols}>
                <MyWorkItem works={this.state.works}/>
            </section>
        );
    }
} 

export default MyWorks;