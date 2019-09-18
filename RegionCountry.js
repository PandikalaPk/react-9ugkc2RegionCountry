import React, { Component } from 'react';
import axios from 'axios';
import { render } from 'react-dom';


export default class Parent extends Component {
  constructor(props) {
    super(props);
  }

  

  toggleCheckboxChange = ev => {
    this.setState({ value: 5 })
  }
  chekkBoxList = () => {
    const region = this.props.values;    
    const countryNames = region && region.regions && region.regions.map(region => {
        console.log("inside loop",region.region_name)
        region.countries.map( country => {
          return country.country_name;          
        })
      })
    

  }

  render() {
    
    return (
      <div>
  {this.chekkBoxList()}
        
      </div>
    )

  }
}

function Child({ num, toggleCheckboxChange }) {
  return (
    <div>
      <label>
        {num}
        <input type="checkbox" onChange={toggleCheckboxChange}
        />
      </label>
    </div>
  )
}

render(<Parent />, document.getElementById('root'));
