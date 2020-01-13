import { Email } from "./Email";

describe("Emails model", () => {
  it("should be instantiable", () => {
    const emailA = new Email("john@miro.com");

    expect(emailA.address).toBe("john@miro.com");
    expect(emailA.isValid).toBe(true);

    const emailB = new Email("foo");

    expect(emailB.address).toBe("foo");
    expect(emailB.isValid).toBe(false);
  });
});
