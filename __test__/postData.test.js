import postData from "../src/client/js/postData";

describe("Test postData functionality", () => {
  test("Check for postData function", () => {
    expect(postData).toBeDefined();
  });
});
