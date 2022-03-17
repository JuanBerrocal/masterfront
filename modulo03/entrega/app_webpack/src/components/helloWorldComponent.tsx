import React from "react";
import classes from "./helloWorldStyles.scss";

export const HelloWorldComponent = () => {
  
  return (
    <div className = {classes.componentStyle}>
      <span> Hola mundo!</span>
    </div>
  );
};