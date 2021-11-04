
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('family').del()
    .then(function () {
      // Inserts seed entries
      return knex('family').insert([
        { id: 1, name: 'Mercury' },
        { id: 2, name: 'Soyuz' },
        { id: 3, name: 'Gemini' },
        { id: 4, name: 'Vostok' },
        { id: 5, name: 'Voskhod' },
        { id: 6, name: 'Buran' },
        { id: 7, name: 'Orion' },
        { id: 8, name: 'Dragon' },
        { id: 9, name: 'Apollo' },
        { id: 10, name: 'Space Shuttle' },
        { id: 11, name: 'Automated Transfer Vehicle (ATV)' },
        { id: 12, name: 'Cygnus'},
        { id: 13, name: 'H-II Transfer Vehicle (HTV)'},
        { id: 14, name: 'Progress'},
        { id: 15, name: 'Blue Origin'},
        {id: 16, name: 'CST-100 Starliner'},
        {id: 17, name: 'Shenzhou'},
        {id: 18, name: 'North American X-15'},
        {id: 19, name:'Dream Chaser' },
        {id: 20, name:'Tianzhou' },
        {id: 21, name: 'Starship'},
        {id: 22, name: 'Virgin'},






        
      ]);
    });
};
