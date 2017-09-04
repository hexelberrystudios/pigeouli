var User = {};

User.add = function (username, email, passphrase) {
  var knex = require('../utilities').getDB();
  var date = require('../../shared/date');
  var now = date.sqlNow();

  return knex('users').insert({
    username: username,
    email: email,
    passphrase: user.generateHash(passphrase),
    created_at: now,
    updated_at: now
  });
};

User.generateHash = function (passphrase) {
  var bcrypt = require('bcrypt-nodejs');

  return bcrypt.hashSync(passphrase, bcrypt.genSaltSync(8), null);
};

User.isPassphraseValid = function (userPassphrase, givenPassphrase) {
  var bcrypt = require('bcrypt-nodejs');

  return bcrypt.compareSync(userPassphrase, givenPassphrase);
};

User.findById = function (id) {
  var knex = require('../utilities').getDB();

  return knex('users').select('id', 'username').where({
    id: id
  });
};

User.findByEmail = function (email) {
  var knex = require('../utilities').getDB();

  // returns a promise
  return knex('users').select('id', 'username').where({
    email: email
  });
};

module.exports = User;
