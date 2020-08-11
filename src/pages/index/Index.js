import React, { Component } from 'react';
import Header from '../../component/header/Header';
import List from '../../component/list/List';

export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartValue: 0,
    };
  }
  handleCartValue = (isClicked) => {
    let cartValue = this.state.cartValue;
    if (isClicked) {
      cartValue--;
    } else {
      cartValue++;
    }
    this.setState({
      cartValue: cartValue,
    });
  };
  render() {
    const { cartValue } = this.state;
    return (
      <div>
        <Header cartValue={cartValue} />
        <List handleCartValue={this.handleCartValue} />
      </div>
    );
  }
}
