import React, { Component } from 'react';
import CurrencyInput from './components/CurrencyInput';
import { convertToBYN, convertToUSD } from './helpers/converters'
import './App.css';

const CURRENCY_NAMES = {
  USD: '$, USD',
  BYN: 'BYN'
};

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currency: CURRENCY_NAMES.USD,
      value: 1
    }
  }
  onCurrencyChange = (value, currency) => this.setState({ currency, value })

  render() {
    const { value, currency } = this.state;
    const USD = currency === CURRENCY_NAMES.USD ? value : convertToUSD(value);
    const BYN = currency === CURRENCY_NAMES.BYN ? value : convertToBYN(value)
    return (
      <div className="App">
        <h1>Live currency converter</h1>
        <CurrencyInput
          currency={CURRENCY_NAMES.USD}
          value={USD}
          onCurrencyChange={this.onCurrencyChange}/>
        <CurrencyInput
          currency={CURRENCY_NAMES.BYN}
          value={BYN}
          onCurrencyChange={this.onCurrencyChange}/>
      </div>
    );
  }
}

export default App;
