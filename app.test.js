const app = require("./app");
const request = require("supertest");
//const { describe } = require("yargs");
//const { it, expect } = require("@jest/globals");


describe("the /spacecraft path", () => {
  it("GETs data from spacecraft endpoint", async () => {
    const response = await request(app).get("/spacecraft");
    const expected = response.body[0].name;
    expect(expected).toEqual('Mercury No.7');
  });

  it(`returns a list of spacecraft from /spacecraft`, (done) => {
    request(app)
      .get(`/spacecraft`)
      .expect(200)
      .expect(`Content-Type`, /json/)
      .expect(
        [{ name: `Mercury No.7`, family: `Mercury` }]
      ).end(done)
  });
});
describe("the /spacecraft/:name path", () => {
  it("returns the data from the searched spacecraft name", async () => {
    const response = await request(app).get('/spacecraft/mercury');
    const expected = response.body[0].name;
    expect(expected).toEqual('Mercury No.7');
  });

});

beforeAll(done => {
  done()
})

afterAll(done => {
  // Closing the DB connection allows Jest to exit successfully.
  mongoose.connection.close()
  done()
})


// describe('testing the index.js', () => {
//   test('GET /', async () => {
//     await request(app)
//       .get('/')
//       .expect(200, 'Dang \'ol Express app up and runnin\'!');
//   });
//   test('GET /books', async () => {
//     const response = await request(app)
//       .get('/books')
//       .expect(200);

//     expect(response.body).toHaveLength(4);
//   });
//   it('GETs the expected data from books endpoint', async () => {
//     const response = await request(app).get('/books');

//     const expected = (response.body[0].id);
//     expect(expected).toEqual(1);
//   });
// });