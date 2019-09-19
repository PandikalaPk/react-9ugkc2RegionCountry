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
  async componentDidMount() {
  await axios.get('https://cpmtest.app.wtcdev2.paas.fedex.com/cpm/R3/search-options-service/regionCountry')
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
        
        <h2 align ="left"> Region/Country</h2>  
        <div> 
             <h4>
                <label>
                  <input type="checkbox" value="All"/>
                  All
                </label>
              </h4>
          
              <h4>
                <label>
                  <input type="checkbox" value="Misc"/>
                  Misc
                </label>
              </h4>
            
        <input className="textBox" type="text" placeholder=" Quick Search" /> 
        
        </div>
         
        <RegionCountry values={data}/>
        <button onClick = {this.updateState}>Search</button>

      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
