import React, { useState, useCallback } from "react";

import { getRandomEmail } from "../util/random-email-generator";
import { Email } from "../models/Email";

import { Button } from "./Button";
import { EmailBlock } from "./EmailBlock";

import "./Form.css";

export interface FormProps {}

export const Form: React.FC<FormProps> = () => {
  const [emails, setEmails] = useState<Email[]>([]);
  const [emailInput, setEmailInput] = useState<string>("");

  const addEmail = useCallback(
    (newEmail: Email): boolean => {
      if (newEmail.address === "") {
        return false;
      }

      setEmails([...emails, newEmail]);
      return true;
    },
    [emails, setEmails]
  );

  const emailInputChangeHandler: React.ChangeEventHandler<HTMLInputElement> = useCallback(
    event => {
      setEmailInput(event.target.value);
    },
    [setEmailInput]
  );

  const emailInputKeyPressHandler: React.KeyboardEventHandler<HTMLInputElement> = useCallback(
    event => {
      if (event.key === "Enter" || event.key === ",") {
        event.preventDefault();

        addEmail(new Email(emailInput));
        setEmailInput("");
      }
    },
    [addEmail, emailInput, setEmailInput]
  );

  const emailInputBlurHandler: React.FocusEventHandler<HTMLInputElement> = useCallback(
    event => {
      addEmail(new Email(emailInput));
      setEmailInput("");
    },
    [addEmail, emailInput, setEmailInput]
  );

  const addRandomEmail = useCallback(() => {
    const newEmail = getRandomEmail();
    addEmail(new Email(newEmail));
  }, [addEmail]);

  return (
    <div className="EMAIL-EDITOR-form" data-testid="form">
      <div className="EMAIL-EDITOR-form__top">
        <div className="EMAIL-EDITOR-form__title">
          Share <b>board names</b> with others
        </div>
        <div className="EMAIL-EDITOR-form__text-area">
          {emails.map(email => (
            <EmailBlock key={email.id} email={email} />
          ))}

          <input
            className="EMAIL-EDITOR-form__text-input"
            placeholder={
              emails.length === 0
                ? "Enter email addresses..."
                : "add more people..."
            }
            value={emailInput}
            onChange={emailInputChangeHandler}
            onKeyPress={emailInputKeyPressHandler}
            onBlur={emailInputBlurHandler}
            data-testid="form-input"
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
