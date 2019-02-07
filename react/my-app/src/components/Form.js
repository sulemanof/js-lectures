import React, { Component } from 'react';

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

        this.props.handleSubmit(this.state.value);
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
                <button className='button btn btn-light'>Search</button>
            </form>
        )
    }
}

export default Form;
