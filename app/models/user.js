var User = {};

User.add = function (username, email, passphrase) {
  var knex = require('../utilities').getDB();
  var date = require('../../shared/date');
  var now = date.sqlNow();

  return knex('users').insert({
    username: username,
    email: email,
    passphrase: User.generateHash(passphrase),
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

User.find = function (options) {
  var knex = require('../utilities').getDB();
  
  return knex('users').select('id', 'username', 'email').where(options);
};

User.findById = function (id) {
  return User.find({ id: id });
};

User.findByEmail = function (email) {
  return User.find({ email: email });
};

User.findByUsername = function (username) {
  return User.find({ username: username });
};

module.exports = User;
