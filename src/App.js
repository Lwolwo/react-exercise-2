import React, { Component } from 'react';
import Index from './pages/index/Index';
import './App.scss';

class App extends Component {
  render() {
    return (
      <main className="app">
        <Index />
      </main>
    );
  }
}

export default App;
