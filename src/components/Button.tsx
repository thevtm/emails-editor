import React from "react";

import "./Button.css";

export const Button: React.FC<React.HTMLAttributes<HTMLButtonElement>> = ({
  children,
  ...otherProps
}) => (
  <button className="EMAIL-EDITOR-button" {...otherProps}>
    {children}
  </button>
);
