import "./Weather.css";

export default function Weather() {
  return (
    <div class="container">
      <form class="d-flex" role="search">
        <input
          class="form-control me-2"
          type="search"
          placeholder="Search city"
          aria-label="Search"
        />
        <button class="btn" type="submit">
          Search
        </button>
      </form>
      <br />
      <div class="row boxes">
        <div class="col-md main-weather-box rounded-4 p-5">
          <div class="row">
            <div class="col">
              <ul>
                <li>
                  <h4>Manila</h4>
                </li>
                <li>
                  <h1>12°</h1>
                </li>
                <li>
                  <p>Partly cloudy</p>
                </li>
              </ul>
            </div>
            <div class="col">
              <img
                src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png"
                width="150"
              />
            </div>
          </div>
        </div>
        <div class="col-md">
          <div class="row boxes-1">
            <div class="col humidity-box rounded-4 p-5">
              <ul>
                <li>Feels 10°C</li>
                <li>H: 93% | W: 3km/h</li>
              </ul>
            </div>
          </div>
          <div class="row">
            <div class="col date-box gy-2 rounded-4 p-5">
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
