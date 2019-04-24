module.exports = {
    intToBoolean,
    booleanToint,
    projectToBody,
    studentToBody,
  };
  
  function intToBoolean(int) {
    return int === 1 ? true : false;
  }
  
  function booleanToint(bool) {
    return bool === true ? 1 : 0;
  }
  
  function studentToBody(student) {
    const result = {
      ...student,
      completed: intToBoolean(student.completed),
    };
  
    if (student.projects) {
      result.projects = student.projects.map(student => ({
        ...student,
        completed: intToBoolean(student.completed),
      }));
    }
  
    return result;
  }
  
  function projectToBody(project) {
    return {
      ...project,
      completed: intToBoolean(project.completed),
    };
  }
  