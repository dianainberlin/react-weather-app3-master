import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, SetUnit] = useState("celsius");
  function showFahrenheit(event) {
    event.preventDefault();
    SetUnit("fahrenheit");
  }
  function showCelsius(event) {
    event.preventDefault();
    SetUnit("celsius");
  }

  if (unit === `celsius`) {
    return (
      <div className="WeatherTemperature">
        {props.celcius}
        <span className="unit">
          ° C |
          <a href="/" className="fahrenheit" onClick={showFahrenheit}>
            F
          </a>
        </span>
      </div>
    );
  } else {
    let fahrenheit = (props.celcius * 9) / 5 + 32;
    return (
      <div className="WeatherTemperature">
        {Math.round(fahrenheit)}
        <span className="unit">
          °
          <a href="/" className="celsius" onClick={showCelsius}>
            C
          </a>
          | F
        </span>
      </div>
    );
  }
}
