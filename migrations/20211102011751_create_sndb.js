
exports.up = function (knex) {

  //Spacecraft Table
  return knex.schema.createTable('spacecraft', table => {
    table.increments('id'); // Add auto incrementing PK column
    table.string('name').notNullable();
    table.integer('family_id');
    table.text('description');
    table.string('image_url');
    table.text('history');
    table.datetime('launch_date'); // Rt. Type?
    table.float('height');
    table.float('diameter');
    table.integer('pad_id');
    table.foreign('pad_id').references('pads.id');
    table.foreign(`family_id`).references(`family.id`);
  });
};



exports.down = function (knex) {
  return knex.schema.dropTableIfExists('spacecraft');
};

// how to create databases - run the following commands in this order. if you do create_sndb first it will fail because of relations
// npx knex migrate:up 20211102195816_create_pads.js
// npx knex migrate:up 20211102195745_create_family.js
// npx knex migrate:up 20211102011751_create_sndb.js