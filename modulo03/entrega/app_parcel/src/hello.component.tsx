import React from "react";
import classes from "./site.scss";

export const HelloComponent: React.FC = () => {
  return (
    <div className={classes["hello-world"]}>
          <span>Hello from React</span>
    </div>
  );
};