import React from "react";
import classes from "./logoStyles.scss";
import logoImg from "../content/logo_1.png";

/*const img = document.createElement("img");
img.src = logoImg;*/

export const LogoComponent = () => {
  
  return (
    <div>
        <img className={classes.componentStyle} src={logoImg}></img>
    </div>
  );
};