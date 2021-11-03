
const { app, knex } = require("./app");
const request = require("supertest");
const { expect } = require("@jest/globals");


// beforeAll(done => {
//   done()
// })
afterAll((done) => {
  //process.exit(1)
  //app.close();
  knex.destroy();
  done();
})

// afterAll(async (done) => {
//   await knex.connection.close()
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
      )
      .end(done)
    // done();
  });
});

describe("the /spacecraft/:name path", () => {
  xit("returns the data from the searched spacecraft name", async () => {
    const response = await request(app).get('/spacecraft/Mercury'); //case sensitive
    const expected = response.body[0].name;
    expect(expected).toEqual('Mercury No.7');
  });
});

describe("the pads path", () => {
  it(`returns a list of pads from /pads`, (done) => {
    request(app)
      .get(`/pads`)
      .expect(200)
      .expect(`Content-Type`, /json/)
      .expect(
        // [{ pad_name: `Space Launch Complex 3W`, pad_location: `Vandenberg SFB, CA, USA` }]
        [
          {
            pad_name: 'Space Launch Complex 3W',
            pad_location: 'Vandenberg SFB, CA, USA'
          },
          {
            pad_name: 'Cape Canaveral Air Force Station Launch Complex 5',
            pad_location: 'Cape Canaveral, FL USA'
          },
          {
            pad_name: 'Baikonur Cosmodrome, Republic of Kazakhstan',
            pad_location: 'Baikonur Cosmodrome, Republic of Kazakhstan'
          },
          {
            pad_name: 'Space Launch Complex 19',
            pad_location: 'Cape Canaveral, FL, USA'
          }
        ]
      ).end(done)
  });
});

describe("the /pads/:name path", () => {
  xit("returns the data from the searched launch pad name", async () => {
    let id = 1;
    const response = await request(app).get(`/pads/${id}`); //case sensitive
    const expected = response.body[0].pad_name;
    expect(expected).toContain('Space Launch Complex 3W');
    // test: '[{"pad_name":"Space Launch Complex 3W"}]'
    // body: [{ pad_name: 'Space Launch Complex 3W' }]
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