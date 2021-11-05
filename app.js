// const fs = require("fs")
const express = require('express')
const morgan = require('morgan');
const app = express();
const knex = require('knex')(require('./knexfile.js')['development']);
const axios = require('axios');
const { SIGTERM } = require('constants');
const cors = require('cors')


app.use(cors())
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));


/*
endpoints
/spacecraft - select * from spacecraft; (space devs api limits to 10 ?limit=10&offset=0 increase offset by ten to pull next batch)
/spacecraft/:name - select * from spacecraft where family like '%name_to_search%';
/pad
/pad/:name
*/


//All Spacecraft in the DB OR if query, narrow by family
// NEEDS REFACTOR
app.get('/spacecraft', function (req, res) {
  if(req.query.family){
  //QUERY /spacecraft?family=Xxx
    knex('family')
      .join('spacecraft', 'family.id', '=', 'spacecraft.family_id')
      .select('spacecraft.name','spacecraft.id', 'spacecraft.image_url', 'family.name as family') //refactor to all (see last test)
    // .from('spacecraft')
    // .orderBy(spacecraft.id)
      .where('family.name', req.query.family)
      .then(data => res.status(200).json(data))

  } else {
    //LIST /spacecraft
    knex('family')
      .join('spacecraft', 'family.id', '=', 'spacecraft.family_id')
      .select('spacecraft.name', 'spacecraft.id', 'spacecraft.image_url', 'spacecraft.launch_date','family.name as family')
    // .orderBy(spacecraft.id)
      .then(data => res.status(200).json(data))
      .catch(err =>
        res.status(404).json({
          message:
            'The data you are looking for could not be found. Please try again'
        })
      );
  }

});

//if in the DB, show them result, else fetch
// INDIVIDUAL ROCKET  NEEDS REFACTOR
app.get('/spacecraft/:id', (req, res) => {
  let craftId = req.params.id;
  //if in database return else fetch it
  knex
  .select('*')
  .from('spacecraft')
  .where('id', craftId)
  .then(data => res.status(200).json(data))
    .catch(err => {
      res.status(404).json({
        message: `The spacecraft you are looking for could not be found. Please try again`
      })
    })
})


app.get('/pads', function (req, res) {
  knex
    .select('*') //need to refactor to * later in testing (see last test)
    .from('pads')
    .then(data => res.status(200).json(data))
    .catch(err =>
      res.status(404).json({
        message:
          'The data you are looking for could not be found. Please try again'
      })
    );
});

//if in the DB, show them result, else fetch
app.get('/pads/:id', (req, res) => {
  let pad_id = req.params.id;
  //if in database return else fetch it
  knex('pads')
  .join('spacecraft', 'pads.id', '=', 'spacecraft.pad_id')
    .select('spacecraft.name', 'spacecraft.launch_date', 'pads.pad_name', 'pads.pad_location')    
    .where('pads.id', pad_id)
    .then(data => res.status(200).json(data))
    .catch(err => {
      res.status(404).json({
        message: `The launch pad you are looking for could not be found. Please try again`
      })
    })
})

module.exports = { app, knex };