import React from "react";

export default function ForecastDay(props){
  let imageUrl = `https://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`

  function maxTemperature(){
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }

  function minTemperature(){
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }

  //Change numeric date into shorthand name of weekday
  function day(){
    let date = new Date(props.data.dt * 1000); //1000 because converting from milliseconds to seconds
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div>
      <ul>
        <li>
          {day()}
        </li>
        <li>
          <img src={imageUrl} alt="Placeholder"/>
        </li>
        <li>
          <span className="Forecast-temperature-max">{maxTemperature()}</span>
          <span className="Forecast-temperature-min">{minTemperature()}</span>
        </li>
      </ul>
    </div>
  );
}