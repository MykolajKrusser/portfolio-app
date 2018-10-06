import React, {Component} from 'react';
import axios from '../../axios';
import classes from './MyWorks.css';
import MyWorkItem from '../../component/MyWorkItem/MyWorkItem';

class MyWorks extends Component{
    state = {
        works: [
            /*
            { id: 1, title: 'Burger-builder', prevTitle: 'React app to create a burger.',
            background: 'https://firebasestorage.googleapis.com/v0/b/myportfolio-42a16.appspot.com/o/works_img%2F698137.jpg?alt=media&token=3061d5c3-6ff5-440f-b210-1de291fd80f3',
            git: 'https://github.com/MykolajKrusser',
            live: 'https://google.com',
            description:'an app to create a burger from individual ingredients, send an order to the server, and view a list of orders.',
            category: ['react']
            },
            { id: 2, title: 'html page', prevTitle: 'Layout html, css, adaptive.',
            background: 'https://firebasestorage.googleapis.com/v0/b/myportfolio-42a16.appspot.com/o/works_img%2Fbg.jpg?alt=media&token=71bb647b-a02c-4dd4-b850-427c98681cce',
            git: 'https://github.com/MykolajKrusser',
            live: 'https://google.com',
            description:'Default layout use only css html.',
            category: ['css']
            }
            */
        ]
    }

    send = ()=>{
        const works = {
           works: this.state.works
        }
        axios.post('/works.json', works )
            .then(respons=>console.log(respons))
            .catch(error=>console.log(error));
    }
    
    componentDidMount(){
        axios.get('https://myportfolio-42a16.firebaseio.com/works/-LO9ND2xIDnY-oPX0GDp/works.json')
            .then(respons=>{
                this.setState({works: respons.data})
            })
            .catch(error=>{
                console.log(error)
            });
    }

    render(){
        const myWorksList = this.state.works.map(
            work => {
                return <MyWorkItem
                    title={work.title}
                    prevTitle={work.prevTitle}
                    description={work.description}
                    category={work.category}
                    git={work.git}
                    live={work.live}
                    background={work.background}
                    key={work.id}/>
            }
        )

        return(
            <section className={classes.Cols}>
                {myWorksList}
            </section>
        );
    }
}

export default MyWorks;