import "./App.css";

export default function App() {
  return (
    <div className="App">
      <nav class="navbar navbar-expand-lg bg-body-tertiary mb-3">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">
            Diana's Weather App
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon pt-1">
              <i class="fa-solid fa-magnifying-glass"></i>
            </span>
          </button>
          <div
            class="collapse navbar-collapse justify-content-end"
            id="navbarTogglerDemo02"
          >
            <form class="d-flex" role="search">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search city"
                aria-label="Search"
              />
              <button class="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
      <div class="container">
        <div class="row boxes">
          <div class="col-md main-weather-box rounded-4 p-5">
            <ul>
              <li>
                <h4>Berlin</h4>
              </li>
              <li>
                <h1>12°</h1>
              </li>
              <li>
                <p>Partly cloudy</p>
              </li>
            </ul>
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
        <br />
        <footer>
          Code by{" "}
          <a
            href="https://diana-decastro.netlify.app/"
            target="_blank"
            title="Diana Portfolio"
            rel="noreferrer"
          >
            Diana
          </a>{" "}
          and open-sourced in{" "}
          <a
            href="https://github.com/dianainberlin"
            target="_blank"
            title="Diana github"
            rel="noreferrer"
          >
            Github
          </a>
          .
        </footer>
      </div>
    </div>
  );
}
