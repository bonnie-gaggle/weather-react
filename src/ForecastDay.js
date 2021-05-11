import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./Forecast.css";

export default function ForecastDay(props){
 
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
    <div className = "Forecast">
      <ul>
        <li>
          {day()}
        </li>
        <li>
          <WeatherIcon code={props.data.weather[0].icon} size={45} alt="Placeholder"/>
        </li>
        <li>
          <span className="Forecast-temperature-max">{maxTemperature()}</span>
          <span className="Forecast-temperature-min">{minTemperature()}</span>
        </li>
      </ul>
    </div>
  );
}