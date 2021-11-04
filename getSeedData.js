const { json } = require('express');
const fetch = require('node-fetch');
const knex = require('knex')(require('./knexfile.js')['development']);


async function getSpaceCraft(craftId) {
  let res = await fetch(`https://lldev.thespacedevs.com/2.2.0/spacecraft/${craftId}`); 
  let data = await res.json();
  return data;
}

// async function getPads(padId) {
//   let res = await fetch(`https://lldev.thespacedevs.com/2.2.0/pad/${padId}`); 
//   let data = await res.json();
//   return data;
// }



async function getData() {
  let insertCraft = [];
  let craftData = [];
  for(let i =530;i<5;i++){
    craftData[i-1]= await getSpaceCraft(i)
    console.log(`on craft ${i}`)
  }
  
  for(let j=529;j<craftData.length;j++) {
    console.log(j)
    insertCraft[j]={
        id: craftData[j]?.id,
        name: craftData[j]?.name,
        family_id: craftData[j]?.spacecraft_config?.name,
        description: craftData[j]?.description,
        image_url: craftData[j]?.spacecraft_config?.image_url,
        history: craftData[j]?.spacecraft_config?.history,
        launch_date: craftData[j]?.flights[0]?.launch?.window_start,
        height: craftData[j]?.spacecraft_config?.height,
        diameter: craftData[j]?.spacecraft_config?.diameter,
        pad_id: craftData[j]?.flights[0]?.launch?.pad?.id
    }
  };
    
  console.log(insertCraft)
}
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

  /* 
  actual call : https://lldev.thespacedevs.com/2.2.0/spacecraft/i

  SPACECRAFT TABLE
  name: data.name
  family_id: IF STATEMENT
              IF data.spacecraft_config.name is in database
                THEN family_id = id of family name
              ELSE
                ADD family name to family table
                THEN family_id = id of family name
  description: data.description
  image_url: data.spacecraft_config.image_url,
  history: data.spacecraft_config.history,
  launch_date: data.flights[0].launch.window_start,
  height: data.spacecraft_config.height,
  diameter: data.spacecraft_config.diameter,
  pad_id: IF STATEMENT
              IF data.flights[0].launch.pad.name is in database
                THEN pad_id = id of pad name
              ELSE
                ADD correct data to pad table
                      pad_name: data.flights[0].launch.pad.name
                      pad_location: data.flights[0].launch.pad.location.name,
                      latitude: data.flights[0].launch.pad.latitude,
                      longitude: data.flights[0].launch.pad.longitude
                THEN pad_id = id of pad name 




  FAMILY TABLE  
    table.increments('id'); // Add auto incrementing PK column
    table.string('name').notNullable();
  
  
  PAD TABLE
    table.increments('id'); // Add auto incrementing PK column
    pad_name: data.name
    pad_location: data.location.name,
    latitude: data.latitude,
    longitude: data.longitude
















  Craft
  {
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

  Pad Example
  { 
    id: 1,
    pad_name: 'Space Launch Complex 3W',
    pad_location: 'Vandenberg SFB, CA, USA',
    latitude: 34.644,
    longitude: -120.593
  },

 */


