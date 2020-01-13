import React from "react";

import "./EmailBlock.css";

export interface EmailBlockProps extends React.HTMLProps<HTMLSpanElement> {
  email: String;
  onClickRemove?: () => void;
}

export const EmailBlock: React.FC<EmailBlockProps> = ({
  email,
  onClickRemove,
  ...otherProps
}) => (
  <span
    className="EMAIL-EDITOR-email-block"
    data-testid="email-block"
    {...otherProps}
  >
    {email}
    <span
      className="EMAIL-EDITOR-email-block__remove-button"
      onClick={onClickRemove}
    >
      ×
    </span>
  </span>
);
