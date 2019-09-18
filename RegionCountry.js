import React, { Component } from 'react';
import axios from 'axios';
import CheckboxList from './CheckboxList';
import { render } from 'react-dom';


export default class Parent extends Component {
  constructor(props) {
    super(props);
  }

  

  
  checkBoxList = () => {
    const region = this.props.values; 
    console.log();   
    const countryNames = region && region.regions && region.regions.map(region => {
      
        <CheckBoxList/>
        region.countries.map( country => {
          return country.country_name;          
        })
      })
    

  }

  render() {
    
    return (
      <div>
 
        
      </div>
    )

  }
}

render(<Parent />, document.getElementById('root'));
