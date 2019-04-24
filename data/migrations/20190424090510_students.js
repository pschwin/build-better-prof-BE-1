exports.up = function(knex) {
    return knex.schema
    .createTable('students', users => {
      users.increments();
  
      users
        .string('name', 128).notNullable()
      
    })
    
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('students');
  };

