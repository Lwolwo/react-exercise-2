import React, { Component } from 'react';
import Header from '../../component/header/Header';
import List from '../../component/list/List';

export default class Index extends Component {
  render() {
    return (
      <div>
        <Header />
        <List />
      </div>
    );
  }
}
