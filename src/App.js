import React, { Component } from 'react';
import Footer from './components/Footer/Footer';
import Logo from './components/Logo/Logo';
import Register from './components/Register/Register';
import Signin from './components/Signin/Signin';
import Weather from './components/weatherinfo/weatherinfo';
import Weathersearch from './components/weatherSearch/weatherSearch';
import arrowDown from './down-arrow.png';
import Sidebar from 'react-sidebar';
import FairApiKey from './API_KEY';
import SignInSuccess from './components/Signin/SignInSuccess';
import './App.css';

const mainState = {
     input: '',
      weatherinfo: {
      CurrentWeather: '', 
      timeZone: '',
      lat: 0,
      lon: 0,
      Clouds: 0,
      Windspeed: 0,
      Temperature: 0,
      Humidity: 0
  },
  route: 'signin',
  isSignedIn: false,
      user: {
    id: '',
    name: '',
    email: '',
    entries: 0,
    joined: ''
  },
    lat: 0,
    lon: 0,
    err: 'err',
    errmessage: '',
    sidebarOpen: false,
    success: false,
    Maintemp: 0
}

class App extends Component { 
  constructor() {
    super()
    this.state =  mainState;
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this); 
}

   loadUser = (data) => {
    this.setState({user: {
      id: data.id,
      name: data.name,
      email: data.email,
      entries: data.entries,
      joined: data.joined
    }})
    this.setState({success: true})
  }

// for a more priileged user experience
  // loadWeather = (data) => {
  //   this.setState({weatherinfo: {
  //       CurrentWeather: data.CurrentWeather, 
  //       Forecast: data.Forecast,
  //       lat: data.lat,
  //       lon: data.long,
  //       Clouds: data.Clouds,
  //       Windspeed: data.Windspeed,
  //       Temperature: data.Temperature,
  //       Humidity: data.Humidity
            
  //    }})
  // }

 mediaQueryChanged(){
    this.setState({sidebarOpen: false });
  }

  onSetSidebarOpen(){
    if(this.state.sidebarOpen === false){
      this.setState({ sidebarOpen: true })
    }else {
      this.setState({ sidebarOpen: false})
    }
}

onCelsiusChange = (event) => {
  let celsius = -100;
  if (this.state.weatherinfo.Temperature >= 0){   
   this.setState(Object.assign(this.state.weatherinfo,{Temperature: +celsius}))
  }
}

onKelvinChange = (event) => { 
    this.setState(Object.assign(this.state.weatherinfo,{Temperature: this.state.Maintemp}))
  }


onlatInputChange = (event) => {
    this.setState({lat: event.target.value});
}

onlonInputChange = (event) => {
  this.setState({lon: event.target.value})
}

  onButtonSubmit = (err) => {
    // this.setState({lat: this.state.lat});
    // this.setstate({lon: this.state.lon});
    const weatherURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${this.state.lat}&lon=${this.state.lon}&exclude=hourly,daily&appid=${FairApiKey}`
    fetch(weatherURL)
   .then(res => res.json())
   .then(data => {
   if (data){  
    // this.props.loadWeather(this.state.weatherinfo);
    this.setState(Object.assign(this.state.weatherinfo, { 
        timeZone: data.timezone,
        CurrentWeather: data.current.weather[0].description,
        lat: data.lat,
        lon: data.lon,
        Clouds: data.current.clouds,
        Windspeed: data.current.wind_speed,
        Temperature: data.current.temp,
        Humidity: data.current.humidity,
      })) 
   console.log(data);
   this.setState({Maintemp: data.current.temp})
   } 
})
 // this is for the 5day 3 hour forecast in my future project  
  // const ForecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${this.state.lat}&lon=${this.state.lon}&appid=${FairApiKey}`;
  // fetch(ForecastUrl)
  // .then(res => res.json())
  // .then(data => {
  // 	console.log(data)
  // })
}

  onRouteChange = (route) => {
    if (route === 'signout') {
      this.setState(mainState)
    } else if (route === 'home') {
      this.setState({isSignedIn: true})
    }  
    this.setState({route: route});
  }
      
  render() {  
  const { route, isSignedIn, success } = this.state;
    const {timeZone, CurrentWeather, Forecast, Clouds, lat, lon, Windspeed, Temperature, Humidity} = this.state.weatherinfo;  
   return (
      <div className='App'>          
    <Sidebar
          sidebar={
            <ul  style={{listStyle: 'none'}} className='side' onClick={this.onSetSidebarOpen}>
              <li onClick={() => this.onRouteChange('signin')} className='side-content'>Sign In</li> 
              <li onClick={() => this.onRouteChange('register')} className='side-content'>Register</li>
              <p className='f3 link dim black underline pa3 pointer'><a href='http://localhost:3200/credits'>Credits</a></p>
            </ul>
        }                    
          open={this.state.sidebarOpen}
          docked={this.state.sidebarDocked}
          onSetOpen={this.onSetSidebarOpen}
          styles={{ sidebar: { background: "grey" } }}>   
    { route === 'home'  
       ?<Sidebar style={{zIndex: 1}}
          sidebar={
            <ul  style={{listStyle: 'none'}} className='side'>
              <h2 style={{display: 'block', fontFamily : 'ubuntu mono'}}>More  <img src={arrowDown} alt='more'/></h2>
              <li onClick={() => this.onRouteChange('signout')} className='side-content'>Sign Out</li> 
                            <li className='f3 link dim black underline pa3 pointer'><a href='http://localhost:3200/credits'>Credits</a></li>
            </ul>
          }
          open={this.state.sidebarOpen}
          docked={this.state.sidebarDocked}
          onSetOpen={this.onSetSidebarOpen}
          styles={{ sidebar: { background: "grey" } }}
        >
          <b>
                 <Logo onSetSidebarOpen={this.onSetSidebarOpen} name={this.state.user.name}/> 
                  <Weathersearch 
                  onButtonSubmit={this.onButtonSubmit} 
                  onCelsiusChange={this.onCelsiusChange}
                  onKelvinChange={this.onKelvinChange} 
                  onLatinput={this.onlatInputChange}
                  onLonInput={this.onlonInputChange}/>
                <SignInSuccess success={success}/>
                <Weather 
                  timeZone={timeZone}
                  CurrentWeather={CurrentWeather}
                  Forecast={Forecast}
                  Clouds={Clouds}
                  lat={lat}
                  lon={lon}
                  Windspeed={Windspeed}
                  Temperature={Temperature}
                  Humidity={Humidity}
            />
          </b>
          <Footer/>     
    </Sidebar>  
     : (
     route === 'signin'
          ?<Signin 
          loadUser={this.loadUser} 
          setOpen={this.onSetSidebarOpen} 
          onRouteChange={this.onRouteChange} 
          isSignedIn={isSignedIn}
          success={success}/>
          :<Register loadUser={this.loadUser} setOpen={this.onSetSidebarOpen} onRouteChange={this.onRouteChange}/>
     )
} 
    </Sidebar>
</div>
       )
    }
 } 
export default App;
