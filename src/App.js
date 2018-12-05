import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import Layout from './hoc/Layout/Layout';
import HomePage from './component/Pages/HomePage/HomePage';
import asyncComponent from './hoc/asyncComponent/asyncComponent';

const asyncAboutMe = asyncComponent(()=>{
  return import('./component/Pages/AboutMe/AboutMe');
});

const asyncMyWorks = asyncComponent(()=>{
  return import('./container/MyWorks/MyWorks');
});

const asyncContact = asyncComponent(()=>{
  return import('./container/Contact/Contact');
});

const asyncPage404 = asyncComponent(()=>{
  return import('./component/UI/404Page/Page404');
});

class App extends Component {
  render() {
    return (
        <Layout>
          <Switch>
            <Route path='/contact' component={asyncContact}/>
            <Route path='/my-works' component={asyncMyWorks}/>
            <Route path='/about-me' component={asyncAboutMe}/>
            <Route path='/' exact component={HomePage}/>
            <Route component={asyncPage404}/>
          </Switch>
        </Layout>
    );
  }
}

export default App;
