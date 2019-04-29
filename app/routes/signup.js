var express = require('express');
var router = express.Router();

var usersController = require('../db/controllers/users');
const auth = require('../utils/auth');

router.get('/', auth.alreadyLogged ,function (req, res) {
    res.render('signup');
});

router.post('/', function (req, res, next) {
    usersController.registerUser(req, res)
        .then(data => {
            if (data.code === 200) {
                res.redirect('/')
            } else if (data.code === 208) {
                res.redirect('/signup')
            } else res.redirect('/error')
        })
        .catch(e => next(e))
});

module.exports = router;
