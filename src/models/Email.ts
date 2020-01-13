import { uniqueId } from "lodash";

import * as EmailValidator from "email-validator";

export class Email {
  public readonly id: string;
  public readonly address: string;
  public readonly isValid: boolean;

  constructor(address: string) {
    this.id = uniqueId("Email");
    this.address = address;
    this.isValid = EmailValidator.validate(address);
  }
}
