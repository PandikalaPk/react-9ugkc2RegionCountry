import React, { Component } from 'react';
import axios from 'axios';

import { render } from 'react-dom';

export default class Parent extends Component{

  constructor() {
    super();
    this.state = {
      checkboxValue:'',
    };
   }



    async componentDidMount() {
  await axios.get('https://cpmtest.app.wtcdev2.paas.fedex.com/cpm/R3/search-options-service/regionCountry')
  .then(response => {
    const result = response.data;
    this.setState({ result });
    console.log("Outer...",result);
  })
  .catch(error => {
    console.log(error);
  });
}

render() {
    const data = this.state.result;
    console.log(result);
    return (
      <div>
        <Hello name={this.state.name} />

        </div>
    );
}

render(<Parent />, document.getElementById('root'));