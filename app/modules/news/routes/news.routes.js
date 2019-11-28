var express = require('express');
var router = express.Router();

var newsController = require('../controllers/news.controller');

router.get('/', newsController.getAll);
router.post('/', newsController.create);
router.get('/:id', newsController.getById);
router.delete('/:id', newsController.delete);

module.exports = router;
