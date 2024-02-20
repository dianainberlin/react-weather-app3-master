import React from "react";
import FormattedDate from "./FormattedDate";
import Sunrise from "./Sunrise";
import Sunset from "./Sunset";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import WeatherForecast from "./WeatherForecast";

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
                    <WeatherTemperature celcius={props.data.temperature} />
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
                  <img
                    src="https://help.apple.com/assets/656912ADA28BF1B7E90BF0F6/656912B3021EA3AD750FB887/en_US/78606be71a30b2e518815e252a93cbb1.png"
                    alt="Sunrise"
                    width="20"
                  />
                  {"  "}
                  <Sunrise time={props.data.sunrise} />
                  <li>
                    <img
                      src="https://help.apple.com/assets/656912ADA28BF1B7E90BF0F6/656912B3021EA3AD750FB887/en_US/791abf4ca2e11cf399b0d98c5e28598a.png"
                      alt="Sunset"
                      width="20"
                    />
                    {"  "}
                    <Sunset time={props.data.sunset} />
                  </li>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="row weather-forecast-box rounded-4 p-5 mt-2 mb-2">
        <WeatherForecast />
      </div>
    </div>
  );
}
