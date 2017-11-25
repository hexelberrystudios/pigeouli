'use strict';

var Post = {};

Post.getAll = function () {
  var knex = require('../utilities').getDB();
  
  return knex('posts').select('posts.id', 'posts.content', 'posts.user_id', 'users.username')
    .innerJoin('users', 'users.id', 'posts.user_id')
    .where({ 'posts.active': 1,
             'users.active': 1 });
};

Post.add = function (content, userId) {
  var knex = require('../utilities').getDB();
  var dateUtilities = require('../../shared/date');
  var now = dateUtilities.sqlNow();

  return knex('posts').insert({
    content: content,
    user_id: userId,
    created_at: now,
    updated_at: now
  })
};

module.exports = Post;
