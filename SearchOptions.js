import React from 'react';

export default class SearchOptions extends Component{ 

  return(



<div>
      <h2 align ="left"> Search Options</h2> 
        <div className="first">
         
             <header className="inside-header">
                <h4 align ="left"> Hierarchy Comparison Direction</h4> 
                </header>
                 <header className="first-header">
                <input type="radio" name="fruit" value="Compare Down Hierarchy"  onChange={this.checkboxChange}/> Compare Down Hierarchy
                <input type="radio" name="fruit" value="Compare Across Hierarchy"  onChange={this.checkboxChange} />Compare Across Hierarchy
            </header>
        </div>
        <h5>User have Selected {this.state.checkboxValue}</h5>
        <div>
  )

}
export default SearchOptions;
