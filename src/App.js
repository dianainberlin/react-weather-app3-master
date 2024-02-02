import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg bg-body-tertiary mb-3">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            Diana's Weather App
          </a>
        </div>
      </nav>
      <Weather defaultCity="Berlin" />
      <footer>
        Coded by
        <a
          href="https://diana-decastro.netlify.app/"
          target="_blank"
          title="Diana Portfolio"
          rel="noreferrer"
        >
          Diana
        </a>{" "}
        and opensourced in{" "}
        <a
          href="https://github.com/dianainberlin/react-weather-app3"
          target="_blank"
          title="Diana github"
          rel="noreferrer"
        >
          <i className="fa-brands fa-github"></i>
        </a>
      </footer>
    </div>
  );
}
