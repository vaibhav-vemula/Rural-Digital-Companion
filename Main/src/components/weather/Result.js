import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCloud,
  faBolt,
  faCloudRain,
  faCloudShowersHeavy,
  faSnowflake,
  faSun,
  faSmog,
} from '@fortawesome/free-solid-svg-icons';
import ForecastHour from './ForecastHour';
import ForecastDaily from './ForecastDaily';



const Result = ({ weather }) => {
  const {
    city,
    country,
    date,
    description,
    main,
    temp,
    sunset,
    sunrise,
    humidity,
    wind,
    highestTemp,
    lowestTemp,
    forecast,
    
  } = weather;


  const t=5;
  var newa=[];
  var delta = Math.floor( forecast.length / t );
  var i=0;

  for (i = 1; i < forecast.length; i+=delta) {
    var fi = forecast[0].dt_txt.slice(8,10);
    var sec = forecast[i].dt_txt.slice(8,10);
    if(fi !== sec){
      
      newa.push(forecast[i]);
    }

  }
newa.push(forecast[forecast.length -1]);

  const forecastdaily = newa.map((item,j) => (
    
    <ForecastDaily
      key={item.dt}
      temp={Math.floor(item.main.temp * 1) / 1}
      icon={item.weather[0].icon}
      month={item.dt_txt.slice(5, 7)}
      day={item.dt_txt.slice(8, 10)}
      
    />
  ));

  function converttime(req){
    var timeSplit = req.split(':'),hours,minutes,meridian;
    hours = timeSplit[0];
    minutes = timeSplit[1];
    if (hours > 12) {
      meridian = 'PM';
      hours -= 12;
    } else if (hours < 12) {
      meridian = 'AM';
      if (hours === 0) {
        hours = 12;
      }
    } else {
      meridian = 'PM';
    }
    var time=`${hours}:${minutes} ${meridian}`;
    
    return time;
  }

  const forecasts = forecast.map(item => (
    <ForecastHour
      key={item.dt}
      temp={Math.floor(item.main.temp * 1) / 1}
      icon={item.weather[0].icon}
      month={item.dt_txt.slice(5, 7)}
      day={item.dt_txt.slice(8, 10)}
      hour={converttime(item.dt_txt.slice(11, 16))}
    />
  ));

  

  let weatherIcon = null;

  if (main === 'Thunderstorm') {
    weatherIcon = <FontAwesomeIcon icon={faBolt} size='2x' />;
  } else if (main === 'Drizzle') {
    weatherIcon = <FontAwesomeIcon icon={faCloudRain} size='2x' style={{ textShadow: '2px 2px 2px rgba(0, 0, 0, 0.1)' }}/>;
  } else if (main === 'Rain') {
    weatherIcon = <FontAwesomeIcon icon={faCloudShowersHeavy} size='2x' style={{ textShadow: '2px 2px 2px rgba(0, 0, 0, 0.1)' }}/>;
  } else if (main === 'Snow') {
    weatherIcon = <FontAwesomeIcon icon={faSnowflake} size='2x' style={{ textShadow: '2px 2px 2px rgba(0, 0, 0, 0.1)' }}/>;
  } else if (main === 'Clear') {
    weatherIcon = <FontAwesomeIcon icon={faSun} size='2x' style={{ textShadow: '2px 2px 2px rgba(0, 0, 0, 0.1)' }}/>;
  } else if (main === 'Clouds') {
    weatherIcon = <FontAwesomeIcon icon={faCloud} size='2x' style={{ 'textShadow': '2px 2px 2px rgba(0, 0, 0)' }}/>;
  } else {
    weatherIcon = <FontAwesomeIcon icon={faSmog} size='2x' style={{ textShadow: '2px 2px 2px rgba(0, 0, 0, 0.1)' }} />;
  }

  return (
    <div className="Results">
     
     <div className="rrr">
     <div className="di">
      <div style={{"flexBasis": "100%"}}>
        <h2 className="BigLabel">
          {city}, {country}
        </h2>
        <h4 className="SmallLabel">{date}</h4>
      </div>

      <div className="CurrentWeatherWrapper">
        <div className="WeatherIcon">{weatherIcon}</div>
        <div className="tm">
          <h3 className="Temperature">{Math.floor(temp)}&#176;c</h3>
          <h4 className="SmallLabel2">
            {description}
          </h4>
        </div>
      </div>
      </div>

      <div className="WeatherDetailsWrapper">
        
        <div className="WeatherDetail">
          <h4 className="SmallLabel1">
            {Math.floor(highestTemp)}&#176;c
          </h4>
          <span className="Text1">Highest</span>
        </div>

        <div className="WeatherDetail">
        <h4 className="SmallLabel1">
            {converttime(sunrise)}
          </h4>
          <span className="Text1">Sunrise</span>
        </div>

        <div className="WeatherDetail">
        <h4 className="SmallLabel1">
            {(wind*3.6).toFixed(2)} km/hr
          </h4>
          <span className="Text1">Wind</span>
        </div>

        

        <div className="WeatherDetail">
          <h4 className="SmallLabel1">
            {Math.floor(lowestTemp)}&#176;c
          </h4>
          <span className="Text1">Lowest</span>
        </div>

        <div className="WeatherDetail">
          <h4 className="SmallLabel1">
            {converttime(sunset)}
          </h4>
          <span className="Text1">Sunset</span>
        </div>

        <div className="WeatherDetail">
          <h4 className="SmallLabel1">
            {humidity}%
          </h4>
          <span className="Text1">Humidity</span>
        </div>

       

      </div>
      </div>


      <div className="ForecastWrappe2">
        <h3 className="MediumLabel" >Daily Forecast</h3>
        <div className="Forecast">{forecastdaily}</div>
      </div>

      <div className="ForecastWrappe">
        <h3 className="MediumLabel" >3 Hour Forecast</h3>
        <div className="Forecast2">{forecasts}</div>
      </div>

    </div>
  );
};


export default Result;
