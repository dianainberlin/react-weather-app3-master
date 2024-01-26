import "./Weather.css";
import axios from "axios";

export default function Weather() {
  const apiKey = "b1a8336ff1e05b64da5625e4158fbea3";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
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
                  <h4>Berlin</h4>
                </li>
                <li>
                  <h1>
                    12<span className="unit">°C</span>
                  </h1>
                </li>
                <li>
                  <p>Partly cloudy</p>
                </li>
              </ul>
            </div>
            <div className="col">
              <img
                src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png"
                alt="cloud"
                width="150"
              />
            </div>
          </div>
        </div>
        <div className="col-md">
          <div className="row boxes-1">
            <div className="col humidity-box rounded-4 p-5">
              <ul>
                <li>Feels 10°C</li>
                <li>H: 93% | W: 3km/h</li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col date-box gy-2 rounded-4 p-5">
              <ul>
                <li>7:00pm</li>
                <li>28 October, Saturday</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
