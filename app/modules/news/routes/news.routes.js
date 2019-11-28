var express = require('express');
var router = express.Router();

var newsController = require('../controllers/news.controller');

router.get('/', newsController.getAll);
router.post('/', newsController.create);
router.get('/:id', newsController.getById);
router.post('/:id/vote', newsController.vote);
router.delete('/:id', newsController.delete);

module.exports = router;
