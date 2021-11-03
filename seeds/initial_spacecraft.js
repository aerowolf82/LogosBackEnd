
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('spacecraft').del()
    .then(function () {
      // Inserts seed entries
      return knex('spacecraft').insert([
        { id: 1, name: 'Mercury No.7', family_id: 1, description: 'Mercury No.7 is the Mercury capsule used for the Mercury-Redstone 3 - callsign \"Freedom 7\" - mission launched on May 5, 1961 and piloted by astronaut Alan Shepard.', image_url: 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launcher_images/redstone_image_20190207032627.jpeg', history: 'The Mercury spacecraft was the manned capsule used for suborbital and orbital launches during the Project Mercury, the first human spaceflight program of the United States, from 1958 through 1963.', launch_date: '1961-05-05T14:49:35Z', height: 3.3, diameter: 1.8, pad_id: 2 },
        { id: 2, name: 'rowValue1', family_id: , description: '', image_url: '', history: '', launch_date: , height: , diameter: , pad_id: },
        { id: 3, name: 'rowValue1', family_id: , description: '', image_url: '', history: '', launch_date: , height: , diameter: , pad_id: }
      ]);
    });
};
