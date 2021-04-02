import React from "react";

export default function Forecast(props){
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