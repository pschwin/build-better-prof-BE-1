const db = require('../data/dbConfig');
const mappers = require('../data/helpers/mappers');

module.exports = {
  add,
  find,
  findBy,
  findById,
  getUserActions
};

function find() {
  return db('users').select('id', 'username');
}

function findBy(filter) {
  return db('users').where(filter);
}

async function add(user) {
  const [id] = await db('users').insert(user);
  return findById(id);
}

// function findById(id) {

//     return db('users')
//     .where({ id })
//   .first();
// }

function findById(id) {
  let query = db('users as u');

  if (id) {
    query.where('u.id', id).first();

    const promises = [query, this.getUserActions(id)]; // [ projects, actions ]

    return Promise.all(promises).then(function(results) {
      let [user, reminder] = results;
      user.reminders = reminder;

      return mappers.reminderToBody(reminder);
    });
  }

  return query.then(reminders => {
    return reminders.map(reminder => mappers.reminderToBody(reminder));
  });
}

function getUserActions(userId) {
    return db('reminder')
      .where('user_id', userId)
      .then(reminders => reminders.map(reminder => mappers.reminderToBody(reminder)));
  }


  
  
