import React, {Component} from 'react';
import axios from '../../axios';
import classes from './MyWorks.css';
import MyWorkItem from '../../component/MyWorkItem/MyWorkItem';
import errorHandler from '../../hoc/withErrorHandler/withErrorHandler';

class MyWorks extends Component{
    state = {
        works: [],
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

export default errorHandler(MyWorks, axios);