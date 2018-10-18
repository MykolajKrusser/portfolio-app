import React, {Component} from 'react';
import Wrap from '../Wrap/Wrap';
import Navigation from '../../component/Navigation/Navigation';
import MenuBtn from '../../component/UI/MenuBtn/MenuBtn';
import MobMenuBtn from '../../component/UI/MobMenuBtn/MobMenuBtn';
import BackgroundMain from '../../component/UI/Background/BackgroundMain';
import classes from './Layout.css';

class Layout extends Component {
    state={
        navShow: false,
        menuBtnActive: null,
        mobMenuBtn: false
    }

    componentDidMount(){
       if(document.body.clientWidth <= 1024){
           this.setState({mobMenuBtn: true})
       }
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
        let humbugerBtn = <MenuBtn
            clicked={this.menuBtnHandler}
            btnActive={this.state.menuBtnActive}
        />
        if (this.state.mobMenuBtn){
            humbugerBtn = <MobMenuBtn 
            clicked={this.menuBtnHandler}
            checked={this.state.navShow}/>
        }
        return (
            <Wrap>
                <BackgroundMain/>
                {humbugerBtn}
                <Navigation 
                    navShow={this.state.navShow}
                    clicked={this.menuBtnHandler}
                />
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Wrap>
        );
    }
}

export default Layout