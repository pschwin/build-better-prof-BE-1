exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('reminder').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('reminder').insert({remindDays: 5, project_id: 1, description:"Remember, you have to complete your project today!"}),
        knex('reminder').insert({remindDays: 2, project_id: 2, description:"Remember, you have to complete your project tomorrow!"}),
        knex('reminder').insert({remindDays: 1, project_id: 3, description:"Remember, you have to complete your project in 3 days!"}),
        
      ]);
    });
};
