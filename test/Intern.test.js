const Intern = require("../lib/Intern");

test("Can set school via constructor", () => {
  const testValue = "UNIVERSITY";
  const e = new Intern("Ryder", 987, "test@email.com", testValue);
  expect(e.school).toBe(testValue);
});

test("getRole() should return \"Intern\"", () => {
  const testValue = "Intern";
  const e = new Intern("Ryder", 987, "test@email.com", "UCLA");
  expect(e.getRole()).toBe(testValue);
});

test("Can get school via getSchool()", () => {
  const testValue = "UNIVERSITY";
  const e = new Intern("Ryder", 987, "test@email.com", testValue);
  expect(e.getSchool()).toBe(testValue);
});