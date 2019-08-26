const express = require('express');
const router = express.Router();
const lessonCtrl = require('../controllers/lessons');

module.exports = router;


/* GET the new lesson page */
router.get('/new', lessonCtrl.new);

/*View lesson page */

router.get('/:id', lessonCtrl.show);

/*POST the lesson*/
router.post('/', lessonCtrl.create);

/*EDIT view the lesson*/
// router.get('/edit/:id', lessonCtrl.editView);

/*UPDATE view the lesson*/