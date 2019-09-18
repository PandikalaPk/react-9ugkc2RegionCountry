import React, {Component} from 'react';
import {render} from 'react-dom';

class Parent extends Component {

    state = {
        value: 0
    }

    toggleCheckboxChange = ev => {
        this.setState({value: 5})
    }


    render() {
        return (
            <Child num={this.state.value} toggleCheckboxChange={this.toggleCheckboxChange}/>
        );
    }
}

function Child({num, toggleCheckboxChange}) {
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

render(<Parent/>, document.getElementById('root'));