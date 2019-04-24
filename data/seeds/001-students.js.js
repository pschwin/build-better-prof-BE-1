
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('students').del()
    .then(function () {
      // Inserts seed entries
      return knex('students').insert([
        {name: 'Student 1'},
        {name: 'Student 2'},
        {name: 'Student 3'},
        {name: 'Student 4'},
        {name: 'Student 5'},
      ]);
    });
};
