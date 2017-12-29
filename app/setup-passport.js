var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  var User = require('./models/user');

  User.findById(id).then(function (rows) {
    done(null, rows[0]);
    // communicate that we are not expecting a return value
    return null;
  }).catch(function (error) {
    require('./utilities').errorHandler(error);
    done(error);
    // communicate that we are not expecting a return value
    return null;
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
        done(result.exception);
      } else if (result.error) {
        // user error
        done(null, false, result);
      } else {
        // success
        done(null, result);
      }

      return null;
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
      done(null, false, { error: { email: 'User not found.' } });
    } else if (!User.isPassphraseValid(rows[0].passphrase, passphrase)) {
      done(null, false, { error: { passphrase: 'Invalid passphrase.' } });
    } else {
      done(null, rows[0]);
    }

    return null;
  }).catch(function (error) {
    return require('./utilities').errorHandler(error);
  });
}));

module.exports = passport;
