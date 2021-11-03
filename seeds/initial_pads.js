
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('pads').del()
    .then(function () {
      // Inserts seed entries
      return knex('pads').insert([
        { id: 1, pad_name: 'Space Launch Complex 3W', pad_location: 'Vandenberg SFB, CA, USA', latitude: 34.644, longitude: -120.593 },
        { id: 2, pad_name: 'Cape Canaveral Air Force Station Launch Complex 5', pad_location: 'Cape Canaveral, FL USA', latitude: 28.439444, longitude: -80.573333 },
        { id: 3, pad_name: 'Baikonur Cosmodrome, Republic of Kazakhstan', pad_location: 'Baikonur Cosmodrome, Republic of Kazakhstan', latitude: 45.92, longitude: 63.342 },
        { id: 4, pad_name: 'Space Launch Complex 19', pad_location: 'Cape Canaveral, FL, USA', latitude: 228.506898, longitude: -80.554169 }
      ]);
    });
};