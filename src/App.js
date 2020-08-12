import React, { Component } from 'react';
import Index from './pages/index/Index';
// import Form from './component/form/Form';
import './App.scss';

class App extends Component {
  render() {
    return (
      <main className="app">
        <Index />
        {/* <Form /> */}
      </main>
    );
  }
}

export default App;
