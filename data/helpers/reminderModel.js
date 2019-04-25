const db = require('../dbConfig.js');
const mappers = require('./mappers');

module.exports = {
  get,
  insert,
  remove
}
function get(id) {
    let query = db('reminder');

    if (id) {
      return query
        .where('id', id)
        .first()
        .then(reminder => mappers.reminderToBody(reminder));
    }

    return query.then(reminders => {
      return reminders.map(reminder => mappers.reminderToBody(reminder));
    });
  }
function insert(reminder) {
    return db('reminder')
      .insert(reminder)
      .then(([id]) => this.get(id));
  }
function remove(id) {
    return db('reminder')
      .where('id', id)
      .del();
  }