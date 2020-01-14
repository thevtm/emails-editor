import { Email } from "../models/Email";
import { getRandomEmail } from "../util/random-email-generator";

import { EmailBlock } from "./EmailBlock";
import { Form } from "./Form";

export class EmailsEditor extends HTMLElement {
  public constructor() {
    super();

    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.appendChild(Form());
  }

  public getEmailsList(): string[] {
    return Array.from(this.emailBlockEls).map(
      el => el.getAttribute("data-email") as string
    );
  }

  public setEmailsList(addresses: string[]): void {
    this.clearEmailBlocks();

    addresses
      .map(address => new Email(address))
      .map(email => this.addEmail(email));
  }

  private addEmail(email: Email): void {
    let node: ChildNode | null = null;

    const onClickRemoveHandler = () => {
      if (node != null) {
        node.remove();
      } else {
        console.warn("Failed to remove a EmailBlock node!", { email });
      }
    };

    const newEmailEl = EmailBlock(email, onClickRemoveHandler);

    node = this.textAreaEl.insertBefore(newEmailEl, this.inputEl);
  }

  private clearEmailBlocks(): void {
    this.emailBlockEls.forEach(el => el.remove());
  }

  private connectedCallback() {
    // Handle pressing <enter> or <comma> in input
    this.inputEl.addEventListener("keydown", event => {
      const { key } = event as KeyboardEvent;

      if (key === "Enter" || key === ",") {
        event.preventDefault();

        const address = this.inputEl.value.trim();

        if (address === "") {
          return;
        }

        this.addEmail(new Email(address));
        this.inputEl.value = "";
      }
    });

    // Handle input losing focus
    this.inputEl.addEventListener("blur", () => {
      const address = this.inputEl.value.trim();

      if (address === "") {
        return;
      }

      this.addEmail(new Email(address));
      this.inputEl.value = "";
    });

    // Handle pressing the "Add email" button
    this.addEmailButton.addEventListener("click", () => {
      const newEmail = getRandomEmail();
      this.addEmail(new Email(newEmail));
    });
  }

  private get inputEl(): HTMLInputElement {
    return this.shadowRoot!.querySelector("#input")! as HTMLInputElement;
  }

  private get textAreaEl(): HTMLTextAreaElement {
    return this.shadowRoot!.querySelector("#text-area")! as HTMLTextAreaElement;
  }

  private get addEmailButton(): HTMLInputElement {
    return this.shadowRoot!.querySelector(
      "#add-email-button"
    )! as HTMLInputElement;
  }

  private get emailBlockEls(): NodeListOf<Element> {
    return this.textAreaEl.querySelectorAll(".email-block");
  }
}

customElements.define("emails-editor", EmailsEditor);
