const db = require('../data/dbConfig');
const mappers = require('../mapper/mapper');

module.exports = {
  add,
  find,
  findBy,
  findById,
  remove,
  update,
  get,
  insert,
  remove
};

function find() {
  return db('projects').select('id','projectName', 'dueDate', 'className');
}

function findBy(filter) {
  return db('projects').where(filter);
}

async function add(project) {
  const [id] = await db('projects').insert(project);

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

function get(id) {
    let query = db('projects');

    if (id) {
      return query
        .where('id', id)
        .first()
        .then(project => mappers.projectsToBody(project));
    }

    return query.then(projects => {
      return projects.map(project => mappers.projectsToBody(project));
    });
  }
function insert(projects) {
    return db('projects')
      .insert(projects)
      .then(([id]) => this.get(id));
  }
