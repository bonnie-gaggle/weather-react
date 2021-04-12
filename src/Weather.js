import 'bootstrap/dist/css/bootstrap.css';
import React, { useState } from "react";
import "./Weather.css";
import WeatherSearch from "./WeatherSearch";
import Forecast from "./Forecast";
import axios from "axios";

export default function Weather() {
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({});

  function handleResponse(response){

    {/*setIcon(`http://openweathermap.org/img/wn/${response.data.weather.icon}@2x.png`);*/}

    setReady(true);
    setWeatherData({
      temperature: Math.round(response.data.main.temp),
      city: response.data.name,
      condition: response.data.weather[0].description,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      humidity: response.data.main.humidity,
      wind: Math.round(response.data.wind.speed)
    })
  }

  if (ready) {
    return (
      <div className="Weather">
        <WeatherSearch />
        <div className="row align-items-center">
          <div className="col-8">
            <h1>{weatherData.city}</h1>
            <ul>
              <li>
                Day, Time
              </li>
              <li>{weatherData.condition}</li>
            </ul>
            <br />
            <img src={weatherData.icon} alt={weatherData.condition} />
            <span className="temperature-today">{weatherData.temperature}</span>
            <span className="units">
                °C | °F
            </span>
          </div>
          <div className="col-4">
            <ul>
              <li>
                <span role="img">💧</span> <span></span>
                {weatherData.humidity}%
              </li>
              <li>
                <span role="img">🌬️</span> <span></span> {weatherData.wind} km/h
              </li>
            </ul>
          </div>
        </div>
        {/*<Forecast  days={days}/>*/}
      </div>
    );
  } else {
    const apiKey = "96705b159023614cfe376449b9563ca3";
      let apiEndpoint = "https://api.openweathermap.org/data/2.5/";
      let units = "metric";
      let city = "Los Angeles";
      let apiUrl = `${apiEndpoint}weather?q=${city}&units=${units}&appid=${apiKey}`;
      axios.get(apiUrl).then(handleResponse);

      return "Loading...";
  }
  
  let days = [
    {day: "Mon", maxTemp: 52, minTemp: 42},
    {day: "Tue", maxTemp: 29, minTemp: 28},
    {day: "Wed", maxTemp: 37, minTemp: 24},
    {day: "Thu", maxTemp: 41, minTemp: 32},
    {day: "Fri", maxTemp: 13, minTemp: 1}
  ]
}
