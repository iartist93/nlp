import getData from "../src/client/js/getData";

describe("Test getData from endpoint", () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  it("Check for getData function", () => {
    expect(getData).toBeDefined();
  });

  it("Get fake json data test", async () => {
    fetch.mockResponseOnce(
      JSON.stringify({
        userId: 1,
        id: 1,
        title: "delectus aut autem",
        completed: false,
      })
    );

    const output = {
      userId: 1,
      id: 1,
      title: "delectus aut autem",
      completed: false,
    };

    const input = "https://jsonplaceholder.typicode.com/todos/1";
    const result = await getData(input);
    expect(result).toEqual(output);
  });
});
