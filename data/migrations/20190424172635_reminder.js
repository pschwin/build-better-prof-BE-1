exports.up = function(knex, Promise) {
    return knex.schema
      .createTable('reminder', (db) => {
        db.increments();
        db.integer('project_id').notNullable();
        db.integer('user_id').notNullable();
        db.integer('remindDays').notNullable();
        db.string('description', 128).notNullable();
        db.boolean('completed').defaultTo(false);
      });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('reminder');

};
