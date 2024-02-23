import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function day() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Thu", "Fri", "Sat", "Sun"];

    return days[day];
  }

  return (
    <ul>
      <li className="WeatherForecast-day">{day()}</li>
      <li className="WeatherForecast-icon">
        <WeatherIcon code={props.data.condition.icon} size="100px" />
      </li>
      <li className="WeatherForecast-temperatures">
        <span className="WeatherForecast-temperature-max">
          {Math.round(props.data.temperature.maximum)}°
        </span>
        <span className="WeatherForecast-temperature-min">
          {Math.round(props.data.temperature.minimum)}°
        </span>
      </li>
    </ul>
  );
}
