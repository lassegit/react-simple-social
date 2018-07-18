import React from "react";
import ReactDom from "react-dom";
import ReactSimpleShare from "../src/index";

ReactDom.render(
  <div>
    <p>You rendered the ReactSimpleShare:</p>
    <b>Minimal icon:</b>
      <ReactSimpleShare url="https://prettier.io" theme="minimal" />
    <b>Round icon:</b>
    <ReactSimpleShare url="https://prettier.io" theme="round" />
    <b>Roundedunfilled icon:</b>
    <ReactSimpleShare url="https://prettier.io" theme="roundedunfilled" />
    <b>Roundedsquare icon:</b>
    <ReactSimpleShare url="https://prettier.io" theme="roundedsquare" />
    <b>Square icon:</b>
    <ReactSimpleShare url="https://prettier.io" theme="square" />
    <b>text:</b>
    <ReactSimpleShare url="https://prettier.io" theme="text" />
  </div>,
  document.getElementById("app")
);
