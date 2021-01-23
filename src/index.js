// var React = require("react");
// var ReactDOM = require("react-dom");
import ReactDOM from "react-dom";

import React from "react";

//its possible for render(0 to return an array of elements in react 16 vers or greater
ReactDOM.render(
  [
    <h1>Hello People. This is Lavish.</h1>,
    <p>I am from Pune</p>,
    <label htmlFor="">Enter Your Name</label>,
    <input type="text" />,
  ],
  document.getElementById("root")

  //div tag concept

  // <div>
  //   <h1>Hello People. This is Lavish.</h1>
  //   <p>I am from Pune</p>
  //   <label htmlFor="">Enter Your Name</label>
  //   <input type="text" />
  // </div>,

  // document.getElementById("root")
);

// How to USe multiple jsx element inside one render method?
// if we dont use div, then we would get an error
// Adjacent JSX elements must be wrapped in an enclosing tag. Did you want a JSX fragment <>...</>?

// SO ,we should keep it inside a div tag
