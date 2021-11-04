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
      .select('spacecraft.name','spacecraft.id', 'family.name as family') //refactor to all (see last test)
    // .from('spacecraft')
    // .orderBy(spacecraft.id)
      .where('family.name', req.query.family)
      .then(data => res.status(200).json(data))

  } else {
    //LIST /spacecraft
    knex('family')
      .join('spacecraft', 'family.id', '=', 'spacecraft.family_id')
      .select('spacecraft.name', 'spacecraft.id', 'family.name as family')
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
  /* {
      id: 1,
      name: 'Mercury No.7',
      family_id: 1,
      description: 'Mercury No.7 is the Mercury capsule used for the Mercury-Redstone 3 - callsign \"Freedom 7\" - mission launched on May 5, 1961 and piloted by astronaut Alan Shepard.',
      image_url: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launcher_images/redstone_image_20190207032627.jpeg',
      history: 'The Mercury spacecraft was the manned capsule used for suborbital and orbital launches during the Project Mercury, the first human spaceflight program of the United States, from 1958 through 1963.',
      launch_date: '1961-05-05T14:49:35Z',
      height: 3.3,
      diameter: 1.8,
      pad_id: 2
    },
 */





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

/*  FETCH REFERENCE
async function fetchPokemon(pokemonName) {
  let pokeres = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
  let pokedata = await pokeres.json();
  //console.log(data)
  return pokedata;
}

app.get('/api/:pokemonName', asyncHandler(async (req, res) =>{
  let pokemonName =req.params.pokemonName;
  pokemonName = pokemonName.toLowerCase();
  knex('pokedata')
    .where('name', pokemonName)
    .then(data => {
      if(data.length <= 0){
        fetchPokemon(pokemonName)
        .then(apidata => {
          if(apidata === undefined){
            res.status(404).json({
              message:
                'No Pokemon by that name'
            })
          }else{
            knex('pokedata').insert([
              {name: apidata?.name, type: apidata?.types[0]?.type?.name, dex_number: apidata?.id, hp: apidata?.stats[0].base_stat, attack: apidata?.stats[1].base_stat, defense: apidata?.stats[2].base_stat, special_attack: apidata?.stats[3].base_stat, special_defense:apidata?.stats[4].base_stat, speed:apidata?.stats[5].base_stat,img_link: apidata?.sprites?.other["official-artwork"]?.front_default }
            ])
            .then(() => {
              knex('pokedata')
                .where('name', pokemonName)
                .then(data => {
                  res.status(200).json(data)
                })
            });
          }
        });
      } else{
        res.status(200).json(data)
      }
    })
}));


*/


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
    .select('*')
    .where('id', pad_id)
    .then(data => res.status(200).json(data))
    .catch(err => {
      res.status(404).json({
        message: `The launch pad you are looking for could not be found. Please try again`
      })
    })
})

module.exports = { app, knex };