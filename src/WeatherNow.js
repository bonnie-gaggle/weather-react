import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherNow(props) {
  return (
    <div className="WeatherNow">
      <div className="row align-items-center">
          <div className="col-8">
            <h1>{props.data.city}</h1>
            <ul>
              <li>
                <FormattedDate date={props.data.date} />
              </li>
              <li>{props.data.condition}</li>
            </ul>
            <br />
            <img src={props.data.icon} alt={props.data.condition} />
            <span className="temperature-today">{props.data.temperature}</span>
            <span className="units">
                °C | °F
            </span>
          </div>
          <div className="col-4">
            <ul>
              <li>
                <span role="img">💧</span> <span></span>
                {props.data.humidity}%
              </li>
              <li>
                <span role="img">🌬️</span> <span></span> {props.data.wind} km/h
              </li>
            </ul>
          </div>
        </div>
    </div>
  )
}