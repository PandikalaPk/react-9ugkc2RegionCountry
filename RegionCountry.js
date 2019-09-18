import React, { Component } from 'react';
import axios from 'axios';
import CheckboxList from './CheckboxList';
import { render } from 'react-dom';


export default class Parent extends Component {
  constructor(props) {
    super(props);
  }

  chekkBoxList = () => {
    const region = this.props.values; 
    
    const countryNames = region && region.regions && region.regions.map(regionC => {
      
        console.log("inside loop...",regionC.region_name)
//        region.countries.map( country => {
          return 
          <CheckBoxList send={country.country_name}/>;         
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

render(<Parent />, document.getElementById('root'));
