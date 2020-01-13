import React from "react";

import { Email } from "../models/Email";

import "./EmailBlock.css";

export interface EmailBlockProps extends React.HTMLProps<HTMLSpanElement> {
  email: Email;
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
    {email.address}
    <span
      className="EMAIL-EDITOR-email-block__remove-button"
      onClick={onClickRemove}
    >
      ×
    </span>
  </span>
);
