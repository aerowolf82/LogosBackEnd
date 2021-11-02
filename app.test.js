const app = require("./app");
const request = require("supertest")(app);

describe("the /spacecraft path", () => {
  it("GETs data from spacecraft endpoint", async () => {
    const response = await request.get("/spacecraft");
    const expected = response.body[0].id;
    expect(expected).toEqual(1);
  });
});