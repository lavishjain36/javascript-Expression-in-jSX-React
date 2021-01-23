// var React = require("react");
// var ReactDOM = require("react-dom");
import ReactDOM from "react-dom";

import React from "react";
// ReactDOM.render(
//   <h1>Hello People. This is Lavish.</h1>,
//   document.getElementById("root")
// );

ReactDOM.render(
  /*#__PURE__*/ React.createElement(
    "h1",
    null,
    "Hello People. This is Lavish."
  ),
  document.getElementById("root")
);

var h1 = document.createElement("h1");
h1.innerHTML = "Lavish Jain";
document.getElementById("root").appendChild(h1);
// The content which is written here is not the html.This is JSX
var h2 = document.createElement("h2");
h2.innerHTML = "Kushal Jain";
document.getElementById("root").appendChild(h2);
