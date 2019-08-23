const express = require('express');
const router = express.Router();
const passport = require('passport');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/auth/google', passport.authenticate(
  {scope: ['profile', 'email']}

))

router.get('/oauthcallback', passport.authenticate(
  'google',
 
  {
    successRedirect: '/students',
    failureRedirect: '/students'
  }
));




module.exports = router;
