import React from 'react';
import Result from './Result'
import NotFound from './NotFound';
import '../../ind.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import loa from "../../images/load.gif"


class Weather extends React.Component {
 
  state = {
    value: '',
    weatherInfo: null,
    error: false,
  };

  handleInputChange = e => {
    this.setState({
      value: e.target.value,
    });
  };

  handleSearchCity = e => {
    e.preventDefault();
    const { value } = this.state;
    const APIkey = '   ';

    const weather = `https://api.openweathermap.org/data/2.5/weather?q=${value}&APPID=${APIkey}&units=metric`;
    const forecast = `https://api.openweathermap.org/data/2.5/forecast?q=${value}&APPID=${APIkey}&units=metric`;

    Promise.all([fetch(weather), fetch(forecast)])
      .then(([res1, res2]) => {
        if (res1.ok && res2.ok) {
          return Promise.all([res1.json(), res2.json()]);
        }
        throw Error(res1.statusText, res2.statusText);
      })
      .then(([data1, data2]) => {
        const months = [
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July',
          'August',
          'September',
          'October',
          'Nocvember',
          'December',
        ];
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const currentDate = new Date();
        const date = `${days[currentDate.getDay()]} ${currentDate.getDate()} ${
          months[currentDate.getMonth()]
        }`;
        const sunset = new Date(data1.sys.sunset * 1000).toLocaleTimeString().slice(0, 5);
        const sunrise = new Date(data1.sys.sunrise * 1000).toLocaleTimeString().slice(0, 5);

        const weatherInfo = {
          
          city: data1.name,
          country: data1.sys.country,
          date,
          description: data1.weather[0].description,
          main: data1.weather[0].main,
          temp: data1.main.temp,
          highestTemp: data1.main.temp_max,
          lowestTemp: data1.main.temp_min,
          sunrise,
          sunset,
          clouds: data1.clouds.all,
          humidity: data1.main.humidity,
          wind: data1.wind.speed,
          forecast: data2.list,
        };
        this.setState({
          weatherInfo,
          error: false,
        });
      })
      .catch(error => {
        console.log(error);

        this.setState({
          error: true,
          weatherInfo: null,
        });
      });
  };

  componentDidMount(){
    
    const APIkey = '4b62f7b71d07377675daf94ade71e35c';
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
  
        let pos = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        }
     
    const weather = `https://api.openweathermap.org/data/2.5/weather?lat=${pos.latitude}&lon=${pos.longitude}&APPID=${APIkey}&units=metric`;
    const forecast = `https://api.openweathermap.org/data/2.5/forecast?lat=${pos.latitude}&lon=${pos.longitude}&APPID=${APIkey}&units=metric`;
    
    Promise.all([fetch(weather), fetch(forecast)])
      .then(([res1, res2]) => {
        if (res1.ok && res2.ok) {
          return Promise.all([res1.json(), res2.json()]);
        }
        throw Error(res1.statusText, res2.statusText);
      })
      .then(([data1, data2]) => {

        const months = [
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July',
          'August',
          'September',
          'October',
          'Nocvember',
          'December',
        ];
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const currentDate = new Date();
        const date = `${days[currentDate.getDay()]} ${currentDate.getDate()} ${
          months[currentDate.getMonth()]
        }`;
        const sunset = new Date(data1.sys.sunset * 1000).toLocaleTimeString().slice(0, 5);
        const sunrise = new Date(data1.sys.sunrise * 1000).toLocaleTimeString().slice(0, 5);

        const weatherInfo = {
          
          city: data1.name,
          country: data1.sys.country,
          date,
          description: data1.weather[0].description,
          main: data1.weather[0].main,
          temp: data1.main.temp,
          highestTemp: data1.main.temp_max,
          lowestTemp: data1.main.temp_min,
          sunrise,
          sunset,
          clouds: data1.clouds.all,
          humidity: data1.main.humidity,
          wind: data1.wind.speed,
          forecast: data2.list,
        };
        this.setState({
          weatherInfo,
          error: false,
        });
      })
      .catch(error => {
        console.log(error);

        this.setState({
          error: true,
          weatherInfo: null,
        });
      });
      })
    }
  }

  render() {
    const { value, weatherInfo, error } = this.state;

    if(weatherInfo != null){
      return(
        <>
        <div className="weat">
         
          <div className="WeatherWrapper">
            <h1 className="AppTitle" >Weather forecast</h1>
            
            <form className="SearchBar" onSubmit={this.handleSearchCity}>
          <input className="SearchInput" type="text" value={value} placeholder="Enter city" onChange={this.handleInputChange} />
          <span className="SearchIcon">
            <FontAwesomeIcon icon={faSearch} size='2x' />
          </span>
        </form>
  
           <Result weather={weatherInfo} />
            
          
          </div>
          </div>
        </>
      )
    }

else{
       
        if(error === true){
          return(
            <>
            <div className="weat">
             
              <div className="WeatherWrapper">
                <h1 className="AppTitle" >Weather forecast</h1>
                
                <form className="SearchBar" onSubmit={this.handleSearchCity}>
              <input className="SearchInput" type="text" value={value} placeholder="Enter city" onChange={this.handleInputChange} />
              <span className="SearchIcon">
                <FontAwesomeIcon icon={faSearch} size='2x' />
              </span>
            </form>
      
                
                <NotFound error={error} />
              
              </div>
              </div>
            </>
          )
        }
     else{
      return (
        <>
        <div className="weat">
        
          <div className="WeatherWrapperload">
            <h1 className="AppTitle" >Weather forecast</h1>
            
            

            <div className="iii">
              <img src={loa} alt='' />
            </div>

          </div>
          </div>
        </>
       );
      }
  }
}
};
 
export default Weather;
