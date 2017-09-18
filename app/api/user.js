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

module.exports = user;