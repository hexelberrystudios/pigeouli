'use strict';

var express = require('express');
var serveStatic = require('serve-static');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(serveStatic('dist'));

// routes
app.get('/', function (req, res) {
  res.sendFile('dist/index.html');
});

app.listen(3000, function () {
  console.log('listening...');
});
