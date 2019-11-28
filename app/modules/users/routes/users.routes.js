var express = require('express');
var router = express.Router();
var auth = require('../middlewares/auth');

var userController = require('../controllers/users.controller');

router.post('/', userController.create);

router.post('/login', userController.login)
router.post('/logout', auth, userController.logout)

module.exports = router;
