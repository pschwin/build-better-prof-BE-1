exports.up = function(knex) {
    return knex.schema
    .createTable('projects', projects => {
      projects.increments();
  
      projects
        .string('projectName', 128)
        .notNullable()
        .unique();
      projects.string('dueDate', 128).notNullable();
      projects.string('className', 128).notNullable();

    });
  };

  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('projects');
  };
