import React from "react";
import ReactDOM from "react-dom";
import { HelloComponent } from "./hello.component";
import { MessageComponent } from "./message.component";

import "./site.scss";

ReactDOM.render(
    <div>
      <HelloComponent />
      <MessageComponent />
    </div>,
    document.getElementById("root")
  );

