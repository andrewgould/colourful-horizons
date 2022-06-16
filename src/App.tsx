import React from "react";
import { ColourBlock, counter } from "./components/ColourBlock/ColourBlock";
import "./App.css";

/**
 * I have no idea what I'm doing with React.
 *
 * @constructor
 */

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Colourful Horizons</h1>
      </header>
      <main>{counter()}</main>
    </div>
  );
}

export default App;
