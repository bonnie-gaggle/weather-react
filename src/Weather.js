import 'bootstrap/dist/css/bootstrap.css';
import React, { useState } from "react";
import Forecast from "./Forecast";
import "./Weather.css";
import WeatherNow from "./WeatherNow";
import axios from "axios";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ready:false});
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response){
    setWeatherData({
      ready: true,
      city: response.data.name,
      date: new Date(response.data.dt*1000),
      condition: response.data.weather[0].description,
      temperature: response.data.main.temp,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      humidity: response.data.main.humidity,
      wind: Math.round(response.data.wind.speed),
      coordinates: response.data.coord
    });
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  function askLocation(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(cityLocation)
  }

  function cityLocation(position){
    let lat = position.coords.latitude;
    let long=position.coords.longitude;
    const apiKey = "96705b159023614cfe376449b9563ca3";
    const apiEndpoint = "https://api.openweathermap.org/data/2.5/";
    let units = "metric";
    let apiUrl = `${apiEndpoint}weather?lat=${lat}&lon=${long}&units=${units}&appid=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function search(){
      const apiKey = "96705b159023614cfe376449b9563ca3";
      let apiEndpoint = "https://api.openweathermap.org/data/2.5/";
      let units = "metric";
      let apiUrl = `${apiEndpoint}weather?q=${city}&units=${units}&appid=${apiKey}`;
      axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

    
  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="row align-items-center">
              <div className="col-8">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search for a city"
                  autoFocus="on"
                  autoComplete="off"
                  onChange={updateCity}
                />
              </div>
              <div className="col-1 search">
                <input
                  type="submit"
                  className="btn btn-outline-secondary w-100"
                  value="🔍"
                />
              </div>
            <div className="col-2">
              <input
                type="button"
                className="btn btn-outline-secondary current-location"
                value="Current location"
                onClick={askLocation}
              />
            </div>
          </div>
        </form>
        <WeatherNow data={weatherData} />
        <Forecast coordinates={weatherData.coordinates}/>
      </div>
    );
  } else {
      search();
      return "Loading...";
  }
}
