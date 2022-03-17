import React from "react";
import classes from "./site.scss";

export const MessageComponent: React.FC = () => {
  
  return (
    <div className={classes["message-class"]}>
      <span>Esto es una pagina implementada con Parcel.</span>
    </div>
  );
};