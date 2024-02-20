import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <ul>
            <li className="WeatherForecast-day">Day</li>
            <li className="WeatherForecast-icon">
              <WeatherIcon code="01d" size="100px" />
            </li>
            <li className="WeatherForecast-temperatures">
              <span className="WeatherForecast-temperature-max">10°</span>
              <span className="WeatherForecast-temperature-min">7°</span>
            </li>
          </ul>
        </div>
        <div className="col">
          <ul>
            <li className="WeatherForecast-day">Day</li>
            <li className="WeatherForecast-icon">
              <WeatherIcon code="01d" size="100px" />
            </li>
            <li className="WeatherForecast-temperatures">
              <span className="WeatherForecast-temperature-max">10°</span>
              <span className="WeatherForecast-temperature-min">7°</span>
            </li>
          </ul>
        </div>
        <div className="col">
          <ul>
            <li className="WeatherForecast-day">Day</li>
            <li className="WeatherForecast-icon">
              <WeatherIcon code="01d" size="100px" />
            </li>
            <li className="WeatherForecast-temperatures">
              <span className="WeatherForecast-temperature-max">10°</span>
              <span className="WeatherForecast-temperature-min">7°</span>
            </li>
          </ul>
        </div>
        <div className="col">
          <ul>
            <li className="WeatherForecast-day">Day</li>
            <li className="WeatherForecast-icon">
              <WeatherIcon code="01d" size="100px" />
            </li>
            <li className="WeatherForecast-temperatures">
              <span className="WeatherForecast-temperature-max">10°</span>
              <span className="WeatherForecast-temperature-min">7°</span>
            </li>
          </ul>
        </div>
        <div className="col">
          <ul>
            <li className="WeatherForecast-day">Day</li>
            <li className="WeatherForecast-icon">
              <WeatherIcon code="01d" size="100px" />
            </li>
            <li className="WeatherForecast-temperatures">
              <span className="WeatherForecast-temperature-max">10°</span>
              <span className="WeatherForecast-temperature-min">7°</span>
            </li>
          </ul>
        </div>
        <div className="col">
          <ul>
            <li className="WeatherForecast-day">Day</li>
            <li className="WeatherForecast-icon">
              <WeatherIcon code="01d" size="100px" />
            </li>
            <li className="WeatherForecast-temperatures">
              <span className="WeatherForecast-temperature-max">10°</span>
              <span className="WeatherForecast-temperature-min">7°</span>
            </li>
          </ul>
        </div>
        <div className="col">
          <ul>
            <li className="WeatherForecast-day">Day</li>
            <li className="WeatherForecast-icon">
              <WeatherIcon code="01d" size="100px" />
            </li>
            <li className="WeatherForecast-temperatures">
              <span className="WeatherForecast-temperature-max">10°</span>
              <span className="WeatherForecast-temperature-min">7°</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
