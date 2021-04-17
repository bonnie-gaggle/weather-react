import React, { useState } from "react";
import axios from "axios";
import "./Forecast.css";

export default function Forecast(props){
  let [ready, setReady] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleResponse(response){
    setForecast(response.data.daily);
    setReady(true);
  }

  if (ready) {
    let imageUrl = `https://openweathermap.org/img/wn/${forecast[0].weather[0].icon}@2x.png`
    return(
      <div className="Forecast">
        <div className="row">
              <div className="col">
                <ul>
                  <li>
                    {forecast[0].dt}
                  </li>
                  <li>
                    <img src={imageUrl} alt="Placeholder"/>
                  </li>
                  <li>
                    <span className="Forecast-temperature-max">{Math.round(forecast[0].temp.max)}°</span>
                    <span className="Forecast-temperature-min">{Math.round(forecast[0].temp.min)}°</span>
                  </li>
                </ul>
              </div>
        </div>
      </div>
    );
  } else {
      const apiKey = "96705b159023614cfe376449b9563ca3";
      let latitude = props.coordinates.lat;
      let longitude = props.coordinates.lon;
      let units = "metric";
      let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`
      
      axios.get(apiUrl).then(handleResponse);
      return null;
  }

}