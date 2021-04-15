import React, { useState } from "react";

export default function Temperature(props){
  const [units, setUnits] = useState("celsius");
  function convertToFahrenheit(event){
    event.preventDefault();
    setUnits("fahrenheit");
  }
  function convertToCelsius(event){
    event.preventDefault();
    setUnits("celsius");
  }
  function fahrenheit(){
    return (props.celsius * 9/5 + 32);
  }
  if (units === "celsius"){
    return(
      <div className="temperature">
        <span className="temperature-today">{Math.round(fahrenheit())}</span>
        <span className="units">
          °C | <a href="/" onClick={convertToFahrenheit}>°F</a>
        </span>
      </div>
    );
  } else {
    return(
      <div className="temperature">
        <span className="temperature-today">{Math.round(props.celsius)}</span>
        <span className="units">
          <a href="/" onClick={convertToCelsius}>°C</a> | °F
        </span>
      </div>
    );
  }
}