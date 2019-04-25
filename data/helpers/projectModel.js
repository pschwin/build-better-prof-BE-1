const db = require('../dbConfig.js');
const mappers = require('./mappers');

module.exports = {
  get,
  insert,
  remove,
  getProjectActions
}
function get(id) {
  let query = db('Project as p');

  if (id) {
    query.where('p.id', id).first();

    const promises = [query, this.getProjectActions(id)]; // [ projects, actions ]

    return Promise.all(promises).then(function(results) {
      let [project, reminder] = results;
      project.reminders = reminder;

      return mappers.projectToBody(project);
    });
  }

  return query.then(projects => {
    return projects.map(project => mappers.projectToBody(project));
  });
}

function getProjectActions(projectId) {
    return db('reminder')
      .where('project_id', projectId)
      .then(reminders => reminders.map(reminder => mappers.projectToBody(reminder)));
  }

function insert(project) {
    return db('project')
      .insert(project)
      .then(([id]) => this.get(id));
  }
function remove(id) {
    return db('project')
      .where('id', id)
      .del();
  }