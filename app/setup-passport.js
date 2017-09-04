var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  var User = require('./models/user');

  User.findById(id).then(function (rows) {
    return done(null, rows[0]);
  }).catch(function (error) {
    return require('./utilities').errorHandler(error);
  });;
});

// setup register path/functionality
passport.use('local-signup', new LocalStrategy({
  usernameField: 'email',
  passwordField: 'passphrase',
  passReqToCallback: true
}, function (req, email, passphrase, done) {
  process.nextTick(function () {
    var User = require('./models/user');
    var callback = function (user, err) {
      if (err) {
        return done(null, false, { errMsg: err });
      } else {
        return done(null, user);
      }
    };

    User.register(req.body.username, email, passphrase, callback);
  });
}
));

// setup login path/functionality
passport.use('local-login', new LocalStrategy({
  usernameField: 'email',
  passwordField: 'passphrase',
  passReqToCallback: true
}, function (req, email, passphrase, done) {
  var User = require('./models/user');

  User.findByEmail(email).then(function (rows) {
    if (rows.length !== 1) {
      return done(null, false, { errMsg: 'User not found.' });
    } else if (!User.isPassphraseValid(rows[0].passphrase, passphrase)) {
      return done(null, false, { errMsg: 'Invalid passphrase.' });
    } else {
      return done(null, rows[0]);
    }
  }).catch(function (error) {
    return require('./utilities').errorHandler(error);
  });
}));

module.exports = passport;