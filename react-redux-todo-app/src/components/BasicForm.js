import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import styled from 'styled-components';

const StyledForm = styled(Form)`
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  .form-control {
    width: 40%;
  }
`;

class BasicForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ''
    };
  }

  handleInputChange = (event) => {
    this.setState({ value: event.target.value })
  }

  handleFormSubmit = (e) => {
    e.preventDefault();

    this.props.onSubmit({
      text: this.state.value
    });

    this.setState({ value: '' });
  }

  render() {
    return (
      <StyledForm onSubmit={this.handleFormSubmit}>
        <Form.Label>Add a todo for today</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter a todo"
          value={this.state.value}
          onChange={this.handleInputChange}
        />
        <Button variant="dark" type="submit">
          Add
        </Button>
      </StyledForm>
    );
  }
}

export default BasicForm;
