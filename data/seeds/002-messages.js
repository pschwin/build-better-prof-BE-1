exports.seed = function(knex, Promise) {
  return knex('messages').insert([
    {
      sender: 'Student 1',
      text: 'Test',
      student_id: 1,
    },
    {
      sender: 'Student 2',
      text: 'Testing',
      student_id: 2,
    },
    {
      sender: 'Student 3',
      text: 'Testing a Test',
      student_id: 3,
    },
  ]);
}

