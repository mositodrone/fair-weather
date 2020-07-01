import React from 'react';
import '../../anime.css'

const SignInSuccess = ({success}) => {
    if(success){
    return (	
    	<p className='animated delay-3s slideOutLeft' style={{backgroundColor: 'green', color: 'white', textAlign : 'center', padding: 10}}>Success !!!</p>
        )
    } return (
         <p className='' style={{backgroundColor: 'green', color: 'white', textAlign : 'center', padding: 10, display: 'none'}}>Success !!!</p>   
       )
  }

export default SignInSuccess