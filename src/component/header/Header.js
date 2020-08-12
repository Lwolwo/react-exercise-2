import React, { Component } from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.scss';

export default class Header extends Component {
  render() {
    const { cartValue } = this.props;
    return (
      <div className="header">
        <div className="p-3 mb-2 bg-primary text-white wrapper">
          <h1>Store</h1>
          <div className="cart">
            <svg
              width="1.2em"
              height="1.2em"
              viewBox="0 0 16 16"
              className="bi bi-cart2"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"
              />
            </svg>
            <div className="bg-danger text-white value">{cartValue}</div>
          </div>
        </div>
      </div>
    );
  }
}

Header.propTypes = {
  cartValue: PropTypes.number.isRequired,
};
