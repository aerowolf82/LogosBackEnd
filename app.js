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


//All Spacecraft in the DB OR if query, narrow by family

app.get('/spacecraft', function (req, res) {
  if(req.query.family){
  //QUERY /spacecraft?family=Xxx
    knex('family')
      .join('spacecraft', 'family.id', '=', 'spacecraft.family_id')
      .select('spacecraft.name','spacecraft.id', 'spacecraft.image_url', 'spacecraft.launch_date', 'family.name as family') //refactor to all (see last test)
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

//if in the DB, show them result
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
  if(req.query.pad_name){
    //QUERY /pads?pad_name=Xxx

    knex
      .select('*')
      .from('pads')
      .where('pads.id', req.query.pad_name)
      .then(data => res.status(200).json(data))
      .catch(err =>
        res.status(404).json({
          message:
            'The data you are looking for could not be found. Please try again'
        })
      );
  } else {
    //LIST /pads
    knex
      .select('*') 
      .from('pads')
      .then(data => res.status(200).json(data))
      .catch(err =>
        res.status(404).json({
          message:
            'The data you are looking for could not be found. Please try again'
        })
      );

  }
});

/* 
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

*/



//if in the DB, show them result
app.get('/pads/:id', (req, res) => {
  let pad_id = req.params.id;

  knex('pads')  
    .select('*')    
    .where('pads.id', pad_id)
    .then(data => res.status(200).json(data))
    .catch(err => {
      res.status(404).json({
        message: `The launch pad you are looking for could not be found. Please try again`
      })
    })
})

module.exports = { app, knex };