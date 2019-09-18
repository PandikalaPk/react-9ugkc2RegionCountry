import React from 'react';
import './style.css';


const CheckboxList = (props) =>{
 console.log("Calling",this.props.send);
  return(
    <div className="row" >
        {region.regions.map(region => {

          return (
            <div className="column">
            <div className="card">

            <header className="card-header">
              <h4>
                <label>
                  <input type="checkbox"  />
                  {regionC.regions.region_name}
                </label>
              </h4>
            </header>

              {regionC.regions.countries.map( country =>{
                return (
                      <div>        
                      <label>
                        <input type="checkbox" />
                        {country.country_name}
                      </label>
                         </div>            )
              })}
              </div>
            </div>
          )
        })}
      </div>

  )
}

export default CheckboxList;