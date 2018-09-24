import React, { Component } from 'react'
import {Route, Switch} from 'react-router-dom';
import Wrap from './hoc/Wrap/Wrap'
import Layout from './hoc/Layout/Layout'
import HomePage from './component/Pages/HomePage/HomePage';
import AboutMe from './component/Pages/AboutMe/AboutMe';

class App extends Component {
  render() {
    return (
      <Wrap>
        <Layout>
          <Switch>
            <Route path='/about-me' component={AboutMe}/>
            <Route path='/' exact component={HomePage}/>
          </Switch>
        </Layout>
      </Wrap>
    );
  }
}

export default App;
