const passport = require('passport');

const authMiddleware = {};

authMiddleware.isLoggedIn = (req, res, next) => {
    passport.authenticate('jwt', {}, (err, user, info) => {
        if (err || !user) {
            return next(new Error('authorize first'))
        } else {
            return next();
        }
    })(req, res, next);
};

//TODO isADMIN

module.exports = authMiddleware;
