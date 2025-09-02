const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", { id: "heading1" }, "Hello World from React!!!"),
    React.createElement("h2", { id: "heading1" }, "Hello World from React!!!"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", { id: "heading2" }, "Hello World from React!!!"),
    React.createElement("h2", { id: "heading2" }, "Hello World from React!!!"),
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
