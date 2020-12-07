import React from 'react';


const ForecastHour = props => {
  const { temp, month, day, icon } = props;
  const iconUrl = `https://openweathermap.org/img/w/${icon}.png`;
  return (
      
    <div className="ForecastWrapper1">
      
      <span className="Text1">
      {day}/{month}
      </span>
      
      
      <img className="weatico" src={iconUrl} alt='' />
      <h4 className="SmallLabel1">
        {temp}&#176;c
      </h4>
    </div>
  );
};


export default ForecastHour;