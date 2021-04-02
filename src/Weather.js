import 'bootstrap/dist/css/bootstrap.css';
import React from "react";
import "./Weather.css";
import WeatherSearch from "./WeatherSearch";

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
            <a href="/" className="active">
              °C
            </a>{" "}
            | <a href="/">°F</a>
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

      <div className="row align-items-center"></div>
    </div>
  );
}
