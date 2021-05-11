import React, { useState } from "react";
import "./Temperature.css";

export default function Temperature(props){
  const [units, setUnits] = useState("fahrenheit");
  function convertToFahrenheit(event){
    event.preventDefault();
    setUnits("fahrenheit");
  }
  function convertToCelsius(event){
    event.preventDefault();
    setUnits("celsius");
  }
  function celsius(){
    return ((props.fahrenheit -32) * 5/9 );
  }
  if (units === "fahrenheit"){
    return(
      <span className="temperature">
        <span className="temperature-today align-middle">{Math.round(props.fahrenheit)}</span>
        <span className="units">
          °F | <a href="/" onClick={convertToCelsius}>°C</a>
        </span>
      </span>
    );
  } else {
    return(
      <span className="temperature">
        <span className="temperature-today align-middle">{Math.round(celsius())}</span>
        <span className="units">
          <a href="/" onClick={convertToFahrenheit}>°F</a> | °C
        </span>
      </span>
    );
  }
}