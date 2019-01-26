import React from "react";
import ReactDOM from "react-dom";
import Counter from "./counter/Counter.js";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <h4>by Kennan Smith</h4>
      <p>
        Based on exercises from <u>Learning React</u> by Kirrupa Chinnathambi
      </p>
      <Counter />
      <h3>Note: hold shift while clicking to increment by 10</h3>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
