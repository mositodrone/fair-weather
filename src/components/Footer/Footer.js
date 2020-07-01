import React from 'react';
import './footer.css';
import fb from '../../facebook-icon.png';
import tw from '../../twitter-icon.png'

const Footer = () => {
 return (	
	<div style={{marginTop: 200}}>
	<ul className='ptc'>
		<li><a href='http://localhost:3200/privacy'>Privacy</a></li>
		<li><a href='http://localhost:3200/Terms'>Terms</a></li>
		<li><a href='http://localhost:3200/Contact'>Contact me</a></li>
	</ul>
	<div style={{textAlign: 'center', display: 'inlineFlex', backgroundColor : 'rgba(0, 0, 200, 0.67)', color: 'white'}}>
	<h3>this website was created and deployed
	     by <br/>
<a href='https://github.com/mositodrone' style={{color: 'gold', fontFamily: 'Forte', fontSize : 'x-large'}}>moses ajayi.</a></h3> 
<div style={{display: 'flex', padding: 5}} className='footer-links'><a href='www.facebook.com/pages/reactjs'><img src={fb} alt='facebook' className='grow links'/></a><a href='www.twitter.com/reactjs'><img src={tw} alt='twitter' className='grow links'/></a></div>
<span style={{fontFamily: 'Centaur', fontSize : 'x-large'}}>
     Ever since i started
	development i had always wanted to create something<br/>
like this and Finally i have. hope you enjoy it.<br/>
</span>  
	</div>
	</div>
  )
} 

export default Footer;