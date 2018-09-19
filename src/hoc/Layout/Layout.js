import React, {Component} from 'react';
import Wrap from '../Wrap/Wrap';
import Navigation from '../../component/Navigation/Navigation';
import MenuBtn from '../../component/UI/MenuBtn/MenuBtn';
import Background from '../../component/UI/Background/Background';


import classes from './Layout.css';

class Layout extends Component {
    state={
        navShow: false,
        menuBtnActive: null
    }
    menuBtnHandler = ()=>{
        if(!this.state.navShow){
            this.setState({menuBtnActive: 'Active', navShow: true})
        }
        if(this.state.menuBtnActive === 'Active'){
            this.setState({menuBtnActive: null, navShow: false})
        }
    }
    render(){
        return (
            <Wrap>
                <Background/>
                <MenuBtn
                    clicked={this.menuBtnHandler}
                    btnActive={this.state.menuBtnActive}/>
                <Navigation 
                    navShow={this.state.navShow}
                    clicked={this.menuBtnHandler}/>
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Wrap>
        );
    }
}

export default Layout