import ReactDOM from "react-dom";
import React from "react";

//create a constant
const name = "Lavish Jain";

ReactDOM.render(
  <>
    <h1>This is {name} from Pune.</h1>
    <p>Using javascript in Html .Add {10 + 20}</p>
    <p>Using javascript in Html .Add {Math.random()}</p>
  </>,

  document.getElementById("root")
);

//Here we are writing javascript expression in JSX
//using {} curly braces
