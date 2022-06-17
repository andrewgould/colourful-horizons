import React from "react";
import "./App.css";
import { BlockPrinter } from "./components/BlockPrinter/BlockPrinter";

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
      <main>{BlockPrinter()}</main>
    </div>
  );
}

export default App;
