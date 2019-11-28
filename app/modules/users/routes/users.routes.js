var express = require('express');
var router = express.Router();
var auth = require('../middlewares/auth');

var userController = require('../controllers/users.controller');

//router.get('/', userController.getAll);
router.post('/', userController.create);
//router.get('/:id', userController.getById);
//router.delete('/:id', userController.delete);

router.post('/login', userController.login)
router.post('/logout', auth, userController.logout)

module.exports = router;
