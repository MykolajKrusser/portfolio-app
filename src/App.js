import React, { Component } from 'react'
import Wrap from './hoc/Wrap/Wrap'
import Layout from './hoc/Layout/Layout'
import HomePage from './component/HomePage/HomePage';

class App extends Component {
  render() {
    return (
      <Wrap>
        <Layout>
            <HomePage/>
        </Layout>
      </Wrap>
    );
  }
}

export default App;
