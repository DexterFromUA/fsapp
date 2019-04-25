const express = require('express');
const router = express.Router();
const passport = require('passport');

var usersController = require('../db/controllers/users');


// function loginRequired(req, res, next) {
//     if (!req.user) return res.status(401).json({status: 'Please log in'});
//     return next();
// }

router.get('/', function (req, res) {
    res.render('index');
});

router.post('/', function (req, res, next) {
    passport.authenticate('local', function (err, user, info) {
        if (err) { handleResponse(res, 500, 'error'); }
        if (!user) { handleResponse(res, 404, 'User not found'); }
        if (user) {
            req.logIn(user, function (err) {
                if (err) { handleResponse(res, 500, 'error'); }
                handleResponse(res, 200, 'success');
            });
        }
    })(req, res, next);
});

module.exports = router;
