import React from "react";

import { Button } from "./Button";
import { EmailPill } from "./EmailPill";

import "./Form.css";

export interface FormProps {}

export const Form: React.FC<FormProps> = () => {
  return (
    <div className="EMAIL-EDITOR-form">
      <div className="EMAIL-EDITOR-form__top">
        <div className="EMAIL-EDITOR-form__title">
          Share <b>board names</b> with others
        </div>
        <div className="EMAIL-EDITOR-form__text-area">
          <EmailPill email="john@miro.com" />
          <EmailPill email="mary@miro.com" />
          <EmailPill email="john@miro.com" />
          <EmailPill email="mary@miro.com" />
          <EmailPill email="john@miro.com" />
          <EmailPill email="mary@miro.com" />
          <EmailPill email="john@miro.com" />
          <EmailPill email="mary@miro.com" />
          <input
            className="EMAIL-EDITOR-form__text-input"
            placeholder="add more people..."
          />
        </div>
      </div>
      <div className="EMAIL-EDITOR-form__bottom">
        <Button>Add email</Button>
        <Button>Get emails count</Button>
      </div>
    </div>
  );
};
