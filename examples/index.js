import React from "react";
import ReactDom from "react-dom";
import ReactSimpleShare from "../src/index";

ReactDom.render(
  <div>
    <p>You rendered the ReactSimpleShare:</p>
    <ReactSimpleShare url="https://prettier.io/docs/en/cli.html" title="Lorem ipsum…" theme="minimal" />
    <ReactSimpleShare url="https://prettier.io/docs/en/cli.html" theme="round" />
    <ReactSimpleShare url="https://prettier.io/docs/en/cli.html" theme="roundedunfilled" />
    <ReactSimpleShare url="https://prettier.io/docs/en/cli.html" theme="roundedsquare" />
    <ReactSimpleShare url="https://prettier.io/docs/en/cli.html" theme="square" />
    <ReactSimpleShare url="https://prettier.io/docs/en/cli.html" theme="text" />
  </div>,
  document.getElementById("app")
);
