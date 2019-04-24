const db = require('../dbConfig.js');
const mappers = require('./mappers');

module.exports = {
  get,
  insert,
  remove
}
function get(id) {
    let query = db('project');

    if (id) {
      return query
        .where('id', id)
        .first()
        .then(project => mappers.projectToBody(project));
    }

    return query.then(projects => {
      return projects.map(project => mappers.projectToBody(project));
    });
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