var passport = require('passport');

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  var user = require('./models/user');
  
  user.findById(id).then(function (rows) {
    done(null, rows[0]);
  }).catch(function (error) {
    require('./utilities').errorHandler(error);
  });;
});

passport.use('local-signup', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'passphrase',
    passReqToCallback: true
  }, function (req, email, passphrase, done) {
    process.nextTick(function () {
      var user = require('./models/user');
      var callback = function (user, err) {
        if (err) {
          return done(null, false, { errMsg: err });
        } else {
          return done(null, user);
        }
      };

      user.register(req.body.username, email, passphrase, callback);
    })
  }
));
