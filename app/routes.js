var express = require('express');
var passport = require('./setup-passport');
var utilities = require('./utilities');
var router = express.Router();

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  } else {
    res.redirect('/login');
  }
}

router.use(passport.initialize());
router.use(passport.session());

router.route('/register')
  .post(function (req, res, next) {
    passport.authenticate('local-signup', function (err, user, info) {
      if (err) {
        utilities.errorHandler(err);
        return next(err); // error 500
      } else if (!user) {
        return res.status(409);
      } else {
        req.login(user, function (err) {
          if (err) {
            utilities.errorHandler(err);
            return next(err);
          } else {
            return res.status(200);
          }
        })
      }
    })(req, res, next);
  })

module.exports = router;
