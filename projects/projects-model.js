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
  return db('projects').select('projectName', 'dueDate', 'className');
}

function findBy(filter) {
  return db('projects').where(filter);
}

async function add(user) {
  const [id] = await db('projects').insert(user);

  return findById(id);
}

function findById(id) {
  return db('projects')
    .where({ id })
    .first();
}

function remove(id) {
    return db('projects')
      .where({ id })
      .del();
  }
  
  function update(id, changes) {
    return db('projects')
      .where({ id })
      .update(changes, '*');
  }