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

utilities.shuffleArray = function (array) {
  var temporaryValue,
    randomIndex;
  var currentIndex = array.length;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
};

utilities.generateToken = function () {
  var id,
    i;
  var buf = new Buffer(16);

  for (i = 0; i < buf.length; i++) {
      buf[i] = Math.floor(Math.random() * 256);
  }
  id = buf.toString('base64');

  return id;
};

module.exports = utilities;