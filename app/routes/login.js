const express = require('express');
const router = express.Router();

const passport = require('../utils/passportlocal');
const auth = require('../utils/auth');

router.get('/', function (req, res) {
    res.render('index');
});

router.post('/', function (req, res, next) {
    passport.authenticate('local', {}, function (err, user, info) {
        if (err) { auth.handleResponse(res, 500, 'error'); }
        if (!user) { auth.handleResponse(res, 404, 'User not found'); }
        if (user) {
            console.log('REQ', req);
            req.logIn(user, function (err) {
                if (err) { auth.handleResponse(res, 500, 'error'); }
                else res.redirect('/');
            });
        }
    })(req, res, next);
});

module.exports = router;
