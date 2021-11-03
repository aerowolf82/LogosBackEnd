// const fs = require("fs")
const express = require('express')
const morgan = require('morgan');
const app = express();
const knex = require('knex')(require('./knexfile.js')['development']);
const axios = require('axios');
const { SIGTERM } = require('constants');
// const asyncHandler = require('express-async-handler')

//const port = process.env.port || 3001;

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




//All Spacecraft in the DB
app.get('/spacecraft', function (req, res) {
  knex
    .select('name', 'family') //need to refactor to * later in testing (see last test)
    .from('spacecraft')
    .then(data => res.status(200).json(data))
    .catch(err =>
      res.status(404).json({
        message:
          'The data you are looking for could not be found. Please try again'
      })
    );
});


//if in the DB, show them result, else fetch
app.get('/spacecraft/:name', (req, res) => {
  let family = req.params.name;
  //if in database return else fetch it
  knex('family')
    .join('spacecraft', 'family.id', '=', 'spacecraft.family_id')
    .select('spacecraft.name', 'family.name as family') //refactor to all (see last test)
    // .from('spacecraft')
    .where('family.name', family)
    .then(data => res.status(200).json(data))
    //{
    // if (data.length > 0) {
    //   res.status(200).json(data)
    // } else {
    //   axios   //try to make a for loop to gather the info from each spacecraft endpoint
    //     .get(`https://lldev.thespacedevs.com/2.2.0/spacecraft/2/`) // /i/ instead of /2/
    //     .then(response => {
    //       let pokemon = response.data;
    //       knex('spacecraft').insert({
    //         Poke_Id: pokemon.id,
    //         Name: pokemon.name,
    //         Type: pokemon.types[0].type.name,
    //         Base_Exp: pokemon.base_experience,
    //         Height: pokemon.height,
    //         Weight: pokemon.weight,
    //         Picture: pokemon.sprites.front_default
    //       }).then(() => {
    //         res.status(200).send({
    //           Poke_Id: pokemon.id,
    //           Name: pokemon.name,
    //           Type: pokemon.types[0].type.name,
    //           Base_Exp: pokemon.base_experience,
    //           Height: pokemon.height,
    //           Weight: pokemon.weight,
    //           Picture: pokemon.sprites.front_default
    //         });
    //       })
    //     })
    //     .catch(err => {
    //       res.status(404).json({
    //         message: `The pokemon you are looking for could not be found. Please try again`
    //       })
    //     })
    // }
    .catch(err => {
      res.status(404).json({
        message: `The spacecraft you are looking for could not be found. Please try again`
      })
    })
})
//})

app.get('/pads', function (req, res) {
  knex
    .select('pad_name', 'pad_location') //need to refactor to * later in testing (see last test)
    .from('pads')
    .then(data => res.status(200).json(data))
    .catch(err =>
      res.status(404).json({
        message:
          'The data you are looking for could not be found. Please try again'
      })
    );
});
// front end will need to correlate name and id, currently can't figure out how to search for names because of spaces between words
//if in the DB, show them result, else fetch
app.get('/pads/:id', (req, res) => {
  let pad_id = req.params.id;
  //if in database return else fetch it
  knex('pads')
    .select('*') //refactored to all, test passes
    .where('id', pad_id)
    .then(data => res.status(200).json(data))
    .catch(err => {
      res.status(404).json({
        message: `The launch pad you are looking for could not be found. Please try again`
      })
    })
})




module.exports = { app, knex };