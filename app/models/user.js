var User = {};

User.add = function (username, email, passphrase) {
  var knex = require('../db').get();
  var dateUtilities = require('../../shared/date');
  var now = dateUtilities.sqlNow();

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

  return bcrypt.compareSync(givenPassphrase, userPassphrase);
};

User.find = function (options) {
  var knex = require('../db').get();
  
  return knex('users').select('id', 'username', 'email', 'passphrase').where(options);
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

User.startPassphraseReset = function (email) {
  var formattedDate;
  var knex = require('../db').get();
  var tokenExpireDate = new Date();
  var dateUtilities = require('../../shared/date');
  var utilities = require('../utilities');
  var currentDate = new Date();
  var dateDiff = currentDate.getTime() + (14 * 24 * 60 * 60 * 1000); // two weeks from now
  var now = dateUtilities.sqlNow();
  
  tokenExpireDate.setTime(dateDiff);
  formattedDate = dateUtilities.sqlDate(tokenExpireDate);

  return knex('users')
    .where({ email: email })
    .update({
      token: utilities.generateToken(),
      token_expire_date: formattedDate,
      updated_at: now
    });
};

User.completePassphraseReset = function (token, passphrase) {
  var knex = require('../db').get();
  var dateUtilities = require('../../shared/date');
  var now = dateUtilities.sqlNow();

  return knex('users')
    .where({ token: token })
    .update({
      passphrase: User.generateHash(passphrase),
      token: null,
      token_expire_date: null,
      updated_at: now
    });
};

module.exports = User;
