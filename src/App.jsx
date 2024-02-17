import React from "react";
import Detail from "./components/Detail";
import "./App.css";

const App = () => {
  return (
    <div className="recipe-finder-container">
      <h1 className="recipe-heading">Recipe Finder</h1>
      <Detail />
    </div>
  );
};

export default App;
