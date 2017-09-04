var utilities = {};

utilities.getDB = function () {
  var sqlConfig = require('../config/sql-config');
  
  return require('knex')(sqlConfig);
};

utilities.errorHandler = function (err) {
  // @TODO: proper error loggging
  console.error(err);
};

module.exports = utilities;