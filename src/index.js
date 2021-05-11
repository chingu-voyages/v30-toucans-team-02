import "../styles/style.css";

// import your function
import myName from "./myName";
import { functionOne, functionTwo } from "./example_export_multiple";

// Dynamic element creation
function component() {
  const element = document.createElement("div");

  // use imported myName function!
  element.innerHTML = myName("Joe");
  return element;
}

document.body.appendChild(component());

const test = document.getElementById("test");

test.innerHTML = functionOne();
