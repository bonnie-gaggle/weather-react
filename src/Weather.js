import 'bootstrap/dist/css/bootstrap.css';
import React from "react";
import "./Weather.css";
import WeatherSearch from "./WeatherSearch";
import Forecast from "./Forecast";

export default function Weather() {
  let data = {
    city: "Los Angeles",
    day: "Sunday",
    time: "13:24",
    condition: "partly cloudy",
    imageUrl: "https://openweathermap.org/img/wn/02d@2x.png",
    humidity: 14,
    wind: 5
  };
  let days = [
    {day: "Mon", maxTemp: 52, minTemp: 42},
    {day: "Tue", maxTemp: 29, minTemp: 28},
    {day: "Wed", maxTemp: 37, minTemp: 24},
    {day: "Thu", maxTemp: 41, minTemp: 32},
    {day: "Fri", maxTemp: 13, minTemp: 1}
  ]
  return (
    <div className="Weather">
      <WeatherSearch />
      <div className="row align-items-center">
        <div className="col-8">
          <h1>{data.city}</h1>
          <ul>
            <li>
              {data.day}, {data.time}
            </li>
            <li>{data.condition}</li>
          </ul>
          <br />
          <img src={data.imageUrl} alt={data.description} />
          <span className="temperature-today">19</span>
          <span className="units">
              °C | °F
          </span>
        </div>
        <div className="col-4">
          <ul>
            <li>
              <span role="img">💧</span> <span></span>
              {data.humidity}%
            </li>
            <li>
              <span role="img">🌬️</span> <span></span> {data.wind} km/h
            </li>
          </ul>
        </div>
      </div>
      <Forecast  days={days}/>
    </div>
  );
}
