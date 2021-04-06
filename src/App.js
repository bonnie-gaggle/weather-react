import 'bootstrap/dist/css/bootstrap.css';
import "./App.css";
import React from "react";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <h3>Real-Time Weather</h3>
      <Weather />
      <footer>
        <a href="https://github.com/hanksbonniec/weather-react" target="blank">
          Open-source code
        </a> by Bonnie Hanks
          
      </footer>
    </div>
  );
}
