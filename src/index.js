// var React = require("react");
// var ReactDOM = require("react-dom");
import ReactDOM from "react-dom";

import React from "react";

//its possible for render(0 to return an array of elements in react 16 vers or greater
ReactDOM.render(
  <React.Fragment>
    <h1>Hello People. This is Lavish.</h1>
    <p>I am from Pune</p>
    <label htmlFor="">Enter Your Name</label>
    <input type="text" />
  </React.Fragment>,
  document.getElementById("root")
);

//React Fragment is same as div but it is faster than div.
//it consume less memory
//if we dont use React.Fragment ,we would not get error
//Its is Special fragment Syntax
//React 16.x is also a syntactic sugar fragment
