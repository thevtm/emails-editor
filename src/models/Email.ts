import * as EmailValidator from "email-validator";

export class Email {
  public readonly address: string;
  public readonly isValid: boolean;

  constructor(address: string) {
    this.address = address;
    this.isValid = EmailValidator.validate(address);
  }
}
