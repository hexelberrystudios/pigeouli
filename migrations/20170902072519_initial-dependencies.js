exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.table('posts', function (table) {
      table.integer('user_id').unsigned().notNullable().references('users.id');
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
      knex.schema.table('posts', function (table) {
        table.dropForeign('user_id');
        table.dropColumn('user_id');
      })
  ]);
};