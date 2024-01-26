import Weather from "./Weather";
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
      <Weather />
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
  );
}
