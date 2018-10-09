import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import Layout from './hoc/Layout/Layout';
import HomePage from './component/Pages/HomePage/HomePage';
import AboutMe from './component/Pages/AboutMe/AboutMe';
import MyWorks from './container/MyWorks/MyWorks';
import Contact from './container/Contact/Contact';
import Page404 from './component/UI/404Page/Page404';

class App extends Component {
  render() {
    return (
        <Layout>
          <Switch>
            <Route path='/contact' component={Contact}/>
            <Route path='/my-works' component={MyWorks}/>
            <Route path='/about-me' component={AboutMe}/>
            <Route path='/' exact component={HomePage}/>
            <Route component={Page404}/>
          </Switch>
        </Layout>
    );
  }
}

export default App;
