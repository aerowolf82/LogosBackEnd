
const app = require("./app");
const request = require("supertest");
const { expect } = require("@jest/globals");
const { default: knex } = require("knex");


// beforeAll(done => {
//   done()
// })
// afterAll(async (done) => {
//   await knex.destroy()
//   done()
// })


describe("the /spacecraft path", () => {
  // it("GETs data from spacecraft endpoint", async () => {
  //   const response = await request(app).get("/spacecraft");
  //   const expected = response.body[0].name;
  //   expect(expected).toEqual('Mercury No.7');

  // });

  xit(`returns a list of spacecraft from /spacecraft`, (done) => {
    request(app)
      .get(`/spacecraft/Mercury`)
      .expect(200)
      .expect(`Content-Type`, /json/)
      .expect(
        [{ name: `Mercury No.7`, family: `Mercury` }]
      ).end(done)
  });
});

describe("the /spacecraft/:name path", () => {
  xit("returns the data from the searched spacecraft name", async () => {
    const response = await request(app).get('/spacecraft/Mercury'); //case sensitive
    const expected = response.body[0].name;
    console.log('expected: ', expected);
    expect(expected).toEqual('Mercury No.7');
    // done();
  });

});

describe("the pads path", () => {
  it(`returns a list of pads from /pads`, (done) => {
    request(app)
      .get(`/pads `)
      .expect(200)
      .expect(`Content-Type`, /json/)
      .expect(
        [{ name: `Space Launch Complex 3W`, location: `Vandenberg SFB, CA, USA` }]
      ).end(done)
  });

});

describe("the /pads/:name path", () => {
  xit("returns the data from the searched launch pad name", async () => {
    let name = `Space%20Launch%20Complex%203W`;
    const response = await request(app).get(`/pads/${name}`); //case sensitive
    console.log('response', response);
    const expected = response.body[0].name;
    console.log('expected: ', expected);
    expect(expected).toEqual('Space Launch Complex 3W');
    // done();
  });
});

// afterAll(done => {
//   knex.destroy();
//   done();
// });

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