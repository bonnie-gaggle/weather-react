import 'bootstrap/dist/css/bootstrap.css';
import React, { useState } from "react";
import axios from "axios";

export default function Weather(props) {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    if (city.length > 0) {
      let apiKey = "96705b159023614cfe376449b9563ca3";
      let apiEndpoint = "https://api.openweathermap.org/data/2.5/";
      let units = "metric";
      let apiUrl = `${apiEndpoint}weather?q=${city}&units=${units}&appid=${apiKey}`;
      axios.get(apiUrl).then(showWeather);
    } else {
      alert(`Enter a city name`);
    }
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  function showWeather(response) {
    let temperature = Math.round(response.data.main.temp);
    let description = response.data.weather[0].description;
    let humidity = Math.round(response.data.main.humidity);
    let windSpeed = Math.round(response.data.wind.speed);
    let iconCode = response.data.weather[0].icon;
    let iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
    setWeather(
      <ul>
        <li>Temperature: {temperature}°C</li>
        <li>Description: {description}</li>
        <li>Humidity: {humidity}%</li>
        <li>Wind: {windSpeed} km/h</li>
        <li>
          <img src={iconUrl} alt={description} />
        </li>
      </ul>
    );
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="row align-items-center">
            <div className="col-8">
              <input
                type="text"
                className="form-control"
                placeholder="Search for a city"
                autofocus="on"
                autoComplete="off"
                onChange={updateCity}
              />
            </div>
            <div className="col-1">
              <input
                type="submit"
                className="btn btn-outline-secondary"
                value="🔍"
              />
            </div>
          <div className="col-2">
            <input
              type="button"
              className="btn btn-outline-secondary current-location"
              value="Current location"
            />
          </div>
        </div>
      </form>
      {weather}
    </div>
  );
}
