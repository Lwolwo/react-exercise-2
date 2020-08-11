import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ListCard.scss';

export default class ListCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isClicked: false,
    };
  }

  handleClick = () => {
    this.setState({
      isClicked: !this.state.isClicked,
    });
  };

  render() {
    const { price, name } = this.props;
    const { isClicked } = this.state;
    return (
      <div className="listCard">
        <h3>{name}</h3>
        <img
          src={require('../../assets/product_image_placeholder.png')}
          alt="productImage"
        />
        <div className="buy">
          <p className="price">{price}</p>
          <Button
            variant="primary"
            className="btn btn-primary btn-sm"
            active={isClicked}
            onClick={this.handleClick}
          >
            add to cart
          </Button>
        </div>
      </div>
    );
  }
}

ListCard.propTypes = {
  price: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
