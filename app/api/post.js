'use strict';

var post = {};

post.add = function (content, emotion, userId) {
  var Promise = require('bluebird');
  var Post = require('../models/post');
  
  return new Promise(function (resolve, reject) {
    var error,
      errorMessage;
    var validCharacters = new RegExp(/[coCO \!\?\.]+/g);

    // validation
    if (!content || !emotion) {
      resolve({ error: {
        message: 'It looks like we\'re missing some information. Could you check the form and try again?'
      }});
    } else if (content.length > 140) {
      resolve({ error: {
        message: 'Goodness, you have a lot to say! Let\'s take that one thought at a time. (140 characters)'
      }});
    } else if (!validCharacters.test(content)) {
      resolve({ error: {
        message: 'Please stick to cooing until we provide proper internationalization. We apologize for the inconvenience to our international bretheren.'
      }});
    } else {
      Post.add(content, emotion, userId).then(function (rows) {
        // pass, user created
        resolve({ id: rows[0] });
      }).catch(function (error) {
        // failed, db error
        reject(error);
      });;
    }
  });
};

post.getRecent = function (startingPostId) {
  var Post = require('../models/post');
  var numPosts = 40;
  
  return Post.getTopRecentPosts(numPosts, startingPostId);
};

module.exports = post;
