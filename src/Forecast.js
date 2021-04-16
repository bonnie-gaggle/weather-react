import React from "react";
import axios from "axios";

export default function Forecast(props){
  function handleResponse(response){
    console.log(response.data);
  }

  const apiKey = "96705b159023614cfe376449b9563ca3";
  let latitude = props.coordinates.lat;
  let longitude = props.coordinates.lon;
  let units = metric;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`

  axios.get(apiUrl).then(handleResponse);

  return(
    <div className="row">
      {props.days.map(function (day, index){
        return(
          <div className="col">
            <ul>
              <li>
                {day.day}
              </li>
              <li>
                <img src="https://openweathermap.org/img/wn/02n@2x.png" alt="Placeholder"/>
              </li>
              <li>
                <strong>{day.maxTemp}°</strong> {day.minTemp}°
              </li>
            </ul>
          </div>
        )
      })}
    </div>
  );
}