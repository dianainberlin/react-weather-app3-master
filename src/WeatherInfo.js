import React from "react";
import FormattedDate from "./FormattedDate";
import Sunrise from "./Sunrise";
import Sunset from "./Sunset";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
  console.log(props.data.iconUrl);
  return (
    <div className="WeatherInfo">
      <div className="row boxes">
        <div className="col-md main-weather-box rounded-4 p-5">
          <div className="row">
            <div className="col">
              <ul>
                <li>
                  <h4>{props.data.city}</h4>
                </li>
                <li>
                  <h1>
                    {props.data.temperature}
                    <span className="unit">°C</span>
                  </h1>
                </li>
                <li>
                  <p className="text-capitalize">{props.data.description}</p>
                </li>
              </ul>
            </div>
            <div className="col">
              <WeatherIcon code={props.data.icon} width="150" />
            </div>
          </div>
        </div>
        <div className="col-md">
          <div className="row boxes-1">
            <div className="col humidity-box rounded-4 p-5">
              <ul>
                <li>Feels like {props.data.feels}°C</li>
                <li>
                  H: {props.data.humidity}% | W: {props.data.wind}km/h
                </li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col date-box gy-2 rounded-4 p-5">
              <ul>
                <li>
                  <FormattedDate date={props.data.date} />
                </li>
                <li>
                  Sunrise: <Sunrise time={props.data.sunrise} />
                </li>
                <li>
                  Sunset: <Sunset time={props.data.sunset} />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
