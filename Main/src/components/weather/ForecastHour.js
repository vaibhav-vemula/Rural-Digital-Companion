import React from 'react';


const ForecastDaily = props => {
  const { temp, month, day, hour, icon } = props;
  const iconUrl = `https://openweathermap.org/img/w/${icon}.png`;

  return (
    <div className="ForecastWrapper">
      <span className="Text">
      {day}/{month}
      </span>
      
      <span className="Text">{hour}</span>
      <img className="weatico" src={iconUrl} alt='' />
      <h4 className="SmallLabel1">
        {temp}&#176;c
      </h4>
    </div>
  );
};


export default ForecastDaily;
