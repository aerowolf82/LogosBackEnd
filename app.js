// const fs = require("fs")
const express = require('express')
const morgan = require('morgan');
const app = express();
const knex = require('knex')(require('./knexfile.js')['development']);
const axios = require('axios');
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
    .select('name', 'family') //need to refactor to * later in testing
    .from('spacecraft')
    .then(data => res.status(200).json(data))
    .catch(err =>
      res.status(404).json({
        message:
          'The data you are looking for could not be found. Please try again'
      })
    );
});

app.get('/spacecraft/:name', (req, res) => {
  let family = req.params.name;
});

// app.get('/movies/:moviesId', (req, res) => {
//   let id = parseInt(req.params.moviesId, 10);
//   console.log(id);
//   let movie;
//   if (Number.isNaN(id)) {
//     res.status(400).send("Invalid ID supplied").end()
//   }
//   if (req.params.moviesId) {
//     movie= movies.find(movie => movie.id === id)
//   }
//   if (movie) {
//     res.status(200).json(movie)
//   } else {
//     res.status(404).send("Movie ID not found").end()
//   }
// });


// //if in the DB show them else fetch
// app.get('/spacecraft/:name', (req, res) => {
//   let spacecraft = req.params.name;
//   //if in database return else fetch it
//   knex
//     .select('*')
//     .from('pokemon')
//     .where('Name', spacecraft)
//     .then(data => {
//       if (data.length > 0) {
//         res.status(200).json(data)
//       } else {
//         axios
//           .get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
//           .then(response => {
//             let pokemon = response.data;
//             knex('spacecraft').insert({
//               Poke_Id: pokemon.id,
//               Name: pokemon.name,
//               Type: pokemon.types[0].type.name,
//               Base_Exp: pokemon.base_experience,
//               Height: pokemon.height,
//               Weight: pokemon.weight,
//               Picture: pokemon.sprites.front_default
//             }).then(() => {
//               res.status(200).send({
//                 Poke_Id: pokemon.id,
//                 Name: pokemon.name,
//                 Type: pokemon.types[0].type.name,
//                 Base_Exp: pokemon.base_experience,
//                 Height: pokemon.height,
//                 Weight: pokemon.weight,
//                 Picture: pokemon.sprites.front_default
//               });
//             })
//           })
//           .catch(err => {
//             res.status(404).json({
//               message: `The pokemon you are looking for could not be found. Please try again`
//             })
//           })
//       }
//     })
// })

// //checks for image, if not in DB fetches API and stores
// app.get('/api/:pokemon/img', (req, res) => {
//   let pokemon = req.params.pokemon;
//   //if in database return else fetch it
//   knex
//     .select('Picture')
//     .from('pokemon')
//     .where('Name', pokemon)
//     .then(data => {
//       if (data.length > 0) {
//         res.status(200).json(data)
//       } else {
//         axios
//           .get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
//           .then(response => {
//             let pokemon = response.data;
//             knex('pokemon').insert({
//               Poke_Id: pokemon.id,
//               Name: pokemon.name,
//               Type: pokemon.types[0].type.name,
//               Base_Exp: pokemon.base_experience,
//               Height: pokemon.height,
//               Weight: pokemon.weight,
//               Picture: pokemon.sprites.front_default
//             }).then(() => {
//               res.status(200).send({
//                 Poke_Id: pokemon.id,
//                 Name: pokemon.name,
//                 Type: pokemon.types[0].type.name,
//                 Base_Exp: pokemon.base_experience,
//                 Height: pokemon.height,
//                 Weight: pokemon.weight,
//                 Picture: pokemon.sprites.front_default
//               });
//             })
//           })
//           .catch(err => {
//             res.status(404).json({
//               message: `The pokemon you are looking for could not be found. Please try again`
//             })
//           })
//       }
//     })
// })






// app.listen(port, () => {
//   console.log(`Logos Rocket Backend Listening on port: ${port}`);
// });

module.exports = app;