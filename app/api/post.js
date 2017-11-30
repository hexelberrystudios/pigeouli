'use strict';

var post = {};

post.add = function (content, userId) {
  var Promise = require('bluebird');
  var Post = require('../models/post');
  
  return new Promise(function (resolve, reject) {
    var error,
      errorMessage;
    // validation
    if (content.length > 140) {
      resolve({ error: {
        message: 'Goodness, you have a lot to say! Let\'s take that one thought at a time. (140 characters)'
      }});
    } else {
      Post.add(content, userId).then(function (rows) {
        // pass, user created
        resolve({ id: rows[0] });
      }).catch(function (error) {
        // failed, db error
        reject(error);
      });;
    }
  });
};

module.exports = post;
