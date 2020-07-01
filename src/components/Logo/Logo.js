import React from 'react';
import pointer from '../../arrow-down.svg';
import './anime.css';
import './Logo.css';

const Logo = ({ onSetSidebarOpen, name}) => {
	return (
    <div>
    <div style={{display : 'flex'}} className='main'>
    	<h1 className='tc pa2 br2 welcome-logo'><a href='fair.html'>Welcome to fair-weather!!!</a></h1>
        <img alt='fairWeather-Logo' src='./logo.png' className='logo animated slideInDown'/>
        <button onClick={onSetSidebarOpen} className='btn grow'> ☰ </button>
    </div>
       <span className='usrLogo'>{`you're currently signed in as ${name}`}</span>
    	 <h3 className='welcome-per-logo' >Personalize your weather Content</h3>
    	 <h4 className='help'><a href ='http://www.csgnetwork.com/llinfotable.html'>check out this link if you are not sure of your latitude and longitude</a></h4>
         <img alt='personalize your search' className='animated infinite wobble pointer' style={{height: 50, width: 50}} src={pointer}/>
    </div>
		)
}

export default Logo