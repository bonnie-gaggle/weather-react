import 'bootstrap/dist/css/bootstrap.css';
import React, { useState } from "react";
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
      temperature: Math.round(response.data.main.temp),
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      humidity: response.data.main.humidity,
      wind: Math.round(response.data.wind.speed)
    });
  }

  function updateCity(event) {
    setCity(event.target.value);
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
                  autofocus="on"
                  autoComplete="off"
                  onChange={updateCity}
                />
              </div>
              <div className="col-1 search">
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
        <WeatherNow data={weatherData} />
        {/*<Forecast  days={days}/>*/}
      </div>
    );
  } else {
      search();
      return "Loading...";
  }
}
