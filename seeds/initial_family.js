
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('family').del()
    .then(function () {
      // Inserts seed entries
      return knex('family').insert([
        { name: 'Mercury' },
        { name: 'Soyuz' },
        { name: 'Gemini' }
      ]);
    });
};
