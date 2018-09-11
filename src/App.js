import React, { Component } from 'react'
import Wrap from './hoc/Wrap/Wrap'
import Layout from './hoc/Layout/Layout'

class App extends Component {
  render() {
    return (
      <Wrap>
        <Layout>
            Some thing there
        </Layout>
      </Wrap>
    );
  }
}

export default App;
