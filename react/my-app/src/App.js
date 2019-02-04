import React, { Component } from 'react';
import Form from './components/Form';
import Table from './components/Table';
import getWeather from './getWeather';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cityData: []
    }
  }

  handleWeatherResponse = ({ current, location }) => {
    if (!current && !location) return;
    const data = {
      name: location.name,
      country: location.country,
      celsium: current.temp_c,
      farenheit: current.temp_f
    };

    this.setState(state => ({ cityData: [ ...state.cityData, data ]}))
  };

  handleWeatherRequest = params => {
    getWeather(params).then(this.handleWeatherResponse)
  }

  render() {
    return (
      <>
        <Form 
          handleSubmit={this.handleWeatherRequest}
          placeholder='Type a city...'/>
        <Table raws={this.state.cityData} />
      </>
    );
  }
}

export default App;
