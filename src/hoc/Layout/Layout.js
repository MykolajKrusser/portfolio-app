import React, {Component} from 'react'
import Wrap from '../Wrap/Wrap'
import Nav from '../../component/Navigation/Navigation'
import MenuBtn from '../../component/UI/MenuBtn/MenuBtn'
import classes from './Layout.css'

class Layout extends Component {
    state={
        navShow: true,
        menuBtnActive: null
    }
    menuBtnHandler = ()=>{
        if(this.state.navShow){
            this.setState({menuBtnActive: 'Active'})
        }
        if(this.state.menuBtnActive === 'Active'){
            this.setState({menuBtnActive: null})
        }
    }
    render(){
        return (
            <Wrap>
                <MenuBtn 
                    clicked={this.menuBtnHandler}
                    btnActive={this.state.menuBtnActive}/>
                {this.state.navShow ? <Nav/> : null}
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Wrap>
        );
    }
}

export default Layout