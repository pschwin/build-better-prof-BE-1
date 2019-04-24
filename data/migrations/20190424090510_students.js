exports.up = function(knex) {
    return knex.schema
    .createTable('students', users => {
      users.increments();
  
      users
        .string('name', 128).notNullable()
      
    })
    .createTable('messages', tbl => {
        tbl.increments();
        tbl
          .string('sender')
          .notNullable()
          .index();
        tbl.text('text').notNullable();
        tbl.timestamps(true, true);
  
        tbl
          .integer('student_id')
          .unsigned()
          .references('id')
          .inTable('students')
          .onDelete('CASCADE')
          .onUpdate('CASCADE');
      });
    
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('students');
  };

