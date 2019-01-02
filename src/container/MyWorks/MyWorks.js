import React, {Component} from 'react';
import axios from '../../axios';
import classes from './MyWorks.css';
import MyWorkItem from '../../component/MyWorkItem/MyWorkItem';
import errorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import Loader from '../../component/UI/Loader/Loader';
import NavigationItem from '../../component/UI/NavigationItem/NavigationItem';

class MyWorks extends Component{
    state = {
        works: [],
        loading: true
    }
    
    componentDidMount(){
        axios.get('https://myportfolio-42a16.firebaseio.com/works/-LO9ND2xIDnY-oPX0GDp/works.json')
            .then(respons=>{
                this.setState({works: respons.data, loading: false})
            })
            .catch(error=>{
                this.setState({loading: false})
            });
    }

    render(){
        let myWorksList = this.state.works.map(
            work => {
                return <MyWorkItem
                    title={work.title}
                    prevTitle={work.prevTitle}
                    description={work.description}
                    category={work.category}
                    git={work.git}
                    live={work.live}
                    background={work.background}
                    background2={work.background2}
                    key={work.id}/>
            }
        )

        if (this.state.loading){
            myWorksList= <Loader/>
        }

        return(
            <section className={classes.Cols}>
                {myWorksList}
                <NavigationItem link='/contact'>Contact Me</NavigationItem>
            </section>
        );
    }
}

export default errorHandler(MyWorks, axios);