import React, { Component } from 'react';
import { render } from 'react-dom';
import RegionCountry from './RegionCountry';
import axios from 'axios';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }
  componentDidMount() {
  axios.get('https://cpmtest.app.wtcdev2.paas.fedex.com/cpm/R3/search-options-service/regionCountry')
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.log(error);
  });
}

  render() {
    return (
      <div>
       
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
