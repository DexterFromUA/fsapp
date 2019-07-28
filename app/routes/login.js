const router = require('express').Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');

require('dotenv').config();

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
                    mail: user.mail,
                    name: user.name,
                    lastName: user.lastName,
                    role: user.role
                };

                const token = jwt.sign({user: payload}, process.env.SECRET);

                res.cookie('Token', token, {maxAge: 90000, domain: process.env.DOMAIN});
                res.json({
                    token: token,
                    user: {
                        id: user.id,
                        firstName: user.name,
                        lastName: user.lastName,
                        mail: user.mail,
                        role: user.role
                    }
                });
            });
        } catch (e) {
            return next(e)
        }
    })(req, res, next)
});

router.post('/check', function (req, res, next) {
    passport.authenticate('jwt', {}, (err, user, info) => {
        try {
            if (err || !user) {
                return next(new Error('error while authenticate: ' + info))
            }

            req.login(user, {session: false}, (error) => {
                if (error) return next(error);

                const payload = {
                    id: user.id,
                    mail: user.mail,
                    name: user.name,
                    lastName: user.lastName,
                    role: user.role
                };

                const token = jwt.sign({user: payload}, process.env.SECRET);

                res.cookie('Token', token, {maxAge: 90000, domain: process.env.DOMAIN});
                res.json({
                    token: token,
                    user: {
                        id: user.id,
                        firstName: user.name,
                        lastName: user.lastName,
                        mail: user.mail,
                        role: user.role
                    }
                });
            });
        } catch (e) {
            return next(e)
        }
    })(req, res, next)
});

module.exports = router;
