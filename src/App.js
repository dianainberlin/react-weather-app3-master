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
