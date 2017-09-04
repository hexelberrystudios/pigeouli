'use strict';

let user = require('./api/user');

function restrict (req, res, next) {
  if (req.session.user) {
    next();
  } else {
    req.session.error = 'Access denied!';
    req.flash('error', ['Access denied!']);
    res.redirect('/');
  }
}

// auth example
// app.post('/api/post', restrict, thread.get);
// NOTE: Authorization should only be required for actions, such as replying, posting, creating new threads, etc.

module.exports = function (app) {
  app.post('/api/user/login', user.login);
  app.get('/api/user/logout', user.logout);
  app.post('/api/user/register', user.register);
};
