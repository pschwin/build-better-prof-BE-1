exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('student').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('student').insert({name: 'New Student 1'}),
        knex('student').insert({name: 'New Student 2'}),
        knex('student').insert({name: 'New Student 3'}),
        
      ]);
    });
};



