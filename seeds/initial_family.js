
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('family').del()
    .then(function () {
      // Inserts seed entries
      return knex('family').insert([
        { id: 1, name: 'Mercury' },
        { id: 2, name: 'Soyuz' },
        { id: 3, name: 'Gemini' }
      ]);
    });
};
