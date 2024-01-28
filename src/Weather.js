import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      city: response.data.name,
      temperature: Math.round(response.data.main.temp),
      description: response.data.weather[0].description,
      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/cloudy.png",
      feels: Math.round(response.data.main.feels_like),
      wind: Math.round(response.data.wind.speed),
      humidity: Math.round(response.data.main.humidity),
      time: "10:34",
      date: "28 January",
      day: "Sunday",
    });
  }

  if (weatherData.ready) {
    return (
      <div className="container">
        <form className="d-flex" role="search">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search city"
            aria-label="Search"
            autoFocus="on"
          />
          <button className="btn" type="submit">
            Search
          </button>
        </form>
        <br />
        <div className="row boxes">
          <div className="col-md main-weather-box rounded-4 p-5">
            <div className="row">
              <div className="col">
                <ul>
                  <li>
                    <h4>{weatherData.city}</h4>
                  </li>
                  <li>
                    <h1>
                      {weatherData.temperature}
                      <span className="unit">°C</span>
                    </h1>
                  </li>
                  <li>
                    <p className="text-capitalize">{weatherData.description}</p>
                  </li>
                </ul>
              </div>
              <div className="col">
                <img
                  src={weatherData.iconUrl}
                  alt={weatherData.description}
                  width="150"
                />
              </div>
            </div>
          </div>
          <div className="col-md">
            <div className="row boxes-1">
              <div className="col humidity-box rounded-4 p-5">
                <ul>
                  <li>Feels like {weatherData.feels}°C</li>
                  <li>
                    H: {weatherData.humidity}% | W: {weatherData.wind}km/h
                  </li>
                </ul>
              </div>
            </div>
            <div className="row">
              <div className="col date-box gy-2 rounded-4 p-5">
                <ul>
                  <li>{weatherData.time}pm</li>
                  <li>
                    {weatherData.date}, {weatherData.day}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "5201594abea9f3e38b70e65b11a80c24";
    let city = props.defaultCity;
    let unit = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
