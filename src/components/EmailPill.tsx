import React from "react";

import "./EmailPill.css";

export interface EmailPillProps extends React.HTMLProps<HTMLSpanElement> {
  email: String;
  onClickRemove?: () => void;
}

export const EmailPill: React.FC<EmailPillProps> = ({
  email,
  onClickRemove,
  ...otherProps
}) => (
  <span className="EMAIL-EDITOR-email-pill" {...otherProps}>
    {email}
    <span
      className="EMAIL-EDITOR-email-pill__remove-button"
      onClick={onClickRemove}
    >
      x
    </span>
  </span>
);
