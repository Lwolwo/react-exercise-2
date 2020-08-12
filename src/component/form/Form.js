import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import './Form.scss';

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      mobile: '',
      gender: 'Male',
    };
  }

  handleNameChange = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  handleMobileChange = (event) => {
    this.setState({
      mobile: event.target.value,
    });
  };

  handleGenderChange = (event) => {
    this.setState({
      gender: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.name, this.state.mobile, this.state.gender);
  };
  render() {
    const { name, mobile } = this.state;
    return (
      <div>
        <form className="form" onSubmit={this.handleSubmit}>
          <h1>Form practice</h1>
          <div className="formItem">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={this.handleNameChange}
            />
          </div>
          <div className="formItem">
            <label htmlFor="name">Mobile:</label>
            <input
              type="text"
              id="name"
              value={mobile}
              onChange={this.handleMobileChange}
            />
          </div>
          <div className="formItem">
            <label htmlFor="gender">Gender:</label>
            <select
              id="gender"
              name="gender"
              onChange={this.handleGenderChange}
              defaultValue="male"
            >
              <option value="male">Male</option>
              <option value="female">Feamle</option>
            </select>
          </div>
          <div>
            <Button className="btn btn-primary button" type="submit">
              Submit
            </Button>
          </div>
        </form>
      </div>
    );
  }
}
