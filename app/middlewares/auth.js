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

authMiddleware.isAdmin = (req, res, cb) => {
    passport.authenticate('cookie', {}, (err, user, info) => {
        console.log('user', user)
        if (err || !user) {
            return cb(new Error(info), false)
        } else if (user.role !== 'admin') {
            return cb(new Error('Error: Only admin has access'), false)
        } else {
            console.log('HERE!!!!')
            return cb(null, true);
        }
    })(req, res, next);
}

module.exports = authMiddleware;
