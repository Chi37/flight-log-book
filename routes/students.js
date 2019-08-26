const express = require('express');
const router = express.Router();
var studentsCtrl = require('../controllers/students');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// GET /students
router.get('/students', studentsCtrl.index);



module.exports = router;
