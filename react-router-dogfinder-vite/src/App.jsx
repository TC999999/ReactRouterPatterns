import { BrowserRouter, Link } from "react-router-dom";
import RoutesList from "./RoutesList.jsx";
import Nav from "./Nav.jsx";
import data from "../db.json";
import "./App.css";

const App = ({ dogs }) => {
  return (
    <div className="App">
      <BrowserRouter>
        <h1>
          <Link className="header" to="/">
            Dog Finder!
          </Link>
        </h1>
        <Nav dogs={dogs} />

        <RoutesList dogs={dogs} />
      </BrowserRouter>
    </div>
  );
};

App.defaultProps = data;

export default App;
