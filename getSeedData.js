const { json } = require('express');
const fetch = require('node-fetch');
const knex = require('knex')(require('./knexfile.js')['development']);


// async function getSpaceCraft(craftId) {
//   let res = await fetch(`https://lldev.thespacedevs.com/2.2.0/spacecraft/${craftId}`); 
//   let data = await res.json();
//   return data;
// }

async function getPads(padId) {
  let res = await fetch(`https://lldev.thespacedevs.com/2.2.0/pad/${padId}`); 
  let data = await res.json();
  return data;
}

/* ****************************************************************************************************** */
/* ***********************                   GET PAD DATA                   ***************************** */
/* ****************************************************************************************************** */

async function getData() {
  let insertPads = [];
  let craftPads = [];
  for(let i =100;i<200;i++){
    craftPads[i-1]= await getPads(i)
    console.log(`on Pad ${i}`)
  }
  
  for(let j=99;j<craftPads.length;j++) {
    console.log(j)
    insertPads[j]={
        id: craftPads[j]?.id,
        pad_name: craftPads[j]?.name,
        pad_location: craftPads[j]?.location?.name,
        latitude: craftPads[j]?.latitude,
        longitude: craftPads[j]?.longitude,
        map_image: craftPads[j]?.map_image
    }
  };
    
  console.log(insertPads)
}


/* ****************************************************************************************************** */
/* ***********************                  GET CRAFT DATA                  ***************************** */
/* ****************************************************************************************************** */


// async function getData() {
//   let insertCraft = [];
//   let craftData = [];
//   for(let i =530;i<5;i++){
//     craftData[i-1]= await getPads(i)
//     console.log(`on craft ${i}`)
//   }
  
//   for(let j=529;j<craftData.length;j++) {
//     console.log(j)
//     insertCraft[j]={
//         id: craftData[j]?.id,
//         name: craftData[j]?.name,
//         family_id: craftData[j]?.spacecraft_config?.name,
//         description: craftData[j]?.description,
//         image_url: craftData[j]?.spacecraft_config?.image_url,
//         history: craftData[j]?.spacecraft_config?.history,
//         launch_date: craftData[j]?.flights[0]?.launch?.window_start,
//         height: craftData[j]?.spacecraft_config?.height,
//         diameter: craftData[j]?.spacecraft_config?.diameter,
//         pad_id: craftData[j]?.flights[0]?.launch?.pad?.id
//     }
//   };
    
//   console.log(insertCraft)
// }
/*

  knex('pokedata').insert([
    {
      pad_name: padData[0].name
      pad_location: padData[0].location.name,
      latitude: padData[0].latitude,
      longitude: padData[0].longitude
    }
  ])
  .then(() => {
  });

*/


getData();