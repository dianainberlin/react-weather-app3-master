import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <ul>
            <li className="WeatherForecast-day">Day</li>
            <li className="WeatherForecast-icon">
              <WeatherIcon code="01d" width="40" />
            </li>
            <li className="WeatherForecast-temperatures">
              <span className="WeatherForeCast-temperature-min">7°</span>
              <span className="WeatherForecast-temperature-max">10°</span>
            </li>
          </ul>
        </div>
        <div className="col">
          <ul>
            <li className="WeatherForecast-day">Day</li>
            <li className="WeatherForecast-icon">
              <WeatherIcon code="01d" width="40" />
            </li>
            <li className="WeatherForecast-temperatures">
              <span className="WeatherForeCast-temperature-min">7°</span>
              <span className="WeatherForecast-temperature-max">10°</span>
            </li>
          </ul>
        </div>
        <div className="col">
          <ul>
            <li className="WeatherForecast-day">Day</li>
            <li className="WeatherForecast-icon">
              <WeatherIcon code="01d" width="40" />
            </li>
            <li className="WeatherForecast-temperatures">
              <span className="WeatherForeCast-temperature-min">7°</span>
              <span className="WeatherForecast-temperature-max">10°</span>
            </li>
          </ul>
        </div>
        <div className="col">
          <ul>
            <li className="WeatherForecast-day">Day</li>
            <li className="WeatherForecast-icon">
              <WeatherIcon code="01d" width="40" />
            </li>
            <li className="WeatherForecast-temperatures">
              <span className="WeatherForeCast-temperature-min">7°</span>
              <span className="WeatherForecast-temperature-max">10°</span>
            </li>
          </ul>
        </div>
        <div className="col">
          <ul>
            <li className="WeatherForecast-day">Day</li>
            <li className="WeatherForecast-icon">
              <WeatherIcon code="01d" width="40" />
            </li>
            <li className="WeatherForecast-temperatures">
              <span className="WeatherForeCast-temperature-min">7°</span>
              <span className="WeatherForecast-temperature-max">10°</span>
            </li>
          </ul>
        </div>
        <div className="col">
          <ul>
            <li className="WeatherForecast-day">Day</li>
            <li className="WeatherForecast-icon">
              <WeatherIcon code="01d" width="40" />
            </li>
            <li className="WeatherForecast-temperatures">
              <span className="WeatherForeCast-temperature-min">7°</span>
              <span className="WeatherForecast-temperature-max">10°</span>
            </li>
          </ul>
        </div>
        <div className="col">
          <ul>
            <li className="WeatherForecast-day">Day</li>
            <li className="WeatherForecast-icon">
              <WeatherIcon code="01d" width="40" />
            </li>
            <li className="WeatherForecast-temperatures">
              <span className="WeatherForeCast-temperature-min">7°</span>
              <span className="WeatherForecast-temperature-max">10°</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
