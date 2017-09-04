'use strict';

var express = require('express');
var serveStatic = require('serve-static');
var app = express();
var bodyParser = require('body-parser');
var setupSession = require('setup-session');
var router = require('./app/routes');

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(serveStatic('dist'));
setupSession(app);

// routes
app.use('/', router);

app.listen(3000, function () {
  console.log('listening...');
});
