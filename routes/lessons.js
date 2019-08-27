const express = require('express');
const router = express.Router();
const lessonCtrl = require('../controllers/lessons');

module.exports = router;

/* GET the new lesson page */
router.get('/new', lessonCtrl.new);

/*View lesson page */
router.get('/:id', lessonCtrl.show);

/*EDIT view the lesson*/
router.get('/:id/edit', lessonCtrl.editView);

/*POST the lesson*/
router.post('/', lessonCtrl.create);

router.put('/:id', lessonCtrl.update);





