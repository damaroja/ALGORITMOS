

const { validatePassword, verifyString } = require("./app");

describe("validatePassword", () => {
  test("Valid password", () => {
    expect(validatePassword("Abcdefg1")).toBe(true);
  });

  test("Invalid password - less than 8 characters", () => {
    expect(validatePassword("Abc123")).toBe(false);
  });

  test("Invalid password - no numbers", () => {
    expect(validatePassword("Abcdefgh")).toBe(false);
  });

  test("Invalid password - no lowercase letters", () => {
    expect(validatePassword("ABCDEFG1")).toBe(false);
  });

  test("Invalid password - no uppercase letters", () => {
    expect(validatePassword("abcdefg1")).toBe(false);
  });

  test("Invalid password - no lowercase and uppercase letters", () => {
    expect(validatePassword("12345678")).toBe(false);
  });

  test("introducing undefined password", () => {
    expect(() => {
      validatePassword();
    }).toThrow("Undefined string");
  });
  test("introducing empty password", () => {
    expect(() => {
      validatePassword("");
    }).toThrow("Empty string");
  });
  test("introducing non-string password", () => {
    expect(() => {
      validatePassword(123);
    }).toThrow("Not a string");
  });
  test("introducing empty array password", () => {
    expect(() => {
      validatePassword([]);
    }).toThrow("Not a string");
  });
  test("introducing empty object password", () => {
    expect(() => {
      validatePassword({});
    }).toThrow("Not a string");
  });
});

describe("verifyString", () => {
  test("verifyString should throw an error for undefined string", () => {
    expect(() => {
      verifyString(undefined);
    }).toThrow("Undefined string");
  });

  test("verifyString should throw an error for empty string", () => {
    expect(() => {
      verifyString("");
    }).toThrow("Empty string");
  });

  test("verifyString should throw an error for non-string input", () => {
    expect(() => {
      verifyString(123);
    }).toThrow("Not a string");
  });
});
