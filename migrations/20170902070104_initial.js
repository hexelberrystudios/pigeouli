// table.boolean('active'); // set to 0 when entry should be deleted, but not really deleted

exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('users', function (table) {
      table.increments();
      table.string('username', 254).notNullable();
      table.string('email', 254).notNullable();
      table.string('passphrase', 254).notNullable();
      table.boolean('is_admin').notNullable().defaultTo(false);
      table.string('token', 254).nullable();
      table.dateTime('token_expire_date').nullable();
      table.boolean('active').notNullable().defaultTo(true);
      table.timestamps();
    }),
    
    knex.schema.createTable('posts', function (table) {
      table.increments();
      table.text('content').notNullable();
      table.string('emotion', 60).notNullable();
      // user id
      table.boolean('active').notNullable().defaultTo(true);
      table.timestamps();
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('users'),
    knex.schema.dropTable('posts')
  ]);
};