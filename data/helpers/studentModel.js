const db = require('../dbConfig.js');
const mappers = require('./mappers');

module.exports = {
  get,
  getStudentActions,
  insert,
  remove
}
function get(id) {
    let query = db('Student as s');

    if (id) {
      query.where('s.id', id).first();

      const promises = [query, this.getStudentActions(id)]; // [ projects, actions ]

      return Promise.all(promises).then(function(results) {
        let [student, project] = results;
        student.projects = project;

        return mappers.studentToBody(student);
      });
    }

    return query.then(students => {
      return students.map(student => mappers.studentToBody(student));
    });
  }
function getStudentActions(studentId) {
    return db('project')
      .where('student_id', studentId)
      .then(projects => projects.map(project => mappers.studentToBody(project)));
  }
function insert(student) {
    return db('student')
      .insert(student)
      .then(([id]) => this.get(id));
  }
function remove(id) {
    return db('student')
      .where('id', id)
      .del();
  }
