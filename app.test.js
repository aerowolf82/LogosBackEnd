
const { app, knex } = require("./app");
const request = require("supertest");
const { expect } = require("@jest/globals");


//required for jest to work properly
afterAll((done) => {  
  knex.destroy();
  done();
})


describe("the /spacecraft path", () => {
  it(`returns a list of spacecraft from /spacecraft`, (done) => {
    request(app)
      .get(`/spacecraft`)
      .expect(200)
      .expect(`Content-Type`, /json/)
      .expect(
        [{ name: `Mercury No.7`, family_id: 1 },
        { name: 'Soyuz MS-03', family_id: 2 },
        { name: 'Gemini SC12', family_id: 3 },
        { name: 'Mercury No.11', family_id: 1 }]
      )
      .end(done)
  });

  //QUERY ?family=Xxx
  it(`returns a list of spacecraft from a queried family`, (done) => {
    request(app)
      .get(`/spacecraft/?family=Mercury`)
      .expect(200)
      .expect(`Content-Type`, /json/)
      .expect(
        [{ name: `Mercury No.7`, family: `Mercury` },
        { name: 'Mercury No.11', family: 'Mercury' }]
      )
      .end(done)
  });
});

//INDIVIDUAL ROCKET
describe("the /spacecraft/:name path", () => {
  it("returns the data from the searched individual spacecraft", async () => {
    const response = await request(app).get('/spacecraft/1'); //case sensitive
    const expectedName = response.body[0].name;
    const expectedFamily_id = response.body[0].family_id;
    const expectedHeight = response.body[0].height;
    const expectedDiameter = response.body[0].diameter;
    const expectedPad_id = response.body[0].pad_id;    
    console.log(response.body)
    expect(expectedName).toEqual('Mercury No.7');
    expect(expectedFamily_id).toEqual(1);
    expect(expectedHeight).toEqual(3.3);
    expect(expectedDiameter).toEqual(1.8);
    expect(expectedPad_id).toEqual(2);
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
  it("returns the data from the searched launch pad name", async () => {
    let id = 1;
    const response = await request(app).get(`/pads/${id}`); //case sensitive
    const expected = response.body[0].pad_name;
    expect(expected).toContain('Space Launch Complex 3W');
    // test: '[{"pad_name":"Space Launch Complex 3W"}]'
    // body: [{ pad_name: 'Space Launch Complex 3W' }]
  });
});

describe("Results from earlier Fetching", () => {
  it("returns the data for Mercury 18 as it was not in original database", async () => {
    const response = await request(app).get('/spacecraft/5'); //case sensitive
    const expectedName = response.body[0].name;
    const expectedFamily_id = response.body[0].family_id;
    const expectedHeight = response.body[0].height;
    const expectedDiameter = response.body[0].diameter;
    const expectedPad_id = response.body[0].pad_id;    
    console.log(response.body)
    expect(expectedName).toEqual('Mercury No.18');
    expect(expectedFamily_id).toEqual(1);
    expect(expectedHeight).toEqual(3.3);
    expect(expectedDiameter).toEqual(1.8);
    expect(expectedPad_id).toEqual(17);
  });
});