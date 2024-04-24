import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import RoutesList from "./RoutesList.jsx";

import "./App.css";

const App = () => {
  const initialState = () => {
    if (localStorage.getItem("colors")) {
      return JSON.parse(localStorage.getItem("colors"));
    } else {
      return [
        { name: "red", background: "#ff0000" },
        { name: "green", background: "#00ff00" },
        { name: "blue", background: "#0000ff" },
      ];
    }
  };
  const [colors, setColors] = useState(initialState);

  const addColor = (newColor) => {
    const newColors = [...colors, { ...newColor }];
    setColors(newColors);
    localStorage.setItem("colors", JSON.stringify(newColors));
  };

  return (
    <div className="App">
      <BrowserRouter>
        <RoutesList colors={colors} addColor={addColor} />
      </BrowserRouter>
    </div>
  );
};

export default App;
