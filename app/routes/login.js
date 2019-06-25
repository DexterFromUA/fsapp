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

                //res.cookie('token', token);
                res.json({
                    token: 'Bearer ' + token,
                    user: {
                        firstName: user.name,
                        lastName: user.lastName
                    }
                });
                // res.setHeader('Authorization', 'Bearer ' + token);
                // res.redirect('/');
            });
        } catch (e) {
            return next(e)
        }
    })(req, res, next)
});

module.exports = router;
