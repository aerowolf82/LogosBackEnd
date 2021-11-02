
exports.up = function (knex) {
  //Spacecraft Table
  return knex.schema.createTable('family', table => {
    table.increments('id'); // Add auto incrementing PK column
    table.string('name').notNullable();

  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('family');
};
