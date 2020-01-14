import { Email } from "../models/Email";
import { htmlToElement } from "../util/html-to-element";

export const EmailBlock = (
  email: Email,
  onClickRemove?: () => void
): ChildNode => {
  const el = htmlToElement(
    `
    <span
      class="email-block${email.isValid ? "" : " email-block--invalid"}"
      data-test-id="email-block"
      data-email="${email.address}"
    >
      ${email.address}

      <button class="email-block__remove-button" data-test-id="email-block__remove-button">
        ×
      </button>
    </span>
  `
  );

  if (onClickRemove != null) {
    el.querySelector(".email-block__remove-button")?.addEventListener(
      "click",
      () => onClickRemove()
    );
  }

  return el;
};
