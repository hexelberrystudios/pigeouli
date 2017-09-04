var express = require('express');
var utilities = require('./utilities');
var user = require('./routes/user'); // manages all user-related routes, such as login and settings
var router = express.Router();

// authenticate check
function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  } else {
    res.redirect('/login');
  }
}

// default/root route
router.get('/', function (req, res) {
  res.sendFile('dist/index.html');
});

// user related routes
user(router, isLoggedIn, utilities);

module.exports = router;
