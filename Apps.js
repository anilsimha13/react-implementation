import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div", { id: "parent" ,key:'val0'}, [
  React.createElement("div", { id: "child1" ,key:'val1'}, [
    React.createElement("h1", { id: "heading1" ,key:'val2'}, "Hello World from React!!!"),
    React.createElement("h2", { id: "heading1" ,key:'val3'}, "Hello World from React!!!"),
  ]),
  React.createElement("div", { id: "child2" ,key:'val4'}, [
    React.createElement("h1", { id: "heading2" ,key:'val5'}, "Hello World from React!!!"),
    React.createElement("h2", { id: "heading2" ,key:'val6'}, "Hello World from React!!!"),
  ]),
]);
const root1 = ReactDOM.createRoot(document.getElementById("root1"));
root1.render(parent);

const heading = React.createElement(
  "h1",
  { id: "heading", xyz: "abc" },
  "Hello World from React!!!"
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
