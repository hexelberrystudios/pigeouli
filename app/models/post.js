'use strict';

var Post = {};

Post.getAll = function () {
  var knex = require('../db').get();
  
  return knex('posts').select('posts.id', 'posts.content', 'posts.emotion', 'posts.user_id', 'users.username')
    .innerJoin('users', 'users.id', 'posts.user_id')
    .where({ 'posts.active': 1,
             'users.active': 1 });
};

Post.add = function (content, emotion, userId) {
  var knex = require('../db').get();
  var dateUtilities = require('../../shared/date');
  var now = dateUtilities.sqlNow();

  return knex('posts').insert({
    content: content,
    emotion: emotion,
    user_id: userId,
    created_at: now,
    updated_at: now
  });
};

/**
 * Get posts in reverse chronological order.
 * 
 * @param {Number} numPosts {Optional} The number of posts to return at a time.
 * @param {Number} startingPostId {Optional} Get posts that were posted before this post id.
 *                                           By default, it starts with the most recent post. 
 *                                           Recency is defined by id number instead of datetime in case multiple posts have the same datetime.
 */
Post.getTopRecentPosts = function (numPosts, startingPostId) {
  var knex = require('../db').get();
  var query = knex('posts').select('posts.id', 'posts.content', 'posts.emotion', 'posts.user_id', 'users.username')
    .innerJoin('users', 'users.id', 'posts.user_id');
  
  if (numPosts) {
    query.limit(numPosts);
  }

  if (startingPostId) {
    query.where('posts.id', '<', startingPostId);
  }

  query.orderBy('posts.id', 'desc');

  return query;
};

module.exports = Post;
