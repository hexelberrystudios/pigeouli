module.exports = function (router, isLoggedIn, utilities) {
  var passport = require('../setup-passport');

  // init passport / authentication process
  router.use(passport.initialize());
  router.use(passport.session());

  // handle login
  var login = function (res, err, user, info) {
    if (err) {
      utilities.errorHandler(err);
      return next(err); // error 500
    } else if (!user) {
      console.log('409');
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
  };

  // @TODO: 'get' routes for rendering the relevant pages
  router.route('/login')
    .post(function (req, res, next) {
      passport.authenticate('local-login', function (err, user, info) {
        return login(res, err, user, info);
      })(req, res, next);
    });
  router.route('/register')
    .post(function (req, res, next) {
      passport.authenticate('local-signup', function (err, user, info) {
        return login(res, err, user, info);
      })(req, res, next);
    });
  router.get('/logout', function (req, res) {
    req.logout();
    req.session.destroy();
    return res.redirect('/');
  });
};