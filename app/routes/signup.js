var express = require('express');
var router = express.Router();

var usersController = require('../db/controllers/users');

router.get('/', function (req, res) {
    res.render('signup');
});

router.post('/', function (req, res, next) {
    usersController.registerUser(req, res, next)
        .then(data => {
            if (data.code === 200) {
                res.redirect('/login')
            } else if (data.code === 208) {
                res.redirect('/signup')
            } else res.redirect('/error')
        })
        .catch(e => console.log(e))
});

module.exports = router;
