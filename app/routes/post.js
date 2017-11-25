module.exports = function (router, isLoggedIn, utilities) {
  // must be authenticated to logout
  router.get('/posts', function (req, res) {
    var Post = require('../models/post');
    
    Post.getAll().then(function (posts) {
      return res.status(200).json(posts);
    }).catch(function (err) {
      return next(err);
    });
  }, isLoggedIn);

  router.post('/post', function (req, res) {
    var Post = require('../models/post');

    Post.add(req.body.content, req.body.user_id).then(function () {
      return res.status(200).send();
    }).catch(function (err) {
      return next(err);
    });
  }, isLoggedIn);
};