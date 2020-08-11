import React, { Component } from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import './List.scss';
import ListCard from '../listCard/ListCard';

export default class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      iPhoneData: [],
      HuaWeiData: [],
    };
  }
  async componentDidMount() {
    const result = await fetch('http://localhost:3000/products', {
      method: 'GET',
    }).then((response) => {
      if (response.status >= 200 && response.status <= 299) {
        return response.json();
      }
      return Promise.reject();
    });

    const iPhoneData = [],
      HuaWeiData = [];
    result.forEach((item) => {
      if (item.category === 'iPhone') {
        iPhoneData.push(item);
      } else if (item.category === 'HUAWEI') {
        HuaWeiData.push(item);
      }
    });

    this.setState({
      iPhoneData: iPhoneData,
      HuaWeiData: HuaWeiData,
    });
  }
  render() {
    const { iPhoneData, HuaWeiData } = this.state;
    return (
      <div className="list">
        <div className="listItem">
          <h2 className="title">
            {iPhoneData.length === 0 ? '' : iPhoneData[0].category}
          </h2>
          <div className="listCardWrapper">
            {iPhoneData.map((item, index) => (
              <ListCard
                key={index}
                price={item.price}
                name={item.name}
                handleCartValue={(isClicked) =>
                  this.props.handleCartValue(isClicked)
                }
              />
            ))}
          </div>
        </div>
        <div className="listItem">
          <h2 className="title">
            {HuaWeiData.length === 0 ? '' : HuaWeiData[0].category}
          </h2>
          <div className="listCardWrapper">
            {HuaWeiData.map((item, index) => (
              <ListCard
                key={index}
                price={item.price}
                name={item.name}
                handleCartValue={(isClicked) =>
                  this.props.handleCartValue(isClicked)
                }
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

List.propTypes = {
  handleCartValue: PropTypes.func.isRequired,
};
