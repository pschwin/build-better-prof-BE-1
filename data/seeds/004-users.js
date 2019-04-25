exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('users').insert({username: 'test', password: 'password', email:"test@gmail.com"}),
        knex('users').insert({username: 'test2', password: 'password2', email:"test2@gmail.com"}),
        knex('users').insert({username: 'test3', password: 'password3', email:"test3@gmail.com"}),
        
        
      ]);
    });
};