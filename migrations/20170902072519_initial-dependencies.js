exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.table('posts', function (table) {
      table.integer('userId').unsigned().notNullable().references('id').inTable('users');
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
      knex.schema.table('posts', function (table) {
        table.dropForeign('userId');
        table.dropColumn('userId');
      })
  ]);
};