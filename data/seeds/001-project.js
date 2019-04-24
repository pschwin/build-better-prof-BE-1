exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('project').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('project').insert({projectName: 'New Project 1', dueDate: "March 20, 2019", className: "History 101", student_id: 1 }),
        knex('project').insert({projectName: 'New Project 2', dueDate: "March 21, 2019", className: "Math 101", student_id: 2}),
        knex('project').insert({projectName: 'New Project 3', dueDate: "March 22, 2019", className: "Science 101", student_id: 3})
      ]);
    });
};



