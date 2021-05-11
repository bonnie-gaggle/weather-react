import React from "react";
import FormattedDate from "./FormattedDate";
import Temperature from "./Temperature";
import WeatherIcon from "./WeatherIcon";

export default function WeatherNow(props) {
  return (
    <div className="WeatherNow">
      <h1>{props.data.city}</h1>
      <div className="row align-items-center">
          <div className="col-4">
            <ul>
              <li>
                <FormattedDate date={props.data.date} />
              </li>
              <li>{props.data.condition}</li>
            </ul>
          </div>
          <div className="col-4 clearfix">
              <div className="float-left">
                <WeatherIcon code={props.data.icon} alt={props.data.description}/>
              </div> 
              <Temperature celsius={props.data.temperature} />
            </div>
          <div className="col-4">
            <ul>
              <li>
                <i class="fas fa-tint"></i> <span></span>
                {props.data.humidity}%
              </li>
              <li>
                <i class="fas fa-wind"></i> <span></span> {props.data.wind} km/h
              </li>
            </ul>
          </div>
        </div>
    </div>
  )
}