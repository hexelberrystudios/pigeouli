module.exports = function (router, isLoggedIn, utilities) {
  var passport = require('../setup-passport');

  // init passport / authentication process
  router.use(passport.initialize());
  router.use(passport.session());

  /**
   * Logs the user in if everything looks good. Throw an error if not.
   * 
   * @param {*} res              Express var.
   * @param {*} next             Express var.
   * @param {*} exception        DB error.
   * @param {String} feedbackErr Feedback for the user. ex: Email is invalid.
   * @param {*} user             User info.
   */
  var login = function (req, res, next, exception, feedback, user) {
    if (exception) {
      utilities.errorHandler(exception); 
      return next(exception); // error 500
    } else if (feedback) {
      return res.status(200).json(feedback);
    } else if (!user) {
      utilities.errorHandler('409');
      return res.status(409).end();
    } else {
      req.login(user, function (err) {
        if (err) {
          utilities.errorHandler(err);
          return next(err);
        } else {
          return res.status(200).json({ user: user });
        }
      })
    }
  };

  // @TODO: 'get' routes for rendering the relevant pages
  router.route('/login')
    .post(function (req, res, next) {
      passport.authenticate('local-login', function (err, user, info) {
        return login(req, res, next, err, info, user);
      })(req, res, next);
    });

  router.route('/register')
    .post(function (req, res, next) {
      passport.authenticate('local-signup', function (err, user, info) {
        return login(req, res, next, err, info, user);
      })(req, res, next);
    });

  router.get('/logout', function (req, res) {
    req.logout();
    req.session.destroy();
    return res.redirect('/');
  });

  router.get('/new-username', function (req, res, next) {
    var user = require('../api/user');

    user.generateUsername().then(function (user) {
      return res.status(200).json(user);
    }).catch(function (err) {
      return next(err);
    });
  });

  router.post('/forgot', function (req, res, next) {
    var User = require('../models/user');
    console.log(req.body.email);

    User.startPassphraseReset(req.body.email).then(function () {
      return res.status(200).send();
    }).catch(function (err) {
      return next(err);
    });
  });

  router.post('/reset', function (req, res, next) {
    var user = require('../models/user');
    
    user.completePassphraseReset(req.body.token, req.body.passphrase).then(function () {
      return res.status(200).send();
    }).catch(function (err) {
      return next(err);
    });
  });
};