const db = require('../data/dbConfig');

module.exports = {
  add,
  find,
  findBy,
  findById,
  remove,
  update
};

function find() {
  return db('students').select('name');
}

function findBy(filter) {
  return db('students').where(filter);
}

async function add(user) {
  const [id] = await db('students').insert(user);

  return findById(id);
}

function findById(id) {
  return db('students')
    .where({ id })
    .first();
}

function remove(id) {
    return db('students')
      .where({ id })
      .del();
  }
  
  function update(id, changes) {
    return db('students')
      .where({ id })
      .update(changes, '*');
  }