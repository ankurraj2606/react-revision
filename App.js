/**
 * <div id="parent">
 *  <div id="child">
 *      <h1>I am a h1 tag</h1>
 *      <h2>I am a h2 tag</h2>
 *  </div>
 * </div>
 *
 */

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "I am a h1 tag"),
    React.createElement("h2", {}, "I am a h2 tag"),
  ])
);

const heading = React.createElement(
  "h1",
  { id: "heading", xyz: "head" },
  "Hello! I am Ankur"
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
console.log(heading);
console.log(heading.props.children);
