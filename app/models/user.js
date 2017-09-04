var user = {};

user.register = function (username, email, passphrase, callback) {
  // look for existing user with the given email
  user.findByEmail(email).then(function (rows) {
    // failed, account already exists
    if (rows.length !== 0) {
      callback(null, 'Email already exists.');
    } else {
      // failed, invalid data
      if (!username || !email) {
        callback(null, 'Parameters are missing. Please fill out the form.');
      } else if (email.indexOf('@') === -1 || email.length >= 255) {
        callback(null, 'Email is invalid.');
      } else {
        // pass, add user
        user.add(username, email, passphrase).then(function (rows) {
          // pass, user created
          callback(rows[0]);
        }).catch(function (err) {
          // failed, db error
          callback(null, err);
        });
      }
    }
  }).catch(function (error) {
    // failed, db error
    callback(null, error);
  });
};

user.add = function (username, email, passphrase) {
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

user.generateHash = function (passphrase) {
  var bcrypt = require('bcrypt-nodejs');

  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

user.isPassphraseValid = function (password) {
  var bcrypt = require('bcrypt-nodejs');

  return bcrypt.compareSync(password, this.password);
};

user.findById = function (id) {
  var knex = require('../utilities').getDB();

  return knex('users').select('id', 'username').where({
    id: id
  });
};

user.findByEmail = function (email) {
  var knex = require('../utilities').getDB();

  // returns a promise
  return knex('users').select('id', 'username').where({
    email: email
  });
};

module.exports = user;
