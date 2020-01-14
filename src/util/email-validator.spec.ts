import { isValidEmailAddress } from "./email-validator";

describe("isValidEmailAddress", () => {
  it("should validate correctly", () => {
    expect(isValidEmailAddress("john@miro.com")).toBe(true);
    expect(isValidEmailAddress("mary@gmail.com")).toBe(true);

    expect(isValidEmailAddress("foo")).toBe(false);
    expect(isValidEmailAddress("foo@bar")).toBe(false);
  });
});
