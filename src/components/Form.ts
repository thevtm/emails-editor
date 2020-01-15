import buttonStyles from "./Button.css";
import emailBlockStyles from "./EmailBlock.css";
import formStyles from "./Form.css";

const template = document.createElement("template");
template.innerHTML = `
    <style>
      ${buttonStyles}
      ${emailBlockStyles}
      ${formStyles}
    </style>
    <div class="form" data-test-id="form">
      <div class="form__top">
        <div class="form__title">
          Share <b>Board names</b> with others
        </div>

        <div id="text-area" class="form__text-area" data-test-id="text-area">
          <div class="form__input-wrapper">
            <input
              id="input"
              class="form__text-input"
              placeholder="add more people..."
              data-test-id="form-input"
            />
          </div>
        </div>
      </div>

      <div class="form__bottom">
        <button id="add-email-button" class="button" data-test-id="add-email-button">
          Add email
        </button>

        <button id="get-emails-count" class="button" data-test-id="get-emails-button">
          Get emails count
        </button>
      </div>
    </div>
  `;

export const Form = () => template.content.cloneNode(true);
