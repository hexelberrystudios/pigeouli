var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

passport.serializeUser(function (user, done) {
  console.log('serializing');
  console.log(user);
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  var User = require('./models/user');

  console.log(id);
  User.findById(id).then(function (rows) {
    console.log(rows);
    return done(null, rows[0]);
  }).catch(function (error) {
    return require('./utilities').errorHandler(error);
  });
});

// setup register path/functionality
passport.use('local-signup', new LocalStrategy({
  usernameField: 'email',
  passwordField: 'passphrase',
  passReqToCallback: true
}, function (req, email, passphrase, done) {
  process.nextTick(function () {
    var User = require('./api/user');
    
    User.register(req.body.username, email, passphrase).then(function (result) {
      if (result.exception) {
        // DB error
        return done(result.exception);
      } else if (result.error) {
        // user error
        return done(null, false, result);
      } else {
        // success
        return done(null, result);
      }
    });
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
      return done(null, false, { message: 'User not found.' });
    } else if (!User.isPassphraseValid(rows[0].passphrase, passphrase)) {
      return done(null, false, { passphrase: 'Invalid passphrase.' });
    } else {
      return done(null, rows[0]);
    }
  }).catch(function (error) {
    return require('./utilities').errorHandler(error);
  });
}));

module.exports = passport;
