var express = require('express');
var router = express.Router();

var usersController = require('../db/controllers/users');

router.get('/', function (req, res, next) {
    res.render('signup');
});

router.post('/', usersController.registerUser);

module.exports = router;
