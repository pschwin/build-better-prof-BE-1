exports.up = function(knex, Promise) {
    return knex.schema
      .createTable('project', (db) => {
        db.increments();
        db.integer('student_id').notNullable();
        db.string('projectName', 128).notNullable();
        db.string('dueDate').notNullable();
        db.string('className').notNullable();
        db.boolean('completed').defaultTo(false);
      });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('project');

};
