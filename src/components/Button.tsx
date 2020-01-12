import React from "react";

import "./Button.css";

export const Button: React.FC = ({ children }) => (
  <button className="button foo" onClick={() => console.log("Clicked")}>
    {children}
  </button>
);
