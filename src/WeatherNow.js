import React from "react";
import FormattedDate from "./FormattedDate";
import Temperature from "./Temperature";
import WeatherIcon from "./WeatherIcon";

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
            <div className="clearfix">
              <div className="float-left">
                <WeatherIcon code={props.data.icon} alt={props.data.description}/>
              </div> 
              <Temperature celsius={props.data.temperature} />
            </div>
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