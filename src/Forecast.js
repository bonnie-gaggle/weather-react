import React, { useState, useEffect } from "react";
import axios from "axios";
import ForecastDay from "./ForecastDay";
import "./Forecast.css";

export default function Forecast(props){
  let [ready, setReady] = useState(false);
  let [forecast, setForecast] = useState(null);

  //When coordinates are changed, call API again
  useEffect(() => {
    setReady(false);
  }, [props.coordinates]);
  
  function handleResponse(response){
    setForecast(response.data.daily);
    setReady(true);
  }

  if (ready) {
    return(
      <div className="Forecast">
        <div className="row">
          {forecast.map(function(dailyForecast, index){
            if (index < 5){ //Want a 5-day forecast
              return(
                <div className="col" key={index}>
                  <div className="Forecast-day">
                    <ForecastDay data={dailyForecast} />
                  </div>
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
      const apiKey = "96705b159023614cfe376449b9563ca3";
      let latitude = props.coordinates.lat;
      let longitude = props.coordinates.lon;
      let units = "imperial"; //can set to metric if desired
      let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`
      
      axios.get(apiUrl).then(handleResponse);
      return null;
  }

}