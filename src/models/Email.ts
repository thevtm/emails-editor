import { isValidEmailAddress } from "../util/email-validator";

export class Email {
  public readonly address: string;
  public readonly isValid: boolean;

  constructor(address: string) {
    this.address = address;
    this.isValid = isValidEmailAddress(address);
  }
}
