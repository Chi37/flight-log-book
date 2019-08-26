const express = require('express');
const router = express.Router();
const passport = require('passport');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.redirect('/students');
});

router.get('/auth/google', passport.authenticate(
  'google',
  {scope: ['profile', 'email']}
));

router.get('/oauth2callback', passport.authenticate(
  'google',
 
  {
    successRedirect: '/students',
    failureRedirect: '/students'
  }
));


// OAuth logout route
router.get('/logout', function(req, res){
  req.logout(); //Note that the logout() method was automatically added to the request (req) object by Passport!
  res.redirect('/students');
});


module.exports = router;
