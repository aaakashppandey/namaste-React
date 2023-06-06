const heading = React.createElement(
  "h1",
  { id: "parent" },
  React.createElement("h3", { id: "div1" }, "I am inside Div 1"),
  React.createElement("h3", { id: "div2" }, "I am inside Div 2"),
  React.createElement("h3", { id: "div3" }, "I am inside Div 3"),

  "Hello World from React App JS "
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
