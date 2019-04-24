const db = require('../data/dbConfig');

module.exports = {
  add,
  find,
  findBy,
  findById,
  remove,
  update,
  insert
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

  function get(id) {
    let query = db('project as p');

    if (id) {
      query.where('p.id', id).first();

      const promises = [query, this.getStudentsActions(id)]; // [ projects, actions ]

      return Promise.all(promises).then(function(results) {
        let [students, projects] = results;
        students.projects = projects;

        return mappers.projectToBody(students);
      });
    }

    return query.then(students => {
      return students.map(students => mappers.studentsToBody(students));
    });
  }
function getStudentsActions(studentId) {
    return db('action')
      .where('students_id', studenttId)
      .then(students => students.map(students => mapper.projectsToBody(projects)));
  }
function insert(projects) {
    return db('projects')
      .insert(project)
      .then(([id]) => this.get(id));
  }

