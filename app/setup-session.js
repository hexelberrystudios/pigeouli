// Given an express instance, set up the foundation for managing sessions

module.exports = function (app) {
  var env;

  // fill in process.env variables
  if (!process.env.SQL_HOST) {
    env = require('../config/env');
  }

  var sqlConfig = require('../config/sql-config');
  var flash = require('connect-flash');
  var knex = require('knex')(sqlConfig);
  var session = require('express-session');
  var KnexSessionStore = require('connect-session-knex')(session);
  var sessionStore = new KnexSessionStore({ tablename: 'sessions', knex: knex });
  // refer to https://github.com/expressjs/session for documentation
  var sessionConfig = {
    resave: true,
    saveUninitialized: false,
    secret: 'gravelervoltorbmewtwocharmander',
    store: sessionStore,
    cookie: {
      secure: false,
      expires: 3600000 * 24 * 12
    }
  };

  if (app.get('env') === 'production') {
    app.set('trust proxy', 1); // trust first proxy
    // requires HTTPS
    sessionConfig.cookie.secure = true; // serve secure cookies
  }

  app.use(session(sessionConfig));
  app.use(flash());
};
