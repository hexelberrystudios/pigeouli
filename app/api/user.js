'use strict';

var user = {};

user.register = function (username, email, passphrase, callback) {
  var User = require('../models/user');

  return new Promise(function (resolve, reject) {
    // look for existing user with the given email
    User.findByEmail(email).then(function (rows) {
      // failed, account already exists
      if (rows.length !== 0) {
        resolve({ error: { 
          email: 'Email already exists.'
        }});
      } else {
        // failed, invalid data
        if (!username || !email) {
          resolve({ error: {
            message: 'Parameters are missing. Please fill out the form.' }
          });
        } else if (email.indexOf('@') === -1 || email.length >= 255) {
          resolve({ error: { 
            email: 'Email is invalid.'
          }});
        } else {
          // pass, add user
          return User.add(username, email, passphrase);
        }
      }
    }).then(function (rows) {
        // pass, user created
        resolve({ id: rows[0] });
    }).catch(function (error) {
      // failed, db error
      resolve({ exception: error });
    });
  });
};

user.generateUsername = function () {
  var Promise = require('bluebird');
  var User = require('../models/user');
  var usernameGenerator = require('../username-generator');
  
  return new Promise(function (resolve, reject) {
    // keep trying to generate unique usernames until one that hasn't
    // been used has been found
    var getUniqueUsername = function () {
      var username = usernameGenerator.generate();
      
      User.findByUsername(username).then(function (rows) {
        if (rows.length) {
          getUniqueUsername();
        } else {
          resolve(username);
        }
      }).catch(function (err) {
        reject(err);
      });
    };

    getUniqueUsername();
  });
};

module.exports = user;
