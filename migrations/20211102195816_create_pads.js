
exports.up = function (knex) {
  //Spacecraft Table
  return knex.schema.createTable('pads', table => {
    table.increments('id'); // Add auto incrementing PK column
    table.string('pad_name');
    table.string('pad_location');
    table.float('latitude');
    table.float('longitude');

  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('pads');
};
