import React from 'react';
import './weather.css'

 
const Weather = ({timeZone, CurrentWeather, Forecast, Clouds, lat, lon, Windspeed, Temperature, Humidity}) => {
     return (
<div className='All-cards'> 
    <div className='weatherCard'>
      <h2 className='card-name main'>Current Weather</h2>  
        <div className='weatherInfo'>
           <ul className="object">
               <h3 style={{fontWeight: 'bolder', marginTop: 6, fontFamily: 'DigifaceWide'}}>City Name</h3>
               <li style={{padding: 10}}>Current Weather ---  </li>
               <li>lat ---  </li>
               <li>long --- </li>
               <li>Clouds --- </li>
               <li>Wind speed --- </li>
               <li>Temperature ---</li>
               <li>Humidity --- </li>	
           </ul>
        <div/>	
        <div className='params'>
           <ul>
               <h3 className="info pa3"> {timeZone}</h3>
               <li className="info"> {CurrentWeather}</li>
               <li className="info"> {lat}</li>
               <li className="info"> {lon}</li>
               <li className="info"> {Clouds}</li>
               <li className="info"> {Windspeed}</li>
               <li className="info"> {Temperature}</li>
               <li className="info"> {Humidity}</li>
           </ul>
        </div>
     </div>
  </div>
</div>    
     	)
} 
export default Weather