import React, { useState, useCallback } from "react";

import { getRandomEmail } from "../util/random-email-generator";

import { Button } from "./Button";
import { EmailBlock } from "./EmailBlock";

import "./Form.css";

export interface FormProps {}

export const Form: React.FC<FormProps> = () => {
  const [emails, setEmails] = useState<string[]>([
    // "john@miro.com",
    // "mary@miro.com"
  ]);

  const addRandomEmail = useCallback(() => {
    const newEmail = getRandomEmail();
    setEmails([...emails, newEmail]);
  }, [emails, setEmails]);

  return (
    <div className="EMAIL-EDITOR-form" data-testid="form">
      <div className="EMAIL-EDITOR-form__top">
        <div className="EMAIL-EDITOR-form__title">
          Share <b>board names</b> with others
        </div>
        <div className="EMAIL-EDITOR-form__text-area">
          {emails.map(email => (
            <EmailBlock key={email} email={email} />
          ))}

          <input
            className="EMAIL-EDITOR-form__text-input"
            placeholder={
              emails.length === 0
                ? "Enter email addresses..."
                : "add more people..."
            }
          />
        </div>
      </div>

      <div className="EMAIL-EDITOR-form__bottom">
        <Button
          onClick={() => addRandomEmail()}
          data-testid="form-button-add-email"
        >
          Add email
        </Button>

        <Button>Get emails count</Button>
      </div>
    </div>
  );
};
