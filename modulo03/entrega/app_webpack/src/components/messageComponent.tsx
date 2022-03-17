import React from "react";
import classes from "./messageStyles.scss";

export const MessageComponent = () => {
  
  return (
    <div className={classes.componentStyle}>
      <span>Esto es una pagina implementada con Webpack.</span>
      <br></br>
      <span>Estamos en modo: {process.env.MYAPP_MODE}</span>
    </div>
  );
};