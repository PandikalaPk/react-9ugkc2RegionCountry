import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import RegionCountry from './RegionCountry';
import axios from 'axios';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      checkboxValue:'',
    };
   this.checkboxChange = this.checkboxChange.bind(this);
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

checkboxChange(event){
  if(event.target.checked){
    this.setState({checkboxValue:event.target.value});
  }else{
    this.setState({checkboxValue:''});
  }
}

  render() {
    const data = this.state.result;
    
    return (
      <div>
        <Hello name={this.state.name} />
        <h3 align ="left"> Search Options</h3> 
         
        <h3 align ="left"> Region/Country</h3>  
        <div> 
             <h4>
                <label>
                  <input type="checkbox" value="All" onChange={this.checkboxChange}/>
                  All
                </label>
              </h4>
          
              <h4>
                <label>
                  <input type="checkbox" value="Misc" onChange={this.checkboxChange}/>
                  Misc
                </label>
              </h4>
            
        <input className="textBox" type="text" placeholder=" Quick Search" /> 
        <h3>{this.state.checkboxValue}</h3>
        </div>
        <RegionCountry values={data}/>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
