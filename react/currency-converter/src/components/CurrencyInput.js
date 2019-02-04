import React, { Component } from 'react';

export default class CurrencyInput extends Component {  
    handleChange = (e) => {
        this.props.onCurrencyChange(e.target.value, this.props.currency);
    }

    render() {
        const { currency, value } = this.props;

        return (
            <fieldset>
            <legend>Enter currency in {currency}:</legend>
            <input value={value}
                onChange={this.handleChange} />
            </fieldset>
        );
    }
}