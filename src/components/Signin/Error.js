import React from 'react';
import '../../anime.css';

const SigninError = ({onError, isSignedIn}) => {
		if (onError){      
			return (
			    <div>
			        <p className='animated slideInLeft' style={{backgroundColor: 'firebrick', color: 'gold', textAlign : 'center', padding: 10}}>Sorry Wrong Credentials</p>
			    </div>
			   	) 
		}	return (
			<p className='' style={{backgroundColor: 'green', color: 'white', textAlign : 'center', padding: 10, display: 'none'}}>Success !!!</p> 
	      )
	  } 
export default SigninError