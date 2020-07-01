import React from 'react';
import './weatherSearch.css';

 
const WeatherSearch = ({ onButtonSubmit, onLatInput, onLonInput, onCelsiusChange, onKelvinChange, }) => {
return (
	 <div className='searchBox'>
		<input type='search' placeholder="please put in your country's lat here" onChange={onLatInput} className='tc pa3 bg-lightest-green input' list="example"/>
		<input type='search' placeholder="please put in your country's lon here" onChange={onLonInput} className='tc pa3 bg-lightest-green input' list="example"/>	    
<datalist id="example">
  <option title='just put in the parameters i.e the locations lat&lon'> Nigerian data: lat&lon</option>
</datalist> 
	<div className='temp'>
	     	    <label className='format-label'>Celsius</label> <input type="radio"name="format" id='celsius'  onClick={onCelsiusChange}/>
		        <label className='format-label'>Kelvin</label> <input type="radio"name="format" id="Kelvin"   onClick={onKelvinChange}/>
	</div>
	<div>
	     <button className='searchButton grow' onClick={onButtonSubmit}>FIND WEATHER</button>
	</div> 
	</div>
    )
}
export default WeatherSearch