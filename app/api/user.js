'use strict';

var user = {};

user.login = function login (req, res, next) {
  var sqlConfig = require('../../config/sql-config');
  var knex = require('knex')(sqlConfig);
  
  if (req.body.username && req.body.email) {
    knex('users').select('id', 'username', 'status', 'restoreDate').where({
      username: req.body.username,
      email: req.body.email
    }).then(function (rows) {
        if (rows.length === 1) {
          req.session.regenerate(function () {
            req.session.user = rows[0];
            res.redirect('/recent');
          });
        } else if (rows.length > 1) {
          req.flash('error', ['There is an issue with your account. Please contact support at hexelberrystudios@gmail.com']);
          res.redirect('/');
        } else {
          req.flash('error', ['User or email is incorrect.']);
          res.redirect('/');
        }
    }).catch(function (error) {
      console.log(error);
      req.flash('error', [error.code]);
      res.redirect('/');
    });
  } else {
    req.flash('error', ['Parameters are missing. Please complete the form.']);
    res.redirect('/');
  }
};

user.logout = function logout (req, res, next) {
  req.session.destroy(function(){
    res.redirect('/');
  });
};

user.register = function register (req, res, next) {
  var passport = require()
};

module.exports = user;