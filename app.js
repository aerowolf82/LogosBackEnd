// const fs = require("fs")
const express = require('express')
const morgan = require('morgan');
const app = express();
const knex = require('knex')(require('./knexfile.js')[process.env.NODE_ENV || 'development']);
const axios = require('axios');
const asyncHandler = require('express-async-handler')

const port = process.env.port || 3001;

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

/*
endpoints
/spacecraft
/spacecraft/:name
/pad
/pad/:name
*/




// //All Pokemon in the DB's name
// app.get('/api/pokemon', function (req, res) {
//   knex
//     .select('Name')
//     .from('pokemon')
//     .then(data => res.status(200).json(data))
//     .catch(err =>
//       res.status(404).json({
//         message:
//           'The data you are looking for could not be found. Please try again'
//       })
//     );
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






app.listen(port, () => {
  console.log(`Logos Rocket Backend Listening on port: ${port}`);
});