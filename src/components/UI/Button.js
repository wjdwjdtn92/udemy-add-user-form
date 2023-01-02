import React from "react";

import classes from "./Button.module.css";

const Button = ({ type, ariaLabel, onClick, children }) => {
  return (
    <button
      className={classes.button}
      type={type || "button"}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
};

export default Button;
