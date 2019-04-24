module.exports = {
    intToBoolean,
    booleanToint,
    studentsToBody,
    projectsToBody,
  };
  
  function intToBoolean(int) {
    return int === 1 ? true : false;
  }
  
  function booleanToint(bool) {
    return bool === true ? 1 : 0;
  }
  
  function studentsToBody(students) {
    const result = {
      ...students,
      completed: intToBoolean(students.completed),
    };
  
    if (students.projects) {
      result.projects = students.projects.map(project => ({
        ...projects,
        completed: intToBoolean(project.completed),
      }));
    }
  
    return result;
  }
  
  function projectsToBody(project) {
    return {
      ...projects,
      completed: intToBoolean(project.completed),
    };
  }
  