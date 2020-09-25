import React from "react";
import ReactDom from "react-dom";
import "../public/styles.css";

const date = new Date().getHours();

let h1;
let customColor;

if (date < 12) {
  h1 = "Good Morning!";
  customColor = "red";
} else if (date < 18) {
  h1 = "Good Afternoon!";
  customColor = "green";
} else {
  h1 = "Good Evening!";
  customColor = "blue";
}

ReactDom.render(
  <div>
    <h1 className="heading" style={{ color: customColor }}>
      {h1}
    </h1>
  </div>,
  document.getElementById("root")
);
