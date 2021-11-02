
exports.up = function(knex) {
  return knex.schema.createTable('spacecraft', table => {
        table.increments('id'); // Add auto incrementing PK column
        table.string('name').notNullable();  
        table.string('description');
        table.string('family');
        table.string('image_url');
        table.string('launch_vehicle');
        table.string('history');
        table.date('launch_date'); // Rt. Type?
        table.float('height');
        table.float('diameter');
        table.string('pad_name');
        table.string('pad_location');
});
};


exports.down = function(knex) {
    return knex.schema.dropTableIfExists('spacecraft');
};