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
                    email: user.mail,
                    name: user.name,
                    lastName: user.lastName,
                    admin: user.role === 'admin' ? true : false
                };

                const token = jwt.sign({user: payload}, process.env.SECRET);

                res.json({
                    token: token,
                    user: {
                        firstName: user.name,
                        lastName: user.lastName,
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
                    email: user.mail,
                    name: user.name,
                    lastName: user.lastName,
                    admin: user.role === 'admin' ? true : false
                };

                const token = jwt.sign({user: payload}, process.env.SECRET);

                res.json({
                    token: token,
                    user: {
                        firstName: user.name,
                        lastName: user.lastName,
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
