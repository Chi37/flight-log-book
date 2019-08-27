const express = require('express');
const router = express.Router();
const lessonCtrl = require('../controllers/lessons');

module.exports = router;


/* GET the new lesson page */
router.get('/new', lessonCtrl.new);

/*EDIT view the lesson*/
router.get('/:id/edit', lessonCtrl.editView);

/*View lesson page */
router.get('/:id', lessonCtrl.show);

/*POST the lesson*/
router.post('/', lessonCtrl.create);



/*UPDATE view the lesson*/
router.put('/:id', lessonCtrl.update);