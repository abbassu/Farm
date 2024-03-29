// StyledButton.jsx
import React from "react";
import "./Button.scss";

const Button = ({ onClick, children }) => {
  return (
    <button className="styled-button" onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
