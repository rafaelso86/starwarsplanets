import React, { Component } from 'react';
import './css/App.min.css'

import Topo from './components/Topo';
import Router from './router';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Topo></Topo>
        <Router></Router>
      </div>
    );
  }
}

export default App;
