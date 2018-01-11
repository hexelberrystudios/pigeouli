/**
 * KnexJS Singleton. It is important that Knex only be instantiated
 * once, because otherwise, it's possible to make too many DB connections.
 */
var db = {};
var dbInstance;

var init = function () {
  var sqlConfig = require('../config/sql-config');

  return require('knex')(sqlConfig);
};

db.get = function () {
  if (!dbInstance) {
    dbInstance = init();
  } else {
    return dbInstance;
  }
}

module.exports = db;