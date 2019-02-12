import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../state-management/actions'

class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: ''
        };
    }

    handleChange = e => this.setState({ value: e.target.value });

    handleSubmit = (e) => {
        e.preventDefault();

        this.props.addTodo(this.state.value);
        this.setState({ value: '' });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className='searchBar'>
                <input 
                    type='text'
                    className='form-control form-control-lg'
                    value={this.state.value}
                    onChange={this.handleChange}
                    placeholder={this.props.placeholder} />
                <button className='button btn btn-light'>Add Todo</button>
            </form>
        )
    }
}

export default connect(
    null,
    { addTodo }
  )(Form);
