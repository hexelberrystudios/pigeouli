module.exports = function (router, isLoggedIn, utilities) {
  // must be authenticated to logout
  router.get('/posts', function (req, res, next) {
    var Post = require('../models/post');
    
    Post.getAll().then(function (posts) {
      return res.status(200).json(posts);
    }).catch(function (err) {
      return next(err);
    });
  }, isLoggedIn);

  router.post('/post', function (req, res, next) {
    var post = require('../api/post');

    // req.user.id refers to the currently logged in user's id
    post.add(req.body.content, req.body.emotion, req.user.id).then(function (response) {
      return res.status(200).json(response);
    }).catch(function (err) {
      return next(err);
    });
  }, isLoggedIn);

  router.post('/recent-posts', function (req, res, next) {
    var post = require('../api/post');

    post.getRecent(req.body.startingPostId).then(function (posts) {
      return res.status(200).json(posts);
    }).catch(function (err) {
      return next(err);
    });
  }, isLoggedIn);
};