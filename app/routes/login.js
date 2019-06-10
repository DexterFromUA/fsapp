const router = require('express').Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');

require('dotenv').config();

router.get('/', function (req, res, next) {
    res.render('login');
});

router.post('/', function (req, res, next) {
    passport.authenticate('login', {}, (err, user, info) => {
        try {
            if (err || !user) {
                return next(new Error('error while authenticate: ' + info))
            }

            req.login(user, {session: false}, (error) => {
                if (error) return next(error);

                const payload = {
                    id: user.id,
                    email: user.mail,
                    name: user.name,
                    lastName: user.lastName,
                    admin: user.role === 'admin' ? true : false
                };

                const token = jwt.sign({user: payload}, process.env.SECRET);

                //res.cookie('token', 'bearer ' + token).redirect('/')
                res.setHeader('Authorization', token);
                res.redirect('/');
            });
        } catch (e) {
            return next(e)
        }
    })(req, res, next)
});

module.exports = router;
