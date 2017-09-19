'use strict';

var user = {};

user.register = function (username, email, passphrase, callback) {
  var User = require('../models/user');

  // look for existing user with the given email
  User.findByEmail(email).then(function (rows) {
    // failed, account already exists
    if (rows.length !== 0) {
      callback(null, { email: 'Email already exists.' });
    } else {
      // failed, invalid data
      if (!username || !email) {
        callback(null, { message: 'Parameters are missing. Please fill out the form.' });
      } else if (email.indexOf('@') === -1 || email.length >= 255) {
        callback(null, { email: 'Email is invalid.' });
      } else {
        // pass, add user
        User.add(username, email, passphrase).then(function (rows) {
          // pass, user created
          callback(rows[0]);
        }).catch(function (err) {
          // failed, db error
          callback(null, null, err);
        });
      }
    }
  }).catch(function (error) {
    // failed, db error
    callback(null, null, error);
  });
};

user.generateUsername = function () {
  var User = rqeuire('../models/user');
  var usernameGenerator = require('../username-generator');
  
  // @TODO: use proper bluebird promises
  // keep trying to generate unique usernames until one that hasn't
  // been used has been found
  var getUniqueUsername = function () {
    var username = usernameGenerator.generate();

    User.findByUsername(username).then(function (rows) {
      if (rows.length) {
        getUniqueUsername();
      } else {
        callback(rows[0]);
      }
    });
  };

  getUniqueUsername();
};

module.exports = user;