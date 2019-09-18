import React, {Component} from 'react';
import axios from 'axios';
import {render} from 'react-dom';

export default class Parent extends Component {
    constructor(props) {
      super(props);
      }


    render() {
      const region = this.props.values;
      console.log(region);
      return(
        <div>
        </div>
      )

    }
}
render(<Parent/>, document.getElementById('root'));