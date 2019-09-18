import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import RegionCountry from './RegionCountry';
import axios from 'axios';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {};
   
  }
  componentDidMount() {
  axios.get('https://cpmtest.app.wtcdev2.paas.fedex.com/cpm/R3/search-options-service/regionCountry')
  .then(response => {
    const result = response.data;
    this.setState({ result });
  })
  .catch(error => {
    console.log(error);
  });
}

  render() {
    const data = this.state.result;
    
    return (
      <div>
        <Hello name={this.state.name} />
      <RegionCountry values={data}/>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
