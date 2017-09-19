var utilities = {};

utilities.getDB = function () {
  var sqlConfig = require('../config/sql-config');

  return require('knex')(sqlConfig);
};

utilities.errorHandler = function (err) {
  // @TODO: proper error loggging
  console.error(err);
  return console.error(err);
};

utilities.rand = function (min, max) {
  return Math.floor(Math.random() * ( max - min + 1 ) + min);
};

module.exports = utilities;