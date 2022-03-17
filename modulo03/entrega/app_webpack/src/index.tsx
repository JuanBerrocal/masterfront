// Let's use some ES6 features


import React from "react";
import ReactDOM from "react-dom";
import { UtilComponent } from "./utilComponent";
import { HelloWorldComponent } from "./components/helloWorldComponent";
import { MessageComponent } from "./components/messageComponent";
import { LogoComponent } from "./components/logoComponent";

ReactDOM.render(
  <div>
    <HelloWorldComponent />
    <MessageComponent />
    <LogoComponent />
  </div>,
  document.getElementById("root")
);