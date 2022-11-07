const passwordVerifier = require("./password-verifier");
describe("requirement one", () => {
  test("return Password rejected if password is less than 8 characters", function () {
    const password = "Alin";
    const outPut = passwordVerifier(password);
    const expected = "Password rejected";
    expect(outPut).toEqual(expected);
  });
});

describe("requirement two", () => {
  test("return Password rejected if password is null", function () {
    const password = null;
    const outPut = passwordVerifier(password);
    const expected = "Password rejected";
    expect(outPut).toEqual(expected);
  });
});

describe("requirement three", () => {
  test("return Password rejected if password does not have at least 1 uppercase constter ", function () {
    const password = "alinurisiahsiahi";
    const outPut = passwordVerifier(password);
    const expected = "Password rejected";
    expect(outPut).toEqual(expected);
  });
});

describe("requirement four", () => {
  test("return Password rejected if password does not have at least 1 number ", function () {
    const password = "Alinurisiahsiahi";
    const outPut = passwordVerifier(password);
    const expected = "Password rejected";
    expect(outPut).toEqual(expected);
  });
});

describe("requirement five", () => {
  test("return Password accepted if all four requirements are met ", function () {
    const password = "Alinuri1";
    const outPut = passwordVerifier(password);
    const expected = "Password rejected";
    expect(outPut).toEqual(expected);
  });
});
