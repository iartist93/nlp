import { handleSubmit, handleChange } from "../src/client/js/formHandler";

describe("Testing the submit functionality", () => {
  test("Testing the handleSubmit() function", () => {
    expect(handleSubmit).toBeDefined();
  });
  test("Testing the handleChange() function", () => {
    expect(handleChange).toBeDefined();
  });
});
